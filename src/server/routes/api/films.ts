import { Router } from "express";

import db from "../../db/films";

const filmRouter = Router();

filmRouter.get("/", async (req, res) => {
  try {
    const films = await db.getAll();
    res.json(films);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

export default filmRouter;
