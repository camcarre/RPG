class Paladin{
    name ="Paladin";
    attack = 60
    saintattack = 40;
    defense =90;
    speed =5;
    pvmax =80;
    pvcurrent =80;
    hurt =0;
    cure =0;
    resurrect =0;

    constructor (name : string, attack : number, saintattack : number, defense : number, speed : number, pvmax : number, pvcurrent : number) {
        this.name = name;
        this.attack = attack;
        this.saintattack = saintattack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent;
    }
}  