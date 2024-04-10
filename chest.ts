import DemiEtoile from "./objet/demietoile";
import Ether from "./objet/Ether";
import MorceauEtoile from "./objet/morceauetoile";
import potion from "./objet/potion";
import Character from "./Character";

const obj = [DemiEtoile, Ether, MorceauEtoile, potion];
const nbObj = 2;
const objInChest = [];
class Chest {
    private _objet: potion | DemiEtoile | MorceauEtoile | Ether;
    private _ouvert: boolean;

    constructor(objet: potion | DemiEtoile | MorceauEtoile | Ether) {
        this._objet = objet;
        this._ouvert = false;
    }
    if (obj.length > 0) {
        for (let i = 0; i < nbObj; i++) {
          const randomIndex = Math.floor(Math.random() * obj.length);
            const objInChest = obj[randomIndex];
          } 
    }
}
    
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      const randomNumber = this.getRandomNumber(1, 2);

      if (randomNumber === 1) {
        console.log('Vous avez trouvé ' + objInChest + 'dans le coffre');

      }
        else {
            console.log('Le coffre était piégé, vous avez perdu 10 points de vie');
            currentPlayer.pvcurrent -= 10;
        }
      
