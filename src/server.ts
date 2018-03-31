import express from "express";
import path from "path";

import { Request, Response } from "express";

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.get("/", (request: Request, response: Response) => {
    response.render('index', {});
});

app.listen(3000, () => console.log('Up and running!'));
