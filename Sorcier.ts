class Sorcier {
    name: string = "sorcier";
    manaattack: number = 40;
    defense: number = 10;
    speed: number = 4;
    pvmax: number = 75;
    pvcurrent: number = 75;


    constructor(name: string, manaattack : number, defense: number, speed: number, pvmax: number, pvcurrent: number, health: number) {
        this.name = name;
        this.manaattack = manaattack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
}
export default Sorcier;