import Notes from "../Model/notes.model.js";

export const createNote = async (req, res) => {
  const { author, title, dateCreated, userId } = req.body;
  try {
    const newNote = await Notes.create({
      author,
      title,
      dateCreated,
      userId,
    });
    res.status(200).json(newNote);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  const { title, dateUpdated, content } = req.body;
  const { id } = req.params;
  try {
    const validId = await Notes.findOne({ _id: id });
    if (!validId) return next(errorHandler(404, "Note not Found"));

    await Notes.findByIdAndUpdate(
      id,
      {
        $set: {
          title,
          dateUpdated,
          content,
        },
      },
      { new: true }
    );
    return res.status(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const readNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Notes.findById(id);
    res.status(200).json(note);
  } catch (err) {
    console.error("Error getting file", err);
    res.status(500).json({ message: error.message });
  }
};
export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await Notes.findOneAndDelete({ _id: id });
    res.status(200).json(`${id} deleted`);
  } catch (err) {
    console.error("Error Deleting Note", err);
    res.status(500).json({ message: error.message });
  }
};
export const deleteAllNotes = async (req, res) => {
  const { userId } = req.query;
  try {
    await Notes.deleteMany({ userId });

    res.status(200).json(`All notes by user ${userId} deleted.`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const AllNote = async (req, res) => {
  const { userId } = req.query;
  try {
    const note = await Notes.find({ userId });
    res.status(200).json(note);
  } catch (err) {
    console.error("Error fetching notes:", err);
    res.status(500).json({ message: error.message });
  }
};
