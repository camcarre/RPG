class Prêtre{
    name: string = "Prêtre";
    attack: number = 40;
    defense: number = 20;
    speed: number = 10;
    pvmax: number = 80;
    pvcurrent: number = 80;

    constructor (name : string, attack : number, defense : number, speed : number, pvmax : number, pvcurrent : number, cure : number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }

    soigner(cible: Prêtre): void {
        const soin = 0.25 * cible.pvmax;
        cible.pvcurrent = Math.min(cible.pvmax, cible.pvcurrent + soin);
        console.log(`${this.name} utilise un sort de soin sur ${cible.name}. ${cible.name} récupère ${soin} points de vie.`);
    }
}
export default Prêtre;