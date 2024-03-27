class Paladin{
    name: string = "Paladin";
    attack: number = 60;
    saintAttack: number;
    defense: number = 90;
    speed: number = 5;
    pvmax: number = 80;
    pvcurrent: number =80;


    constructor (name : string, attack : number, saintattack : number, defense : number, speed : number, pvmax : number, pvcurrent : number) {
        this.name = name;
        this.attack = attack;
        this.attack = saintattack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent;
    }

    attaqueSainte(adversaires: Paladin[]): void {
        console.log(`${this.name} lance une attaque sainte !`);
        adversaires.forEach(adversaire => {
            const degats = Math.max(0, (this.saintAttack - adversaire.defense) * 0.4);
            adversaire.pvcurrent = Math.max(0, adversaire.pvcurrent - degats);
            console.log(`${adversaire.name} subit ${degats} dégâts.`);
        });
    }
}  
export default Paladin;