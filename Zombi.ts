class Zombie {
    name = "Zombie";
    attack = 40;
    defense = 10;
    speed = 2;
    pvmax = 60;
    pvcurrent= 60;


    constructor(name: string, attack : number, defense: number, speed: number, pvmax: number, pvcurrent: number, health: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
}