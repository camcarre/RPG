class Menu {
    question: string;
    options: string[];

    constructor(question: string, options: string[]) {
        this.question = question;
        this.options = options;
    }

    displayAndGetChoice(): number {
        console.log(this.question);
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
        let choice = parseInt(prompt("Choose an option: "));
        while (isNaN(choice) || choice < 1 || choice > this.options.length) {
            console.log("Invalid choice. Please choose again.");
            choice = parseInt(prompt("Choose an option: "));
        }
        return choice;
    }
}


const menu = new Menu("Choose your class:", ["Warrior", "Mage", "Paladin", "Barbarian", "Priest", "Thief"]);
const choice = menu.displayAndGetChoice();
console.log(`You chose: ${menu.options[choice - 1]}`);


