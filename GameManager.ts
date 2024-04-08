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


class GameManager {
    private fight: Fight;
    private ennemis: (Boss | Gobelin | Sorcier | Squelette | Zombie | Geant)[];

    constructor() {
        this.fight = new Fight();
        this.ennemis = [];
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
        const selectedCharacters: Character[] = this.selectCharacters();
        const selectedEnemies = this.selectRandomEnemies();

        this.fight.startCombat(selectedCharacters, selectedEnemies).then(() => {
            console.log('Combat terminé.');
        }).catch(error => {
            console.error('Une erreur est survenue pendant le combat :', error);
        });
    }

    private selectCharacters(): Character[] {
        const characters: Character[] = [new Barbare(), new Mage(), new Paladin(), new Guerrier(), new Voleur(), new Prêtre()];
        const selectedCharacters: Character[] = [];

        console.log("Sélectionnez 3 personnages pour votre équipe :");
        characters.forEach((character, index) => {
            console.log(`${index + 1}. ${character.name}`);
        });

        for (let i = 0; i < 3; i++) {
            let index;
            do {
                index = Number(prompt('Entrez l\'indice du personnage que vous souhaitez sélectionner : '));
            } while (index < 1 || index > 6); 
            selectedCharacters.push(characters[index - 1]);
            console.log(`${characters[index - 1].name} a été sélectionné.`);
        }

        return selectedCharacters;
    }

    private selectRandomEnemies(): (Boss | Gobelin | Sorcier | Squelette | Zombie | Geant)[] {
        const selectedEnemies: (Boss | Gobelin | Sorcier | Squelette | Zombie | Geant)[] = [];
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
gameManager.displayMenu();

export default gameManager;











