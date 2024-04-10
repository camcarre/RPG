import Character from '../Character';
import Objet from '../Objet';

export default class Potion extends Objet {
    utiliser(cible: Character): void {
        const pvRestores = Math.ceil(cible.pvmax * 0.5);
        cible.pvcurrent = Math.min(cible.pvcurrent + pvRestores, cible.pvmax);
        console.log(`${cible.name} récupère ${pvRestores} points de vie avec la potion.`);
    }
}
