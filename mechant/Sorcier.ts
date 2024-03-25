class sorcier {
    name = "sorcier";
    manaattack = 40;
    defense = 10;
    speed = 4;
    pvmax = 75;
    pvcurrent= 75;


    constructor(name: string, manaattack : number, defense: number, speed: number, pvmax: number, pvcurrent: number, health: number) {
        this.name = name;
        this.manaattack = manaattack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
}