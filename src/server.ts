import express from "express";
import path from "path";
import bodyParser from "body-parser";

import { Request, Response } from "express";
import { Backends } from "./backends/backends";
import { Controllers } from "./controllers/controllers";

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

Backends.initialize();
Controllers.initialize();

app.get("/", Controllers.homepage.index);
app.post("/automata/initialize", Controllers.automata.initialize);

app.listen(3000, () => console.log('Up and running!'));
