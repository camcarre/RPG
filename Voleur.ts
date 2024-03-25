class Voleur{
    name ="Voleur";
    attack = 50;
    defense =50;
    speed =10;
    pvmax =80;
    takeobj =0;
    pvcurrent =80;
    hurt =0;
    cure =0;
    resurrect =0;

    constructor (name : string, attack : number, defense : number, speed : number, pvmax : number, takeobj : number, pvcurrent : number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent;
        this.takeobj = takeobj;
    }
}