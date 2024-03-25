

class Character {
    name ="";
    attack = 0;
    defense =0;
    speed =0;
    pvmax =0;
    pvcurrent =0;
    hurt =0;
    cure =0;
    resurrect =0;


    constructor(name :string, attack : number, defense :number, speed : number, pvmax : number, pvcurrent : number, hurt : number, cure : number, resurrect : number){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
        this.hurt = hurt;
        this.cure = cure;
        this.resurrect = resurrect;
    }
}