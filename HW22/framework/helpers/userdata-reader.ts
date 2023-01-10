import * as fs from "fs";

export class UserdataReader {
    private static readonly pathFile : string = "HW22/framework/helpers/userdata.json";
    public static get getUserLogin () : string {
        const login : string = JSON.parse(fs.readFileSync(this.pathFile,"utf-8")).login;
        return login;
    }
    public static get getUserPassword () : string {
        const password : string = JSON.parse(fs.readFileSync(this.pathFile,"utf-8")).password;
        return password;
    }
}
