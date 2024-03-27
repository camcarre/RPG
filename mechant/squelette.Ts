class Squelette {
    name: string = "squelette";
    attack: number = 40;
    defense: number = 0;
    speed: number = 5;
    pvmax: number = 40;
    pvcurrent: number = 40;


    constructor(name: string, attack : number, defense: number, speed: number, pvmax: number, pvcurrent: number, health: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
}
export default Squelette;