import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const movieSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  director: { type: String, required: true },
  releaseDate: { type: Date, required: true }
}, { timestamps: true });

export default model('Movie', movieSchema);