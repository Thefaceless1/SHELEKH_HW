import {expect, jest, test} from '@jest/globals';
import superagent from "superagent";
import {RequestData} from "./RequestData";
import {UserInfo} from "./UserInfo";
import {PetInfo,PetStatus} from "./PetInfo";



//api для тестирования https://petstore.swagger.io/

describe("https://petstore.swagger.io/ api tests", () => {
    const userInfo  = new UserInfo(0,"","","","","","",0);
    const petInfo = new PetInfo(0,{id : 0,name : ''},'',[''],[{id : 0,name : ''}],'');

    test("Create user", async () => {
        const res = await superagent.post(RequestData.basicUrl+"/user").
        set("Content-Type",RequestData.contentType).
            send({
            "username": "testName",
            "firstName": "testFirstName",
            "lastName": "testLastName",
            "email": "test@mail.ru",
            "password": "qwe",
            "phone": "5555"
        })
        expect(res.status).toBe(200);
        expect(res.ok).toBeTruthy();
        expect(res.body.message).toBeDefined();
        expect(Number(res.body.message)).not.toBeNaN();

        userInfo.id = res.body.message;
        //т.к тело ответа скудное и не возвращает всю инфу о созданном пользователе пришлось сделать так:
        userInfo.userName = "testName";
        userInfo.firstName = "testFirstName";
        userInfo.lastName = "testLastName";
        userInfo.email = "test@mail.ru";
        userInfo.password = "qwe";
        userInfo.phone = "5555";
        userInfo.userStatus =0

    })

    test("Login", async () => {
        const res = await superagent.get(RequestData.basicUrl+"/user/login").
        query({username : userInfo.userName, password : userInfo.password});
        expect(res.status).toBe(200);
        expect(res.ok).toBeTruthy();
        expect(res.body.message).toContain("logged in user session");
    })

    test("Update user" ,async () => {
        const res = await superagent.put(RequestData.basicUrl+"/user/"+userInfo.userName).
        set("Content-Type", RequestData.contentType).
        send({
            "username": "updatedName",
            "firstName": "updatedFirstName",
            "lastName": "updatedLastName",
            "email": "new@mail.ru",
            "password": "asd",
            "phone": "1111"
        })
        expect(res.status).toBe(200);
        expect(res.ok).toBeTruthy();
        expect(res.body.message).toBe(userInfo.id);//тут ошибка работы api а не теста

        //аналогично
        userInfo.userName = "updatedName";
        userInfo.firstName = "updatedFirstName";
        userInfo.lastName = "updatedLastName";
        userInfo.email = "new@mail.ru";
        userInfo.password = "asd";
        userInfo.phone = "1111";
    })
    test("Get user by user name",async  () => {
        const res = await superagent.get(RequestData.basicUrl+"/user/"+userInfo.userName);
        expect(res.status).toBe(200);
        expect(res.ok).toBeTruthy();
        expect(res.body.id).toBe(userInfo.id);//из за ошибки выше и здесь падает и будет ошибка в последующих
        expect(res.body.username).toBe(userInfo.userName);
        expect(res.body.firstName).toBe(userInfo.firstName);
        expect(res.body.lastName).toBe(userInfo.lastName);
        expect(res.body.email).toBe(userInfo.email);
        expect(res.body.password).toBe(userInfo.password);
        expect(res.body.phone).toBe(userInfo.phone);

    })
    test("Add a new pet to the store", async () => {
        const res =  await superagent.post(RequestData.basicUrl+"/pet").
        set("Content-Type",RequestData.contentType).
        send({
            "category": {
                "id": 0,
                "name": "testCategory"
            },
            "name": "testPetName",
            "photoUrls": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_nn4yYJ2Y8WHe8ubU7OjM-oPWuFhOmCwPFw&usqp=CAU"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "cat"
                }
            ],
            "status": PetStatus.available
        })

        expect(res.status).toBe(200);
        expect(res.ok).toBeTruthy();
        expect(res.body.id).toBeDefined();
        expect(res.body.id).not.toBeFalsy();
        expect(res.body.name).toBe("testPetName");
        expect(res.body.category.name).toBe("testCategory");
        expect(res.body.tags.find((value: { id: number,name: string; }) =>value.name == "cat")).toBeTruthy();

        petInfo.id = res.body.id;
        petInfo.name = res.body.name;
        petInfo.photoUrls =res.body.photoUrls;
        petInfo.category =res.body.category;
        petInfo.tags =res.body.tags;
        petInfo.status = res.body.status;

    })
    test("Update an existing pet", async () => {
        const res = await superagent.put(RequestData.basicUrl+"/pet").
        set("Content-Type",RequestData.contentType).
        send({
            "id": petInfo.id,
            "category": {
                "id": 1,
                "name": "newPetCategory"
            },
            "name": "newPetName",
            "photoUrls": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_nn4yYJ2Y8WHe8ubU7OjM-oPWuFhOmCwPFw&usqp=CAU",
                "https://wl-adme.cf.tsp.li/resize/728x/jpg/6ac/f4f/282553593a862f2171013fad6f.jpg"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "cat"
                },
                {
                    "id": 1,
                    "name": "dog"
                }
            ],
            "status": PetStatus.available
        })
        expect(res.status).toBe(200);
        expect(res.ok).toBeTruthy();
        expect(res.body.name).toBe("newPetName");
        expect(res.body.category.name).toBe("newPetCategory");
        expect(res.body.id).toBe(petInfo.id);
        expect(res.body.tags.length).toBe(2);
        expect(res.body.tags.find((value: { id: number,name: string; }) =>value.name == "dog")).toBeTruthy();

        petInfo.category = res.body.category;
        petInfo.name = res.body.name;
        petInfo.photoUrls = res.body.photoUrls;
        petInfo.tags = res.body.tags;
    })
    test("Finds pets by status", async () => {
        const res = await superagent.get(RequestData.basicUrl+"/pet/findByStatus").
            query({status : PetStatus.sold});
        expect(res.status).toBe(200);
        expect(res.ok).toBeTruthy();
        expect(res.body.every((value: {id: number,name: string, photoUrls : string[],tags :object[],status : string})=>value.status == PetStatus.sold)).toBeTruthy();
    })
    test("Find pet by ID", async () => {
        const res = await superagent.get(RequestData.basicUrl+"/pet/"+petInfo.id);
        expect(res.status).toBe(200);
        expect(res.ok).toBeTruthy();
        expect(res.body.id).toBe(petInfo.id);
        expect(res.body.name).toBe(petInfo.name);
        expect(res.body.category.name).toBe(petInfo.category.name);
    })

    test("Delete a pet", async () => {
        const res = await superagent.delete(RequestData.basicUrl+"/pet/"+petInfo.id);
        expect(res.status).toBe(200);
        expect(res.ok).toBeTruthy();
        expect(Number(res.body.message)).toBe(petInfo.id);
    })
    test("Delete user" , async () => {
        const res = await superagent.delete(RequestData.basicUrl+"/user/"+userInfo.userName);
        expect(res.status).toBe(200);
        expect(res.ok).toBeTruthy();
        expect(res.body.message).toBe(userInfo.userName);
    })
})
