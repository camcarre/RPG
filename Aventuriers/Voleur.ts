import Character from '../Character.ts';

class Voleur extends Character {
    constructor() {
        super("voleur", 50, 30, 10, 80, 80,false);
    }

    private volerObjet(): string {
        const randomNumber = Math.random() * 100;

        if (randomNumber < 40) {
            return "Rien volé";
        } else if (randomNumber < 70) {
            return "Potion";
        } else if (randomNumber < 85) {
            return "Fragment d'étoile";
        } else if (randomNumber < 95) {
            return "Éther";
        } else {
            return "Demi-étoile";
        }
    }
}

export default Voleur;
