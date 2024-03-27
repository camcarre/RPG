class Guerrier{
    name: string ="Guerrier";
    attack: number = 80;
    defense: number = 80;
    speed: number = 5;
    pvmax: number = 70;
    pvcurrent: number =70;

    constructor (name : string, attack : number, defense : number, speed : number, pvmax : number, pvcurrent : number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent;
    }
}
export default Guerrier;