class gobelin {
    name = "gobelin";
    attack = 20;
    defense = 10;
    speed = 10;
    pvmax = 50;
    pvcurrent= 50;


    constructor(name: string, attack : number, defense: number, speed: number, pvmax: number, pvcurrent: number, health: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
}