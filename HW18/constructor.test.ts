import {jest, test, expect, describe, beforeAll} from "@jest/globals";
import superagent from "superagent";
import {RequestProp} from "./class/RequestProp";
import {TestData, TCurrentSeason} from "./class/TestData";
import {randomInt} from "crypto";

//api текущего проекта
jest.setTimeout(20000);
describe("Создание тестовых данных", () => {

    test("Загрузка файла на сервер", async () => {

        for (const i of TestData.fileNames) {
            const response = await superagent.post(RequestProp.basicUrl + "/api/rest/uploadFile").
            set("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundaryoI4AK63JZr8jUhAa").
            attach("file", RequestProp.fileDir + i);

            expect(response.ok).toBeTruthy();
            expect(response.status).toBe(200);
            expect(response.body.status).toBe("SUCCESS");
            expect(response.body.data).toBeDefined();
            TestData.fileInfo.push([i, response.body.data]);
        }

    })
    test("Справочник сезонов", async () => {
        const response = await superagent.get(RequestProp.basicUrl + "/api/rest/seasons");
        expect(response.ok).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.data.length).toBeGreaterThan(0);
        TestData.seasons = response.body.data.filter((value: TCurrentSeason, index: number, arr: TCurrentSeason[]) => (value.current || index == arr.length - 1));
    })

    test("Справочник Группы критериев", async () => {
        const response = await superagent.get(RequestProp.basicUrl + "/api/rest/prolicenses/criterias/groups");
        expect(response.ok).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.data.length).toBeGreaterThan(0);
        TestData.criteriaGroups = response.body.data;
    })
    test("Справочник Типы лицензий", async () => {
        const response = await superagent.get(RequestProp.basicUrl + "/api/rest/lictypes");
        expect(response.ok).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.data.length).toBeGreaterThan(0)
        TestData.licTypes = response.body.data;

    })
    test("Справочник Типы документов", async () => {
        const response = await superagent.get(RequestProp.basicUrl + "/api/rest/doctypes");
        expect(response.ok).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.data.length).toBeGreaterThan(0);
        TestData.docTypes = response.body.data;
    })
    test("Разряды для критериев", async () => {
        const response = await superagent.get(RequestProp.basicUrl+"/api/rest/prolicenses/criterias/categories");
        expect(response.ok).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.data.length).toBeGreaterThan(0);
        TestData.rankCriteria = response.body.data;
    })
    test("Типы критериев",async () => {
        const response = await superagent.get(RequestProp.basicUrl+"/api/rest/prolicenses/criterias/types");
        expect(response.ok).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.data.length).toBeGreaterThan(0);
        TestData.criteriaTypes = response.body.data;
    })
})

