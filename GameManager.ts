import Menu from './Menu.ts';
import Fight from './Fight.ts';
import Character from './Character.ts';
import Enemy from './Enemy.ts';
import { getSelectedCharacters } from './Menu.ts';

class GameManager {
    private menu: Menu;
    private fight: Fight;

    constructor() {
        this.menu = new Menu();
        this.fight = new Fight();
    }

    async startGame() {
        await this.menu.displayMenu();

        const selectedCharacters: Character[] = this.menu.getSelectedCharacters();

        const enemies: Enemy[] = this.generateRandomEnemies();

        await this.fight.startCombat(getSelectedCharacters, enemies);
    }

    private generateRandomEnemies(): Enemy[] {
        
        return [];
    }
}

const gameManager = new GameManager();
gameManager.startGame();
