import { selectedCharacters } from './aleatoiremechant';
import { myCharacters } from './menu';
import Character from './Character.ts';

// Code for team1 and team2

// Create instances of the classes
const team1 = myCharacters;
const team2 = selectedCharacters;

// Code for the fight between team1 and team2
team1.forEach(character => character.attack(team2));
team2.forEach(character => character.attack(team1));
// Repeat the attack process until one of the teams is defeated
while (team1.isAlive() && team2.isAlive()) {
    team1.attack(team2);
    team2.attack(team1);
}
// Determine the winner
if (team1.isAlive()) {
    console.log("Team 1 wins!");
} else {
    console.log("Team 2 wins!");
}
// Import the necessary classes for the teams

// Create instances of the teams
const equipe1 = new Equipe1();
const equipe2 = new Equipe1();

// Add characters to each team
const selectedCharacters1 = myCharacters();
const selectedCharacters2 = selectedCharacters;

selectedCharacters1.forEach((character: Character) => {
    equipe1.addCharacter(character);
});

selectedCharacters2.forEach((character: Character) => {
    equipe2.addCharacter(character);
});

// Code for the fight between equipe1 and equipe2
equipe1.attack(equipe2);
equipe2.attack(equipe1);

// Repeat the attack process until one of the teams is defeated
while (equipe1.isAlive() && equipe2.isAlive()) {
    equipe1.attack(equipe2);
    equipe2.attack(equipe1);
}

// Determine the winner
if (equipe1.isAlive()) {
    console.log("Equipe 1 wins!");
} else {
    console.log("Equipe 2 wins!");
}