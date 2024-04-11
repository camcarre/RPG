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
    private player: Character;
    private clearScreen: string = "\x1b[2J\x1b[0;0H";
    private fight: Fight;
    private ennemis: (Boss | Gobelin | Sorcier | Squelette | Zombie | Geant)[];
    private menu: Menu;
    private combatCount = 0;
    private selectedCharacters: Character[];
    private characters: Character[];
    private inventory: string[];


        constructor() {
            this.fight = new Fight();
            this.ennemis = [];
            this.menu = new Menu();
            this.initializeEnemies();
            this.selectedCharacters = this.selectCharacters();
            this.characters = this.selectedCharacters;
            this.inventory = [];

        }

    private initializeEnemies() {
        this.addEnnemi(new Squelette());
        this.addEnnemi(new Sorcier());
        this.addEnnemi(new Gobelin());
        this.addEnnemi(new Zombie());
        this.addEnnemi(new Geant());
    }

    private addEnnemi(ennemi:Gobelin | Sorcier | Squelette | Zombie | Geant) {
        this.ennemis.push(ennemi);
    }

    public startGame() {
        this.initializeInventory();
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
        const openChest = confirm("Vous trouvez un coffre. Voulez-vous l'ouvrir ?");
        if (openChest) {
            this.gameLoop();
        } else {
            console.log("Vous passez à la salle suivante.");
            this.gameLoop();
        }
    } else if (this.combatCount === 5) {
        this.fightBoss();
    }
    console.log(this.clearScreen);
}

    private gameLoop = () => {
        this.makeChoice("\n\x1b[34mVoulez-vous entrer dans une salle ? ou arrêter le jeu ?\x1b[0m", this.enterRoom, this.quit);
    }

        private randomCombat = (): Promise<void> => {
            return new Promise((resolve, reject) => {
                const selectedEnemies = this.selectRandomEnemies();

            this.fight.startCombat(this.selectedCharacters, selectedEnemies, this.menu)
                .then(() => {
                    console.log('\n\x1b[32mCombat terminé.\x1b[0m');
                    resolve();
                    console.log(this.clearScreen);
                })
                .catch(error => {
                    console.error('Une erreur est survenue pendant le combat :', error);
                    reject(error);
                });
        });
    }

        private fightBoss = (): Promise<void> => {
            return new Promise((resolve, reject) => {
                const boss = new Boss(); 

                this.fight.startCombat(this.selectedCharacters, [boss], this.menu)
                    .then(() => {
                        this.printWin();
                        resolve();
                    })
                    .catch(error => {
                        console.error('Une erreur est survenue pendant le combat :', error);
                        reject(error);
                    });
            });
        }




    private initializeInventory() {
        this.inventory.push('Potion 🧪');
        this.inventory.push('Potion 🧪');
        this.inventory.push('Ether 💊');
        this.inventory.push('Morceau d\'étoile ✨');
    }

        private printWin(): void {
            console.log(`
            +------------------+
            |                  |
            |          _       |
            |__      _(_)_ __  |
            |\ \ /\ / / | '_ \ |
            | \ V  V /| | | | ||
            |  \_/\_/ |_|_| |_||
            |                  |
            +------------------+
            `);
        }

    private quit = () => {
        console.log("\n\x1b[32mVous avez choisi d'arrêter le jeu\x1b[0m");
        console.log("\x1b[32mLe jeu est terminé.\x1b[0m");
        Deno.exit();
    }

        private selectCharacters(): Character[] {
            const characters: Character[] = [new Barbare(), new Mage(), new Paladin(), new Guerrier(), new Voleur(), new Prêtre()];
            const selectedCharacters: Character[] = [];

        console.log('\x1b[33m%s\x1b[0m', `
        +------------------------------------------------+
        |                                                |
        |__        _______ _     ____ ___  __  __ _____  |
        |\\ \\      / / ____| |   / ___/ _ \\|  \\/  | ____| |
        | \\ \\ /\\ / /|  _| | |  | |  | | | | |\\/| |  _|   |
        |  \\ V  V / | |___| |__| |__| |_| | |  | | |___  |
        |   \\_/\\_/  |_____|_____\\____\\___/|_|  |_|_____| |
        |                                                |
        |                   _____ ___                    |
        |                  |_   _/ _ \\                   |
        |                    | || | | |                  |
        |                    | || |_| |                  |
        |                    |_| \\___/                   |
        |                                                |
        | _____ _   _ _____    ____    _    __  __ _____ |
        ||_   _| | | | ____|  / ___|  / \\  |  \\/  | ____||
        |  | | | |_| |  _|   | |  _  / _ \\ | |\\/| |  _|  |
        |  | | |  _  | |___  | |_| |/ ___ \\| |  | | |___ |
        |  |_| |_| |_|_____|  \\____/_/   \\_\\_|  |_|_____||
        |                                                |
        +------------------------------------------------+
        `);
        console.log("\x1b[34mBienvenue dans le jeu !\x1b[0m");
        console.log(`Bienvenue dans "Explorateurs du Donjon" ! Choisissez un groupe d'aventuriers parmi 6 classes. Parcourez 5 salles : combats, coffres et Boss. Utilisez des objets pour survivre.
        Affrontez des ennemis et un Boss redoutable. Gagnez en terrassant le Boss ou perdez si tous vos aventuriers sont vaincus. Prêt pour l'aventure ?`);




        console.log("\x1b[34mSélectionnez 3 personnages pour votre équipe :\x1b[0m");
        characters.forEach((character, index) => {
            console.log('\x1b[31m%s\x1b[0m', `${index + 1}. ${character.name}`);
            console.log('\x1b[32m%s\x1b[0m', `Attaque : ${character.attack}, Défense : ${character.defense}, Vitesse : ${character.speed}, PV Max : ${character.pvmax}, PV Actuels : ${character.pvcurrent}`);
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

    private viewInventory(itemIndex?: number) {
        if (itemIndex !== undefined) {
            console.log(`Item à l'index ${itemIndex} : ${this.inventory[itemIndex]}`);
        } else {
            console.log(this.inventory.join(' '));    }
    }
    
    private makeChoice(question: string, yesCallback: () => void, noCallback: () => void) {
        let choice;
        do {
            choice = prompt(`${question} (1 pour oui, 2 pour non, 3 pour voir l'inventaire, 4 pour utiliser un item)`);
            if (choice === '4') {
                let itemIndex = Number(prompt('Entrez l\'indice de l\'item que vous souhaitez utiliser : '));
                this.player.useItem(itemIndex);
            }
        } while (choice !== '1' && choice !== '2' && choice !== '3');
        if (choice === '1') yesCallback();
        else if (choice === '2') noCallback();
        else if (choice === '3') this.viewInventory();
    }
    }
    
const gameManager = new GameManager();
gameManager.startGame();

export default gameManager;









