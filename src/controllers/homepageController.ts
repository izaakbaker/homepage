import { Request, Response } from "express";

export class HomepageController {
    public index = (request: Request, response: Response) => {
        response.render('index', {});
    }
}
