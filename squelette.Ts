class squelette {
    name = "squelette";
    attack = 40;
    defense = 0;
    speed = 5;
    pvmax = 40;
    pvcurrent= 40;


    constructor(name: string, attack : number, defense: number, speed: number, pvmax: number, pvcurrent: number, health: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
}