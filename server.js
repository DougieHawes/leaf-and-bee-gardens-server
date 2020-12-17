// initiate express server
import express from "express";

const app = express();

app.listen(8000, console.log("express app running on port:8000"));

app.get("/", (req, res) => {
  res.send({ msg: "leaf and bee gardens" });
});
