import Character from './Character.ts';
import { selectedCharacters } from './Menu.ts';

class Fight {
    team1: Character[];
    team2: Character[];

    constructor() {
        this.team1 = [];
        this.team2 = [];
    }

    fillTeams(selectedCharacters: string[]) {
        for (const characterName of selectedCharacters) {
            const character = this.createCharacter(characterName);
            this.team1.push(character);
        }
    }

    createCharacter(characterName: string): Character {
    }

    startCombat() {
        console.log("Le combat commence !");
        this.fillTeams(selectedCharacters);

    }
}

export default Fight;






