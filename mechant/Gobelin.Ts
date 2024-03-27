class Gobelin {
    name: string = "gobelin";
    attack: number = 20;
    defense: number = 10;
    speed: number = 10;
    pvmax: number = 50;
    pvcurrent: number = 50;


    constructor(name: string, attack : number, defense: number, speed: number, pvmax: number, pvcurrent: number, health: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
}
export default Gobelin;