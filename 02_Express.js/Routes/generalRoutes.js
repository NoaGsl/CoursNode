import express from 'express';
const router = express.Router();

router.get('/bienvenue', (req, res) => {
    const html = "<h1>Bienvenue sur Express</h1>";
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
});

router.get('/info', (req, res) => {
    res.json({ nom: "Pierre Dupont", age: 30, profession: "Inconnu" });
});

router.get('/acces-interdit', (req, res) => {
    res.status(403).send("Accès refusé");
});

router.get('/redirection-accueil', (req, res) => {
    res.redirect('/');
});

router.get('/', (req, res) => {
    const html = `
        <html>
            <head><title>Accueil Express2000</title></head>
            <body>
                <h1>Page d'accueil</h1>
                <ul>
                    <li><a href="/bienvenue">/bienvenue</a></li>
                    <li><a href="/info">/info</a></li>
                    <li><a href="/acces-interdit">/acces-interdit</a></li>
                    <li><a href="/redirection-accueil">/redirection-accueil</a></li>
                    <li><a href="/livres">/livres</a></li>
                    <li><a href="/livres/1">/livres/1</a></li>
                    <li><a href="/ajout-livre">/ajout-livre</a></li>
                    <li><a href="/recherche-livre/auteur/AuthorName">/recherche-livre/auteur/:auteur</a></li>
                </ul>
            </body>
        </html>`;
    res.send(html);
});

export default router;