import Character from '../Character.ts';

class Prêtre extends Character {
    constructor() {
        super("Prêtre", 40, 20, 10, 80, 80);
    }

    soigner(cible: Prêtre): void {
        const soin = 0.25 * cible.pvmax;
        cible.pvcurrent = Math.min(cible.pvmax, cible.pvcurrent + soin);
        console.log(`${this.name} utilise un sort de soin sur ${cible.name}. ${cible.name} récupère ${soin} points de vie.`);
    }
}

export default Prêtre;
