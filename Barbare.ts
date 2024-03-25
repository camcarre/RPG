class Barbare{
    name ="Barbare";
    attack = 100;
    berserkattack = 130;
    defense =20;
    speed =5;
    pvmax =80;
    pvcurrent =80;
    hurt =20;
    cure =0;
    resurrect =0;

    constructor (name : string, attack : number, defense : number, speed : number, pvmax : number, pvcurrent : number, hurt : number){
        this.name = name,
        this.attack = attack,
        this.defense = defense,
        this.speed = speed,
        this.pvmax = pvmax,
        this.pvcurrent,
        this.hurt = hurt,
    }
} 