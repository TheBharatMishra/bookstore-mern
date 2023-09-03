import express from "express";
import { PORT } from "./config";

const app = express();

app.get("/", (req, res) => res.send("Hello"));
app.listen(PORT, () => console.log(`App is listening on the port: ${PORT}`));
