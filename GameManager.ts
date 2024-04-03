import Boss from './Méchants/Boss.ts';
import Geant from './Méchants/Geant.ts';
import Gobelin from './Méchants/Gobelin.ts';
import Sorcier from './Méchants/Sorcier.ts';
import Squelette from './Méchants/Squelette.ts';
import Zombie from './Méchants/Zombie.ts';
import Menu from './Menu.ts';
import Fight from './Fight.ts';
import Character from './Character.ts';

class GameManager {
    private menu: Menu;
    private fight: Fight;
    private ennemis: (Boss | Gobelin | Sorcier | Squelette | Zombie | Geant)[];

    constructor() {
        this.menu = new Menu();
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

    async startGame() {
        await this.menu.displayMenu();

        const selectedCharacters: Character[] = this.menu.getSelectedCharacters();
        const selectedEnemies = this.selectRandomEnemies();

        await this.fight.startCombat(selectedCharacters, selectedEnemies);
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
gameManager.startGame();

export default gameManager;




