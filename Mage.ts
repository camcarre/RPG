class Mage{
    name: string = "Mage";
    attack: number = 30;
    defense: number = 30;
    speed: number =5;
    mana: number = 90;
    maxMana: number = 90;

    constructor (name : string, manaattack : number, defense : number, speed : number, mana : number, maxMana : number) {
        this.name = name;
        this.attack = manaattack;
        this.defense = defense;
        this.speed = speed;
        this.mana = maxMana;
        this.maxMana = maxMana;
    }

    attaqueMagique(): void {
        if (this.mana >= 20) {
            console.log(`${this.name} lance une attaque magique !`);
            console.log("L'attaque magique inflige des dégâts !");
            this.mana -= 20;
        } else {
            console.log("Pas assez de mana pour lancer l'attaque magique !");
        }
    }
}  
export default Mage;
    