import Character from './Character';

export default abstract class Objet {
    abstract utiliser(cible: Character): void;
}
