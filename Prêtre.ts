class Prêtre{
    name ="Prêtre";
    attack = 40;
    defense =20;
    speed =10;
    pvmax =80;
    pvcurrent =80;
    hurt =0;
    cure =25;
    resurrect =0;

    constructor (name : string, attack : number, defense : number, speed : number, pvmax : number, pvcurrent : number, cure : number) {
        this.name = name,
        this.attack = attack,
        this.defense = defense,
        this.speed = speed,
        this.pvmax = pvmax,
        this.pvcurrent = pvcurrent,
        this.cure = cure
    }
}