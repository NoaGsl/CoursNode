import express from 'express';
import routers from './Routes/index.js';

const app = express();

app.use(express.json());

// Use grouped routers
app.use('/', routers.generalRoutes);
app.use('/', routers.bookRoutes);
app.use('/', routers.userRoutes);

app.use((req, res) => {
    res.status(404).send("Route non définie");
});

app.listen(3000, () => {
    console.log(`Serveur démarré sur le port 3000`);
});