import { selectedCharacters } from './aleatoiremechant';
import { myCharacters } from './menu';
import Character from './Character.ts';
import { getSelectedCharacters } from './Menu.ts';

class Fight {
    team1: Character[];
    team2: Character[]; 

    constructor() {
        this.team1 = [];
        this.team2 = [];
    }

    fillTeams(selectedCharacters: Character[]) {
        this.team1 = selectedCharacters;
    }

    startCombat() {
        console.log("Le combat commence !");


        const selectedCharacters = getSelectedCharacters();
        this.fillTeams(selectedCharacters);

    }
}

export default Fight;







