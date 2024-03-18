class Character {
    name ="";
    attack = 0;
    defense =0;
    speed =0;
    pvmax =0;
    pvcurrent =0;

    constructor(name :string, attack : number, defense :number, speed : number, pvmax : number, pvcurrent : number){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
}