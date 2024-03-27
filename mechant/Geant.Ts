class Geant {
    name: string = "geant";
    attack: number = 60;
    defense: number = 20;
    speed: number = 2;
    pvmax: number = 150;
    pvcurrent: number = 150;


    constructor(name: string, attack : number, defense: number, speed: number, pvmax: number, pvcurrent: number, health: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
}
export default Geant;