import Character from './Character.ts';

export default abstract class Objet {
    abstract use(cible: Character): void;
}
