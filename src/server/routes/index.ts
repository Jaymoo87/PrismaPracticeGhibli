import { Router } from "express";
import filmRouter from "./api/films";

const indexRouter = Router();

indexRouter.use("/films", filmRouter);

export default indexRouter;
