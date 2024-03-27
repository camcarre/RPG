class Menu {
    // Déclaration des variables privées de la classe
    private selectedCharacters: string[] = [];
    private characters = ["Guerrier", "Mage", "Paladin", "Barbare", "Prêtre", "Voleur"];
    private characterDescriptions: { [key: string]: string } = {
        "Guerrier": "Le guerrier aura une attaque et une défense élevée, il ne possèdera pas d'attaque spéciale, et une vitesse moyenne. Il excelle dans les combats rapprochés en infligeant et en encaissant des dégâts physiques.",
        "Mage": "Le Mage aura une attaque physique faible et une défense faible également. Il possèdera une quantité de Mana ainsi qu'une attaque magique qui la consomme, mais ignore la défense ennemie. Il est capable d'infliger des dégâts magiques puissants, contournant la défense de l'ennemi.",
        "Paladin": "Le paladin aura une attaque moins élevée que le guerrier et une défense légèrement plus élevée. Il possèdera une attaque sainte qui ciblera tous les ennemis, leur infligeant 40% des dégâts d'une attaque physique ((attaque - défense adverse)*0.4). Il est efficace pour protéger ses alliés tout en infligeant des dégâts aux ennemis.",
        "Barbare": "Le barbare aura une défense faible et une attaque plus élevée encore que le guerrier. Il aura une attaque Berserk qui attaque un ennemi au hasard pour 130% des dégâts physiques normaux (attaque - défense adverse)*1.3, mais il se blessera de 20% de sa vie en l'effectuant. Il est redoutable en termes d'attaques physiques, mais il faut faire attention à sa propre santé lorsqu'il utilise son attaque Berserk.",
        "Prêtre": "Le prêtre aura une défense faible et une attaque légèrement plus forte que le mage. Il disposera d'une action de soin, permettant de restaurer 25% des points de vie d'un allié ou de lui-même. Il est utile pour maintenir la santé de l'équipe et guérir les blessures.",
        "Voleur": "Le voleur aura une défense moyenne ainsi qu'une attaque physique moyenne, mais disposera d'une grande vitesse. Il disposera d'une action permettant de voler un objet : (40% de chances de ne rien voler, 30% d'obtenir une potion, 15% d'obtenir un fragment d'étoile, 10% d'obtenir un éther et 5% d'obtenir une demi-étoile). Il excelle dans la vitesse et la furtivité, capable de voler des objets précieux pendant les combats."
    };

    getSelectedCharacters() {
        return this.selectedCharacters;
    }

    // Une méthode asynchrone qui pose une question à l'utilisateur et retourne sa réponse
    private async question(message: string): Promise<string> {
        console.log(message);
        const buf = new Uint8Array(1024);
        const n = <number>await Deno.stdin.read(buf);
        return new TextDecoder().decode(buf.subarray(0, n)).trim();
    }

    // Une méthode asynchrone qui permet à l'utilisateur de choisir un personnage
    private async makeChoice() {
        if (this.selectedCharacters.length >= 3) {
            console.log("Vous avez sélectionné vos trois personnages : ", this.selectedCharacters);
            return;
        }

        this.characters.forEach((character, index) => {
            console.log(`${index + 1}. ${character} - ${this.characterDescriptions[character]}`);
        });

        const answer = await this.question("Veuillez choisir un personnage : ");
        const choice = parseInt(answer);

        // Si le choix de l'utilisateur est valide et que le personnage choisi n'a pas déjà été sélectionné
        if (choice >= 1 && choice <= 6 && !this.selectedCharacters.includes(this.characters[choice - 1])) {
            this.selectedCharacters.push(this.characters[choice - 1]);
        } else {
            console.log("Choix non valide. Veuillez réessayer.");
        }

        this.makeChoice(); // Appelle la méthode makeChoice à nouveau pour permettre à l'utilisateur de faire un autre choix
    }

    // Une méthode publique qui démarre le jeu
    public start() {
        this.makeChoice(); // Appelle la méthode makeChoice pour permettre à l'utilisateur de choisir un personnage
    }
}

const game = new Menu();
game.start();
export const selectedCharacters = game.getSelectedCharacters();



