import fs from "fs";

export class TestFilesReader {
    private static readonly fileDirectory : string = "HW22/framework/helpers/testfiles/";
    public static get getPathFiles () : string[] {
        return this.getFiles.map(value => this.fileDirectory+value);
    }
    public static get getFiles () : string[] {
        return fs.readdirSync(this.fileDirectory,"utf-8");
    }
}