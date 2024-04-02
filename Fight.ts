import Guerrier from './Guerrier';
import Mage from './Mage';
import Paladin from './Paladin';
import Barbare from './Barbare';
import Prêtre from './Prêtre';
import Voleur from './Voleur';
import Character from './Character';

class Fight {
    team1: Character[];
    team2: Character[];

    constructor(team1: Character[], team2: Character[]) {
        this.team1 = team1;
        this.team2 = team2;
    }
    for (let i = 0; i < this.order.length; i++) {
        const character = this.order[i];
        if (character.pvcurrent > 0) {
          console.log(`${character.name}'s turn`);
          const choice = menu.displayAndGetChoice();
          switch (choice) {
            case 1:
              this.attack(character, this.team2);
              break;
            case 2:
              this.specialAttack(character, this.team2);
              break;
            case 3:
              this.heal(character, this.team1);
              break;
            case 4:
              this.displayTeam(this.team1);
              break;
            default:
              break;
          }
          if (this.team2.length === 0) {
            console.log("Team 1 wins!");
            break;
          }
          if (this.team1.length === 0) {
            console.log("Team 2 wins!");
            break;
          }
        }
      }
    characterDeath(character: Character, team: Character[]) {
        const index = team.indexOf(character);
        team.splice(index, 1);
      }

    determineTurnOrder(): Character[] {
        const allCharacters = this.team1.concat(this.team2);
        return allCharacters.sort((a, b) => b.speed - a.speed);
    }

    startFight() {
        let turns = this.determineTurnOrder();
        let isFightOver = false;

        while (!isFightOver) {
            for (const character of turns) {
                if (character.pvcurrent > 0) {
                    console.log(`${character.name}'s turn`);
                }
            }
            
            isFightOver = true;
        }
    }
}

const team1 = [];
const team2 = [];
const fight = new Fight(team1, team2);
fight.startFight();
