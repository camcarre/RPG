import demietoile from "./objet/demietoile.ts";
import Ether from "./objet/Ether.ts";
import MorceauEtoile from "./objet/MorceauEtoile.ts";
import potion from "./objet/potion.ts";
import Character from "./Character.ts";

const obj = [demietoile, Ether, MorceauEtoile, potion];
const nbObj = 2;
const chestContents = [];
class Chest {
    private _objet: potion | demietoile | MorceauEtoile | Ether;
    private _ouvert: boolean;

    constructor(objet: potion | demietoile | MorceauEtoile | Ether) {
            this._objet = objet;
            this._ouvert = false;
    }
    getRandomNumber(min: number, max: number) {
    
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    open(currentPlayer: Character) {
      const randomNumber = this.getRandomNumber(1, 2);

    
      
      if (randomNumber === 1) {
        if (obj.length > 0) {
            for (let i = 0; i < nbObj; i++) {
                const randomIndex = Math.floor(Math.random() * obj.length);
                    const objInChest = obj[randomIndex];
                    
            } 
        }
        
        console.log('Vous avez trouvé deux objets dans le coffre');

      } else {
            console.log('Le coffre était piégé, vous avez perdu 10 points de vie');
            currentPlayer.pvcurrent -= 10;
        }
    }
  }

  const chest = new Chest(new obj[0]);
  const character = new Character('Toto', 10, 5, 5, 100, 100)

  const test = chest.getRandomNumber(20, 30)

  chest.open(character)


