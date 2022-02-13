import Express from "express";
import { Router as UploadRouter } from "./routes";

const app = Express();

app.use(Express.json());

app.use("/health", (req, res) => {
  res.status(200).send({
    message: "Server is running"
  });
});

app.use("/api", UploadRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
