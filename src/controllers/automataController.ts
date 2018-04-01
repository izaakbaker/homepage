import { Request, Response } from "express";
import { AutomataBackend } from "../backends/automataBackend";

interface IInitializeRequest {
    boardWidth: number;
    boardHeight: number;
}

interface IInitializeResponse {
    success: boolean;
}

export class AutomataController {
    private automataBackend: AutomataBackend;

    public constructor(automataBackend: AutomataBackend) {
        this.automataBackend = automataBackend;
    }

    public initialize = (request: Request, response: Response) => {
        const initializeRequest: IInitializeRequest = request.body;
        const { boardWidth, boardHeight } = initializeRequest;
        const success = this.automataBackend.initialize(boardWidth, boardHeight);
        const initializeResponse: IInitializeResponse = { success };
        response.send(JSON.stringify(initializeResponse));
    }
}