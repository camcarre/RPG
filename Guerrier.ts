class Guerrier{
    name ="Guerrier";
    attack = 80;
    defense =80;
    speed =5;
    pvmax =70;
    pvcurrent =70;
    hurt =0;
    cure =0;
    resurrect =0;

    constructor (name : string, attack : number, defense : number, speed : number, pvmax : number, pvcurrent : number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent;
    }
}