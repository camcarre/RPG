class Boss {
    name: string = "Nécrosang le Seigneur des Ténèbres";
    attack: number = 70;
    defense: number = 30;
    speed: number = 4;
    pvmax: number = 300;
    pvcurrent: number = 350;


    constructor(name: string, attack : number, defense: number, speed: number, pvmax: number, pvcurrent: number, health: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
}
export default Boss;