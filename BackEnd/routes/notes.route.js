import express from "express";
import {
  createNote,
  updateNote,
  deleteNote,
  readNote,
  AllNote,
} from "../controller/notes.controller.js";

const notesRouter = express.Router();

notesRouter.post("/notes", createNote);
notesRouter.put("/notes/:id", updateNote);
notesRouter.delete("/notes/:id", deleteNote);
notesRouter.get("/notes/:id", readNote);
notesRouter.get("/notes", AllNote);

export default notesRouter;
