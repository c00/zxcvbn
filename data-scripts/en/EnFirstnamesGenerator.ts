import { DataGenerator } from "../DataGenerator";
import axios from "axios";
import { processSimpleList } from "../_helpers/processors/simpleList";

export class EnFirstnamesGenerator implements DataGenerator {
    public data: any = [];
    private url: string = "https://raw.githubusercontent.com/dominictarr/random-name/master/first-names.txt";

    public async init() {
        console.log("Downloading");
        this.data = await (await axios.get(this.url)).data;
        this.data = processSimpleList(this.data);
    }

    public generateJSON() {
        return this.data;
    }

    public generateTXT() {
        return this.data.join("\n");
    }
}