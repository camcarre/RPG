class geant {
    name = "geant";
    attack = 60;
    defense = 20;
    speed = 2;
    pvmax = 150;
    pvcurrent= 150;


    constructor(name: string, attack : number, defense: number, speed: number, pvmax: number, pvcurrent: number, health: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
}