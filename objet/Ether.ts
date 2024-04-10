import Character from '../Character';
import Objet from '../Objet';

export default class Ether extends Objet {
    utiliser(cible: Character): void {
        const magieRestores = Math.ceil(cible.magieMax * 0.3);
        cible.magieCurrent = Math.min(cible.magieCurrent + magieRestores, cible.magieMax);
        console.log(`${cible.name} récupère ${magieRestores} points de magie grâce à l'ether.`);
    }
}
