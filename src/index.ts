import Express from "express";

const app = Express();

app.use(Express.json());

app.use("/health", (req, res) => {
  res.status(200).send({
    message: "Server is running"
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
