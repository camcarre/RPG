class Menu {
    question: string;
    options: string[];
    
    constructor(question: string, options: string[]) {
        this.question = question;
        this.options = options;
    }

    askQuestion(): string {
        console.log(this.question);
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });

        
        return this.getUserChoice();
    }

    
    private getUserChoice(): string {
        const userInput = prompt("Votre choix: ");
        const choice = parseInt(userInput);
        if (!isNaN(choice) && choice >= 1 && choice <= this.options.length) {
            return this.options[choice - 1];
        } else {
            console.log("Choix invalide. Veuillez entrer un numéro correspondant à une option.");
            return this.getUserChoice();
        }
    }
}

const question = "Quelle est votre couleur préférée ?";
const options = ["Rouge", "Bleu", "Vert", "Jaune"];
const menu = new Menu(question, options);
const response = menu.askQuestion();
console.log(`Vous avez choisi: ${response}`);

