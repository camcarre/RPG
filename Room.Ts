//import { Coffre } from "./coffre";
//import { Coffre } from "./coffre";

console.log("Bienvenue dans notre RPG!");
console.log("Faites un choix entre 1 et 2:");

const choix = prompt("Choisissez entre avancer dans une nouvelle salle et d'arrêter le jeu");

if (choix === "1") {
    console.log("Avancé dans la salle.");


                if ("combatGagné") {
                console.log("Vous avez gagné le combat!");
                console.log("Faites un nouveau choix entre 1 et 2:");
                const nouveauChoix = prompt("Choisissez entre avancer dans une nouvelle salle et d'arrêter le jeu");

                    if (nouveauChoix === "1") {
                        console.log("Avancé dans la salle.");
                        console.log("Vous arrivez dans une salle avec un coffre.");
                        console.log("Faites un choix entre 1 et 2:");
                        const choix2 = prompt("Choisissez entre ouvrir le coffre et arrêter le jeu");

                            if (choix2 === "1") {
                                console.log("Vous ouvrez le coffre et obtenez un trésor!");
                                console.log("Continuez le jeu...");


                                        //const coffre = new Coffre();

                                        console.log("Faites un choix entre 1 et 2:");
                                        const choix3 = prompt("Choisissez entre avancer dans une nouvelle salle et d'arrêter le jeu");

                                        if (choix3 === "1") {
                                            console.log("Avancé dans la salle.");
                                        } else if (choix3 === "2") {
                                            console.log("Vous avez choisi d'arrêter le jeu");
                                            console.log("Le jeu est terminé.");
                                            Deno.exit();
                                        } else {
                                            console.log("Choix invalide. Veuillez choisir entre 1 et 2.");
                                        }

                            } else if (choix2 === "2") {
                                console.log("Vous avez choisi d'arrêter le jeu");
                                console.log("Le jeu est terminé.");
                                Deno.exit();

                            } else {
                                console.log("Choix invalide. Veuillez choisir entre 1 et 2.");
                            }

                } else if (nouveauChoix === "2") {
                    console.log("Vous avez choisi d'arrêter le jeu");
                    console.log("Le jeu est terminé.");
                    Deno.exit();
                } else {
                    console.log("Choix invalide. Veuillez choisir entre 1 et 2.");
                }
                } else {
                    console.log("Vous avez perdu le combat!");
                    console.log("Vous avez choisi d'arrêter le jeu");
                    Deno.exit();    }
                    
} else if (choix === "2") {
    console.log("Vous avez choisi 2.");
    console.log("Vous avez choisi d'arrêter le jeu");
    Deno.exit();
} else {
    console.log("Choix invalide. Veuillez choisir entre 1 et 2.");
} 