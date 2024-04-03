import Boss from './Méchants/boss.ts';
import Geant from './Méchants/geant.ts';
import Gobelin from './Méchants/gobelin.ts';
import Sorcier from './Méchants/sorcier.ts';
import Squelette from './Méchants/squelette.ts';
import Zombie from './Méchants/zombie.ts';
import Character from './Character.ts';

class AleatoireMechant {
    private characters: Character[] = [new Boss(), new Geant(), new Gobelin(), new Sorcier(), new Squelette(), new Zombie()];
    private selectedCharacters: Character[] = [];

    async displayMenu() {
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * this.characters.length);
            const character = this.characters[randomIndex];
            this.selectedCharacters.push(character);
            console.log(`${character.name} a été sélectionné.`);
        }

        console.log(this.getSelectedCharacters());
    }

    getSelectedCharacters() {
        return this.selectedCharacters;
    }
}

const aleatoiremechant = new AleatoireMechant();
aleatoiremechant.displayMenu();

export default aleatoiremechant;
export const selectedCharacters = aleatoiremechant.getSelectedCharacters();