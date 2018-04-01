import { Backends } from "../backends/backends";
import { AutomataController } from "./automataController";
import { HomepageController } from "./homepageController";

export class Controllers {
    public static automata: AutomataController;
    public static homepage: HomepageController;

    public static initialize() {
        this.automata = new AutomataController(Backends.automata);
        this.homepage = new HomepageController();
    }
}