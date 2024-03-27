class Voleur{
    name: string = "Voleur";
    attack: number = 50;
    defense: number = 50;
    speed: number = 10;
    pvmax: number = 80;
    pvcurrent: number =80;

    constructor (name : string, attack : number, defense : number, speed : number, pvmax : number, pvcurrent : number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent;
    }
    
    volerObjet(): string {
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