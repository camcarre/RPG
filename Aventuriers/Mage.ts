import Character from '../Character.ts';

 export default class Mage extends Character {
    mana: 90;
    maxMana: 90;

    constructor() {
        super("🔮 Mage", 40, 30, 6, 120, 120, false);
        this.mana = this.mana; 
        this.maxMana = this.maxMana; 
    }

    
    private attaqueMagique(): void {
        if (this.mana >= 20) {
            console.log(`${this.name} lance une attaque magique !`);
            console.log("L'attaque magique inflige des dégâts !");
            this.mana -= 20;
        } else {
            console.log("Pas assez de mana pour lancer l'attaque magique !");
        }
    }
}
