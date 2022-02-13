import { uploadService } from "../services";
import { Request, Response } from "express";

const getUploads = (req: Request, res: Response) => {
  const uploadData = uploadService.getUserUploads();
  res.send({
    status: 200,
    data: uploadData
  });
};

export const UploadController = {
  getUploads
};
