import * as fs from "fs";
import {RequestProp} from "./RequestProp";
import {randomInt} from "crypto";

export class TestData {
    public static fileInfo: [string, string][] = [];
    public static readonly fileNames = fs.readdirSync(RequestProp.fileDir);
    public static readonly dateNow: string = new Date().toLocaleDateString().split(".").reverse().join("-");
    public static readonly dateFuture: string = new Date(Date.now() + 5000000000).toLocaleDateString().split(".").reverse().join("-");
    public static seasons: TCurrentSeason[] = [];
    public static criteriaGroups: TCriteriaGroups[] = [];
    public static licTypes: TLicTypes[] = [];
    public static docTypes: TDocTypes[] = [];
    public static rankCriteria : TRankCriteria[] =[];
    public static criteriaTypes : TCriteriaTypes[] =[];
    public static criterias : TCriteria[] =[];
    public static prolicense : TProlicense[] = [];

    public static getRandomWord(): string {
        const alphabet: string = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
        let randomWord: string = "автотест|";
        while (randomWord.length < 20) {
            randomWord += alphabet[randomInt(0, alphabet.length)];

        }
        return randomWord;
    }

}
export type TCurrentSeason = {
    id: number,
    current: boolean,
    dateStart: string,
    dateEnd: string,
    name: string
}
export type TCriteriaGroups = {
    id:number,
    name : string
}
export type TLicTypes = {
    id : number,
    name : string,
    sysName : string,
    description : string
}
export type TDocTypes = {
    id: number,
    name : string,
    description : string
}
export type TRankCriteria = {
    id : number,
    code : string,
    description : string
}
export type TCriteriaTypes = {
    id : number,
    name : string,
    description : string
}
export type TProlicense = {
    id : number
    type: string
    season: string
    name: string
    begin: string
    end: string
    requestBegin: string
    requestEnd: string
    docSubmitDate: string
    dueDate: string
    reviewDate: string
    decisionDate: string
    stateId : number
    documents :  TDocuments[]
}

export type TDocuments = {
    id: number
    name: string,
    docTypeId: number,
    templates: {
        id: number,
        name: string,
        storageId: string
    }[]
}

export type TCriteria = {
    id: number,
    groupId: number,
    number: string,
    categoryId: number,
    name: string,
    description?: string,
    docSubmitDate: string,
    reviewDate: string,
    isMulti: number,
    typeId: number,
    documents: TDocuments[]
}
