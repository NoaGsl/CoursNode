### Titre de l'exercice : Jeu de devinettes

### Objectif :

Le but de cet exercice est de créer un petit jeu de devinettes en utilisant Node.js.

### Description :

1. Le jeu doit poser une série de devinettes à l'utilisateur.
2. Pour chaque devinette, l'utilisateur doit entrer sa réponse via la ligne de commande.
3. Si la réponse est correcte, le jeu affiche un message de félicitations et passe à la devinette suivante.
4. Si la réponse est incorrecte, le jeu affiche un message d'encouragement et redemande à l'utilisateur de deviner.
5. À la fin du jeu, le score total de l'utilisateur est affiché.

### Exemple d'exécution :

```
Bienvenue au jeu de devinettes !
Répondez aux questions suivantes :
Quel est la capitale de la France ? Paris
Bonne réponse !
Quel est le plus grand océan de la planète ? Pacifique
Bonne réponse !
Combien de continents y a-t-il sur Terre ? 6
Bonne réponse !
Félicitations ! Vous avez répondu correctement à toutes les devinettes.
Votre score : 3/3

```

### Instructions supplémentaires :

- Utilisez le module `readline` pour interagir avec l'utilisateur.
- Stockez les devinettes et leurs réponses dans un tableau ou un objet.
- Gérez les devinettes de manière asynchrone pour que le jeu ne bloque pas le flux d'exécution.
- Assurez-vous que le jeu gère correctement les réponses de l'utilisateur, qu'elles soient en majuscules ou en minuscules, et qu'il ignore les espaces superflus.