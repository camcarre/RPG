import Character from './Character';

export default abstract class Objet {
    abstract use(cible: Character): void;
}
