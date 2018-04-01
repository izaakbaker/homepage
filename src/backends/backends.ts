import { AutomataBackend } from "./automataBackend";

export class Backends {
    public static automata: AutomataBackend;

    public static initialize() {
        this.automata = new AutomataBackend();
    }
}