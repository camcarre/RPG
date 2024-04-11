import Character from '../Character.ts';
import Objet from '../Objet.ts';

export default class MorceauEtoile extends Objet {
    use(cible: Character): void {
        if (cible.isKO) {
            const pvRestores = Math.ceil(cible.pvmax * 0.2);
            cible.pvcurrent = pvRestores;
            cible.isKO = false;
            console.log(`${cible.name} est ressuscité avec ${pvRestores} points de vie grâce au morceau d'étoile.`);
        } else {
            const pvRestores = Math.ceil(cible.pvmax * 0.5);
            cible.pvcurrent = Math.min(cible.pvcurrent + pvRestores, cible.pvmax);
            console.log(`${cible.name} récupère ${pvRestores} points de vie grâce au morceau d'étoile.`);
        }
    }
}
