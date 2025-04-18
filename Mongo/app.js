import express from "express";
import mongoose from "mongoose";
import Movie from "./movie.js";

const app = express();
app.use(express.json());

const MONGODB_URI = "mongodb://localhost:27017/cinema?authSource=admin";

mongoose
  .connect(MONGODB_URI, {
    user: "admin",
    pass: "admin123",
  })
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.log("Erreur de connexion MongoDB:", err));

app.post("/movies", async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/movies/search", async (req, res) => {
  try {
    const { title } = req.query;
    const movie = await Movie.findOne({ title });
    if (!movie) return res.status(404).json({ error: "Film non trouvé" });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!movie) return res.status(404).json({ error: "Film non trouvé" });
    res.json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ error: "Film non trouvé" });
    res.json({ message: "Film supprimé" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log(`Serveur démarré sur le port 3000`));
