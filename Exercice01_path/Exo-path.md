**Exercice : Gestion de fichiers et répertoires**

1. Créez un fichier "rapport.txt" que vous laisserez vide et que vous stockerez dans un dossier que vous appelerez "documents".

2. Créez un script Node.js qui effectue les tâches suivantes :

   - Utilisez la méthode `path.join` pour créer le chemin complet vers un fichier nommé "rapport.txt" dans un répertoire "documents" qui se trouve dans le répertoire utilisateur.

   - Utilisez la méthode `path.resolve` pour obtenir le chemin absolu du fichier "rapport.txt" créé précédemment.

    - Utilisez la méthode `path.extname` pour vérifier si le fichier a une extension ".txt".

   - Utilisez la méthode `path.dirname` pour obtenir le répertoire du fichier "rapport.txt".

   - Utilisez la méthode `path.basename` pour extraire le nom du fichier (sans l'extension) à partir du chemin absolu.

   - Utilisez la méthode `path.parse` pour obtenir un objet avec les détails du chemin du fichier "rapport.txt" (répertoire, base, nom, extension, etc.).

   - Utilisez la méthode `path.normalize` pour créer un chemin normalisé à partir de segments relatifs. (vous pouvez rajouter des doubles slashs pour tester la méthode)

3. Affichez les résultats de chaque étape dans la console.

4. Exécutez le script et vérifiez si les résultats sont conformes aux attentes.

