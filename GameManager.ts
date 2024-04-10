import Barbare from './Aventuriers/Barbare.ts';
import Mage from './Aventuriers/Mage.ts';
import Paladin from './Aventuriers/Paladin.ts';
import Guerrier from './Aventuriers/Guerrier.ts';
import Voleur from './Aventuriers/Voleur.ts';
import Prêtre from './Aventuriers/Prêtre.ts';
import Boss from './Méchants/Boss.ts';
import Geant from './Méchants/Geant.ts';
import Gobelin from './Méchants/Gobelin.ts';
import Sorcier from './Méchants/Sorcier.ts';
import Squelette from './Méchants/Squelette.ts';
import Zombie from './Méchants/Zombie.ts';
import Fight from './Fight.ts';
import Character from './Character.ts';
import Menu from './Menu.ts';


class GameManager {
    private fight: Fight;
    private ennemis: (Boss | Gobelin | Sorcier | Squelette | Zombie | Geant)[];
    private menu: Menu;
    private combatCount = 0;

    constructor() {
        this.fight = new Fight();
        this.ennemis = [];
        this.menu = new Menu();
        this.initializeEnemies();
    }

    initializeEnemies() {
        this.addEnnemi(new Squelette());
        this.addEnnemi(new Boss());
        this.addEnnemi(new Sorcier());
        this.addEnnemi(new Gobelin());
        this.addEnnemi(new Zombie());
        this.addEnnemi(new Geant());
    }

    addEnnemi(ennemi: Boss | Gobelin | Sorcier | Squelette | Zombie | Geant) {
        this.ennemis.push(ennemi);
    }

    startGame() {
        console.log("Bienvenue dans notre RPG!");
        this.makeChoice("Voulez-vous entrer dans une salle ? ou arrêter le jeu ?", this.enterRoom, this.quit);
    }

    private enterRoom = () => {
        console.log("Vous entrez dans une salle.");
        this.combatCount++;
        if (this.combatCount === 1 || this.combatCount === 3) {
            this.randomCombat().then(() => {
                this.gameLoop();
            });
        } else if (this.combatCount === 2 || this.combatCount === 4) {
            this.openChest();
            this.gameLoop();
        } else if (this.combatCount === 5) {
            this.fightBoss();
        }
    }

    private gameLoop = () => {
        this.makeChoice("Voulez-vous entrer dans une salle ? ou arrêter le jeu ?", this.enterRoom, this.quit);
    }
    

    private openChest = () => {
        console.log("Vous trouvez un coffre !");
        //coffre
    }

    private randomCombat = (): Promise<void> => {
        return new Promise((resolve, reject) => {
            const selectedCharacters: Character[] = this.selectCharacters();
            const selectedEnemies = this.selectRandomEnemies();

            this.fight.startCombat(selectedCharacters, selectedEnemies, this.menu)
                .then(() => {
                    console.log('Combat terminé.');
                    resolve();
                })
                .catch(error => {
                    console.error('Une erreur est survenue pendant le combat :', error);
                    reject(error);
                });
        });
    }

    private fightBoss(): Boss[] {
        const selectedEnemies: Boss[] = [];
        const availableEnemies = Array(3).fill(new Boss());
        
    return selectedEnemies;
}

    private quit = () => {
        console.log("Vous avez choisi d'arrêter le jeu");
        console.log("Le jeu est terminé.");
        Deno.exit();
    }

    private makeChoice(promptMessage: string, action1: () => void, action2: () => void) {
        const choice = prompt(promptMessage);
        if (choice === "1") {
            action1();
        } else if (choice === "2") {
            action2();
        } else {
            console.log("Choix invalide. Veuillez choisir entre 1 et 2.");
            this.makeChoice(promptMessage, action1, action2);
        }
    }

    private selectCharacters(): Character[] {
        const characters: Character[] = [new Barbare(), new Mage(), new Paladin(), new Guerrier(), new Voleur(), new Prêtre()];
        const selectedCharacters: Character[] = [];

        console.log("\x1b[34mSélectionnez 3 personnages pour votre équipe :\x1b[0m");
        characters.forEach((character, index) => {
            console.log(`${index + 1}. ${character.name}`);
        });

        for (let i = 0; i < 3; i++) {
            let index;
            do {
                index = Number(prompt('\n\x1b[34mEntrez l\'indice du personnage que vous souhaitez sélectionner : \x1b[0m'));
            } while (index < 1 || index > 6); 
            selectedCharacters.push(characters[index - 1]);
            console.log(`\n\x1b[33m${characters[index - 1].name} a été sélectionné.\x1b[0m`);
        }

        return selectedCharacters;
    }

    private selectRandomEnemies(): (Gobelin | Sorcier | Squelette | Zombie | Geant)[] {
        const selectedEnemies: (Gobelin | Sorcier | Squelette | Zombie | Geant)[] = [];
        const availableEnemies = this.ennemis.slice();

        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * availableEnemies.length);
            const randomEnemy = availableEnemies.splice(randomIndex, 1)[0];
            selectedEnemies.push(randomEnemy);
        }

        return selectedEnemies;
    }
}

const gameManager = new GameManager();
gameManager.startGame();

export default gameManager;