describe("Конструктор пролицензий", () => {

    test("Создание проекта лицензии", async () => {
        const response = await superagent.put(RequestProp.basicUrl + "/api/rest/prolicenses").
        send({
                "name": TestData.getRandomWord(),
                "season": TestData.seasons[0].name,
                "type": TestData.licTypes[0].name,
                "requestBegin": TestData.dateNow,
                "requestEnd": TestData.dateFuture,
                "dueDate": TestData.dateFuture,
                "docSubmitDate": TestData.dateFuture,
                "reviewDate": TestData.dateFuture,
                "decisionDate": TestData.dateFuture,
                "begin": TestData.dateNow,
                "end": TestData.dateFuture,
                "documents": [
                    {
                        "name": TestData.getRandomWord(),
                        "docTypeId": TestData.docTypes[0].id,
                        "templates": [
                            {
                                "name": TestData.fileInfo[0][0],
                                "storageId": TestData.fileInfo[0][1]
                            },
                            {
                                "name": TestData.fileInfo[1][0],
                                "storageId": TestData.fileInfo[1][1]
                            },
                            {
                                "name": TestData.fileInfo[2][0],
                                "storageId": TestData.fileInfo[2][1]
                            }
                        ]
                    }
                ]
            }
        )
        expect(response.ok).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBeDefined();
        expect(response.body.data.type).toBe(TestData.licTypes[0].name);
        expect(response.body.data.season).toBe(TestData.seasons[0].name);
        expect(response.body.data.stateId).toBe(1);
        expect(response.body.data.begin && response.body.data.requestBegin).toBe(TestData.dateNow);
        expect(response.body.data.end && response.body.data.requestEnd &&
            response.body.data.docSubmitDate && response.body.data.dueDate &&
            response.body.data.reviewDate && response.body.data.decisionDate).toBe(TestData.dateFuture);

        TestData.prolicense.push(response.body.data);
    })

    test("Изменение проекта лицензии", async () => {
        const response = await superagent.put(RequestProp.basicUrl + "/api/rest/prolicenses/" + TestData.prolicense[0].id).
        send({
            "id": TestData.prolicense[0].id,
            "type": TestData.licTypes[1].name,
            "season": TestData.seasons[1].name,
            "name": TestData.getRandomWord(),
            "begin": TestData.dateNow,
            "end": TestData.dateFuture,
            "requestBegin": TestData.dateNow,
            "requestEnd": TestData.dateFuture,
            "docSubmitDate": TestData.dateFuture,
            "dueDate": TestData.dateFuture,
            "reviewDate": TestData.dateFuture,
            "decisionDate": TestData.dateFuture,
            "stateId": TestData.prolicense[0].stateId,
            "documents": [
                TestData.prolicense[0].documents[0],
                {
                    "name": TestData.getRandomWord(),
                    "docTypeId": TestData.docTypes[0].id,
                    "templates": [
                        {
                            "name": TestData.fileInfo[2][0],
                            "storageId": TestData.fileInfo[2][1]
                        },
                        {
                            "name": TestData.fileInfo[1][0],
                            "storageId": TestData.fileInfo[1][1]
                        },
                        {
                            "name": TestData.fileInfo[0][0],
                            "storageId": TestData.fileInfo[0][1]
                        }
                    ]
                }
            ]
        })
        expect(response.ok).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("SUCCESS");
        expect(response.body.data).toEqual({});
    })
    test("Получение проекта лицензии по ID", async () => {
        const response = await superagent.get(RequestProp.basicUrl + "/api/rest/prolicenses/" + TestData.prolicense[0].id);
        expect(response.ok).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("SUCCESS");
        expect(response.body.data.id).toBe(TestData.prolicense[0].id);
        expect(response.body.data.type).not.toBe(TestData.prolicense[0].type);
        expect(response.body.data.season).not.toBe(TestData.prolicense[0].season);
        expect(response.body.data.name).not.toBe(TestData.prolicense[0].name);
        expect(response.body.data.documents.length).toBe(2);
        TestData.prolicense[0] = response.body.data;
    })
    test("Создание группы критериев пролицензии",async () => {
        for ( const i of TestData.criteriaGroups) {
            const response = await superagent.put(RequestProp.basicUrl+"/api/rest/prolicenses/"+TestData.prolicense[0].id+"/criterias/groupExperts").
            query(
                {
                    groupId : i.id,
                    experts :[0,1]
                }
            );
        expect(response.ok).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("SUCCESS");
        expect(response.body.data).toEqual({});
        }
    })
    test("Создание критерия пролицензии",async () => {
        for (const i of TestData.criteriaGroups) {
            const response = await superagent.put(RequestProp.basicUrl+"/api/rest/prolicenses/"+TestData.prolicense[0].id+"/criterias").
                send({
                "groupId":i.id,
                "number":String(randomInt(1,1000)),
                "categoryId":TestData.rankCriteria[randomInt(0,TestData.rankCriteria.length-1)].id,
                "name":TestData.getRandomWord(),
                "description":TestData.getRandomWord(),
                "isMulti":randomInt(-1,5),
                "typeId":TestData.criteriaTypes[randomInt(0,TestData.criteriaTypes.length-1)].id,
                "docSubmitDate":TestData.dateFuture,
                "reviewDate":TestData.dateFuture,
                "documents":[
                    {
                        "name":TestData.getRandomWord(),
                        "docTypeId":TestData.docTypes[randomInt(0,TestData.docTypes.length-1)].id,
                        "templates":[
                            {
                                "name": TestData.fileInfo[0][0],
                                "storageId": TestData.fileInfo[0][1]
                            },
                            {
                                "name": TestData.fileInfo[1][0],
                                "storageId": TestData.fileInfo[1][1]
                            },
                            {
                                "name": TestData.fileInfo[2][0],
                                "storageId": TestData.fileInfo[2][1]
                            }
                            ]
                    },
                    {
                        "name":TestData.getRandomWord()
                        ,"docTypeId":TestData.docTypes[randomInt(0,TestData.docTypes.length-1)].id,
                        "templates":[
                            {
                                "name": TestData.fileInfo[2][0],
                                "storageId": TestData.fileInfo[2][1]
                            },
                            {
                                "name": TestData.fileInfo[1][0],
                                "storageId": TestData.fileInfo[1][1]
                            },
                            {
                                "name": TestData.fileInfo[0][0],
                                "storageId": TestData.fileInfo[0][1]
                            }
                        ]
                    }
                ]
                }
                )
        expect(response.ok).toBeTruthy();
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("SUCCESS");
        expect(response.body.data.groupId).toBe(i.id);
        expect(response.body.data.docSubmitDate && response.body.data.reviewDate).toBe(TestData.dateFuture);
        TestData.criterias.push(response.body.data);
        }
    })

})