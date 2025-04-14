import { devinettes } from "./devinettes.js";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

console.log("Bienvenue dans le jeu des devinettes !");
console.log("Répondez aux questions suivantes :");

let score = 0;
let total = devinettes.length;

for(const devinette of devinettes) {
  await waitForGuess(devinette);
};

async function waitForGuess(devinette) {
  console.log(devinette.question);
  const reponse = await rl.question("Votre réponse : ");
  if (reponse.trim().toLowerCase() === devinette.reponse.toLowerCase()) {
    console.log("Correct !");
    score++;
  } else {
    console.log("Dommage essayez encore !");
    await waitForGuess(devinette);
  }
}

if (score === total) {
  console.log(
    "Félicitations ! Vous avez répondu correctement à toutes les devinettes."
  );
}
console.log(`Votre score : ${score}/${total}`);

rl.close();
