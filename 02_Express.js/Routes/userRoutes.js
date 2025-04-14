import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/utilisateurs', (req, res) => {
    const dataPath = path.resolve('data', 'users.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if(err) return res.status(500).json({ error: "Erreur de lecture des utilisateurs." });
        res.json(JSON.parse(data));
    });
});

router.get('/utilisateurs/:id', (req, res) => {
    const dataPath = path.resolve('data', 'users.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if(err) return res.status(500).json({ error: "Erreur de lecture des utilisateurs." });
        const users = JSON.parse(data);
        const user = users.find(u => String(u.id) === req.params.id);
        if(user) {
            res.json(user);
        } else {
            res.status(404).json({ error: "Utilisateur non trouvé." });
        }
    });
});

router.post('/ajout-utilisateur', (req, res) => {
    const dataPath = path.resolve('data', 'users.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if(err) return res.status(500).json({ error: "Erreur de lecture des utilisateurs." });
        let users;
        try {
            users = JSON.parse(data);
        } catch(e) {
            return res.status(500).json({ error: "Erreur de parsing des utilisateurs." });
        }
        const lastId = users.length === 0 ? 1 : users[users.length - 1].id + 1;
        const newUser = { id: lastId, ...req.body };
        users.push(newUser);
        fs.writeFile(dataPath, JSON.stringify(users), (err) => {
            if(err) return res.status(500).json({ error: "Erreur d'écriture des utilisateurs." });
            res.json({ message: "Nouvel utilisateur ajouté." });
        });
    });
});

router.get('/recherche-utilisateur/nom/:nom', (req, res) => {
    const dataPath = path.resolve('data', 'users.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if(err) return res.status(500).json({ error: "Erreur de lecture des utilisateurs." });
        const users = JSON.parse(data);
        const result = users.filter(u => u.nom && u.nom.toLowerCase().includes(req.params.nom.toLowerCase()));
        res.json(result);
    });
});

export default router;
