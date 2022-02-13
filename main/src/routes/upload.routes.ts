import express, { Request, Response } from "express";
import { UploadController } from "./../controllers";

const Router = express.Router();

Router.get("/uploads", (req: Request, res: Response) => {
  UploadController.getUploads(req, res);
});

export { Router };
