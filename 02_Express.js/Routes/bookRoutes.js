import express from 'express';
import fs from 'fs';
import path from 'path';
const router = express.Router();

router.get('/livres', (req, res) => {
    const dataPath = path.resolve('data', 'livres.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if(err) return res.status(500).json({ error: "Erreur de lecture des livres." });
        res.json(JSON.parse(data));
    });
});

router.get('/livres/:id', (req, res) => {
    const dataPath = path.resolve('data', 'livres.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if(err) return res.status(500).json({ error: "Erreur de lecture des livres." });
        const livres = JSON.parse(data);
        const livre = livres.find(b => String(b.id) === req.params.id);
        if(livre) {
            res.json(livre);
        } else {
            res.status(404).json({ error: "Livre non trouvé." });
        }
    });
});

router.post('/ajout-livre', (req, res) => {
    const dataPath = path.resolve('data', 'livres.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if(err) return res.status(500).json({ error: "Erreur de lecture des livres." });
        let livres;
        try {
            livres = JSON.parse(data);
        } catch(e) {
            return res.status(500).json({ error: "Erreur de parsing du fichier des livres." });
        }
        const lastId = livres.length === 0 ? 1 : livres[livres.length - 1].id + 1;
        const body = {
            id: lastId,
            title: req.body.title,
            author: req.body.author,
        };
        console.log(body);
        livres.push(body);
        fs.writeFile(dataPath, JSON.stringify(livres), (err) => {
            if(err) return res.status(500).json({ error: "Erreur d'écriture des livres." });
            res.json({ message: "Nouveau livre ajouté." });
        });
    });
});

router.get('/recherche-livre/auteur/:auteur', (req, res) => {
    const dataPath = path.resolve('data', 'livres.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if(err) return res.status(500).json({ error: "Erreur de lecture des livres." });
        const livres = JSON.parse(data);
        const result = livres.filter(b => b.author.toLowerCase() === req.params.auteur.toLowerCase());
        res.json(result);
    });
});

export default router;
