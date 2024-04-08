import Barbare from './Aventuriers/Barbare.ts';
import Mage from './Aventuriers/Mage.ts';
import Paladin from './Aventuriers/Paladin.ts';
import Guerrier from './Aventuriers/Guerrier.ts';
import Voleur from './Aventuriers/Voleur.ts';
import Prêtre from './Aventuriers/Prêtre.ts';
import Character from './Character.ts';


class GameManager {
    private characters: Character[] = [new Barbare(), new Mage(), new Paladin(), new Guerrier(), new Voleur(), new Prêtre()];
    private myCharacters: Character[] = [];

    async displayMenu() {
        this.characters.forEach((character, index) => {
            console.log(`${index + 1}. ${character.name}`);
            console.log(`Attack: ${character.attack}, Defense: ${character.defense}, Speed: ${character.speed}, PV Max: ${character.pvmax}, PV Current: ${character.pvcurrent}`);
        });

        for (let i = 0; i < 3; i++) {
            const index = Number(await prompt('Entrez l\'indice du personnage que vous souhaitez sélectionner : '));
            this.selectCharacter(index - 1);
        }

        console.log(this.getMyCharacters());
    }

    selectCharacter(index: number) {
        if (index >= 0 && index < this.characters.length) {
            this.myCharacters.push(this.characters[index]);
            console.log(`${this.characters[index].name} a été sélectionné.`);
        } else {
            console.log("Index invalide.");
        }
    }

    getMyCharacters() {
        return this.myCharacters;
    }

    
}

const gameManager = new GameManager();
gameManager.displayMenu();

export default gameManager;


