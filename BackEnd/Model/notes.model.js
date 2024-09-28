import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: String,
    required: true,
  },
  dateUpdated: {
    type: String,
  },
  content: {
    type: String,
  },
  lastImage: {},
});

const Notes = mongoose.model("Notes_Data", notesSchema);

export default Notes;
