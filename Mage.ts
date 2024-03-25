class Mage{
    name ="Mage";
    manaattack = 30;
    defense =30;
    speed =5;
    pvmax =90;
    pvcurrent =90;
    hurt =0;
    cure =0;
    resurrect =0;

    constructor (name : string, manaattack : number, defense : number, speed : number, pvmax : number, pvcurrent : number) {
        this.name = name;
        this.manaattack = manaattack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent;
    }
}  
    