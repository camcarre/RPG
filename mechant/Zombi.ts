class Zombie {
    name: string = "Zombie";
    attack: number = 40;
    defense: number = 10;
    speed: number = 2;
    pvmax: number = 60;
    pvcurrent: number = 60;


    constructor(name: string, attack : number, defense: number, speed: number, pvmax: number, pvcurrent: number, health: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
}
export default Zombie;