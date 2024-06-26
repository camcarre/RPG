import Character from '../Character.ts';
import Objet from '../Objet.ts';

export default class DemiEtoile extends Objet {
    public use(cible: Character): void {
        if (cible.isKO) {
            cible.isKO = false;
            console.log(`${cible.name} est ressuscité avec tous ses points de vie grâce à la demi-étoile.`);
        } else {
            const pvRestores = cible.pvmax - cible.pvcurrent;
            cible.pvcurrent = cible.pvmax;
            console.log(`${cible.name} récupère tous ses points de vie grâce à la demi-étoile.`);
        }
    }
}
