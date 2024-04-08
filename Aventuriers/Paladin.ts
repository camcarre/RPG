import Character from '../Character.ts';

class Paladin extends Character {
    saintAttack: number;

    constructor(saintAttack : number) {
        super("Paladin", 60, 90, 5, 80, 80);
        this.saintAttack = saintAttack;
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
