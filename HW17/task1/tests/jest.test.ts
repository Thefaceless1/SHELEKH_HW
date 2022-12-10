import {expect, jest, test} from '@jest/globals'
import {StringChanges} from "../StringChanges";
import {TDeleteExcludeTestData, TGetSubstrTestData, TGetSymbolTestData, TStringReverseTestData} from "../TestDataTypes";

describe ("Check StringChanges class methods", () => {
    describe("Check getSymbol method", () => {
        const getSymbolTestData: TGetSymbolTestData = [
            {testData: ["strings", 0], expectedResult: "s2"},
            {testData: ["strings sscvfg", 8], expectedResult: "s4"},
            {testData: ["!@# da!@@ da", 1], expectedResult: "@3"},
            {testData: ["", 0], expectedResult: ""},
            {testData: ["xxc1!@334 dada!@214 -_213 da2141x1", 3], expectedResult: "16"},
            {testData: [`${undefined}`, 3], expectedResult: "e2"},
            {testData: [`${NaN}`, 2], expectedResult: "N2"},
            {testData: [`${Infinity}${null}`, 1], expectedResult: "n3"},
            {testData: [" symbols ", 8], expectedResult: " 2"},
            {testData: ["123 24_ 1552", 1], expectedResult: "23"},
            {testData: [" symbols ", 9], expectedResult: "invalid data"},
            {testData: [" symbols sads ", 2.23], expectedResult: "invalid data"},
            {testData: [" some str     ", -1], expectedResult: "invalid data"},
            {testData: [" symbols ", NaN], expectedResult: "invalid data"},
            {testData: [" symbols ", Infinity], expectedResult: "invalid data"},
            {testData: [" symbols ", 0.223], expectedResult: "invalid data"}]

        getSymbolTestData.forEach((value, index) => {
            test(`test data : ${value.testData} ; expected result : ${value.expectedResult}`, () => {
                const resultValue : string = StringChanges.getSymbol(value.testData[0], value.testData[1]);
                expect(resultValue).toBe(value.expectedResult);
            })

            test(`type of ${value.expectedResult} is string`, () => {
                const typeOfValue : string = typeof StringChanges.getSymbol(value.testData[0], value.testData[1]);
                expect(typeOfValue).toBe("string");
               })
        })
    })
    describe("Check getSubstr method", () => {
        const testData : TGetSubstrTestData = [
            {testData: ["str with some subs in str","str"],expectedResult : [0,22]},
            {testData: ["c!22dad cx!c!ds  c_!!c!","c!"],expectedResult : [0,11,21]},
            {testData: ["  dsada 21d4da!  sda","  "],expectedResult : [0,15]},
            {testData: ["__ds1$sd$ 1"," 1"],expectedResult : [9]},
            {testData: ["__ds1 !sd$ 1","1 !"],expectedResult : [4]},
            {testData: ["__ds1 $sd$ 1","1 $"],expectedResult : [4]},
            {testData: ["__ds1^ $[1]sd$ 1","[1]"],expectedResult : [8]},
            {testData: ["_1^_ds1^ $[1^sd$ 1","1^"],expectedResult : [1,6,11]},
            {testData: [" 211 3334122122112321","21"],expectedResult : [ 1, 11, 14, 19 ]},
            {testData: ["ds*12** da* xc******","s*"],expectedResult : [1]},
            {testData: [`${undefined} inds${Infinity}`,"in"],expectedResult : [ 5, 10, 17 ]},
            {testData: ["","str"],expectedResult : []},
            {testData: [" ","str"],expectedResult : []},
            {testData: ["str with some subs in str",""],expectedResult : []},
            {testData: ["str with some sundefinedubs in str",`${undefined}`],expectedResult : [15]},
            {testData: ["str with some subs in str",`${null}`],expectedResult : []},
            {testData: ["str with some subs in str",`${Infinity}`],expectedResult : []},
            {testData: ["cz__dsffallsee 12 !fals dsfalse","false"],expectedResult : [26]},]

        testData.forEach(value => {
            test(`test data : ${value.testData} ; expected result : ${value.expectedResult}`, () => {
                const resultValue : number[] = StringChanges.getSubstr(value.testData[0],value.testData[1]);
                expect(resultValue).toEqual(value.expectedResult);
            })
        })
    })
    describe("Check deleteExclude method", () => {
        const testData : TDeleteExcludeTestData = [
            {testData:["3 str for 3 excercise 3",'3',0],expectedResult:"3 str for  excercise "},
            {testData:["3 str for 3 excercise 3",'3',1],expectedResult:" str for 3 excercise "},
            {testData:["3 str for 3 excercise 3",'3',2],expectedResult:" str for  excercise 3"},
            {testData:[" dssdw23 1223sd  1",'23',1],expectedResult:" dssdw 1223sd  1"},
            {testData:[" cc!!2  da d2!@",' ',1],expectedResult:"cc!!2 dad2!@"},
            {testData:[" cc!!2  da d2!@  ",'  ',0],expectedResult:" cc!!2  da d2!@"},
            {testData:[" cc!!2  da d2!@  sxc 2  d zxc",'2  d',0],expectedResult:" cc!!2  da d2!@  sxc  zxc"},
            {testData:[" c@!@c!!2  da d2!@  sxc 2  d zx!@c xz__2!@",'!@',2],expectedResult:" c@c!!2  da d2  sxc 2  d zx!@c xz__2"},
            {testData:[" c@!@c!!2 23 da d2!@  sxc 2  d zx!@c xz__2!@",'2',4],expectedResult:" c@!@c!! 3 da d!@  sxc   d zx!@c xz__2!@"},
            //{testData:[" c@!@c!!2 23 da d2!ax2)3@  sxc 2  d zx!@c xz__2!@",'2)3',0],expectedResult:" c@!@c!!2 23 da d2!ax2)3@  sxc 2  d zx!@c xz__2!@"},
            {testData:[" c@!@c!!2 23 da d2!ax2+3@  sxc 2  d zx!@c xz2+3__2!@",'2+3',0],expectedResult:" c@!@c!!2 23 da d2!ax2+3@  sxc 2  d zx!@c xz__2!@"},
            {testData:[" c@!@c!!$2 2[]3 da d2!ax2+3@$$  sxc 2  d zx![]@c xz2+$3__2!@",'[]',0],expectedResult:" c@!@c!!$2 2[]3 da d2!ax2+3@$$  sxc 2  d zx!@c xz2+$3__2!@"},
            {testData:[" c@!@c!!$2 2[]3 da d2!//ax2+3@$$  sxc 2  d zx![]@c// xz2+$//3__2!@",'//',2],expectedResult:" c@!@c!!$2 2[]3 da d2!ax2+3@$$  sxc 2  d zx![]@c xz2+$//3__2!@"},
            {testData:[" c@!@c!!$2 2[]3 da d2!//ax2+3@$$",'',0],expectedResult:"invalid data"},
            {testData:["3 str for 3 excercise 3",'3',-1],expectedResult:"invalid data"},
            {testData:["3 str for 3 excercise 3",'3',3],expectedResult:"invalid data"},
            {testData:["3 str for 3 excercise 3",'3',2.44],expectedResult:"invalid data"},
            {testData:["3 str for 3 excercise 3",'3',NaN],expectedResult:"invalid data"},
            {testData:["3 str for 3 excercise 3",'3',Infinity],expectedResult:"invalid data"},
            {testData:["3 str for 3 excernullcise 3null",`${null}`,0],expectedResult:"3 str for 3 excernullcise 3"},];

        testData.forEach((value, index) => {
            const resultValue = StringChanges.deleteExclude(value.testData[0],value.testData[1],value.testData[2]);
            test(`test data : ${value.testData} ; expected result : ${value.expectedResult}`, () =>{
                expect(resultValue).toBe(value.expectedResult);
            })
        })

    })
    describe("Check stringReverse method", () => {
        const testData : TStringReverseTestData = [
            {testData:["string",[3,4,2],[1,0,1]],expectedResult:"stttsg"},
            {testData:["_aa2 2 335sd",[1,2,3,4],[0,3,5,6]],expectedResult:"__22 2 335sd"},
            {testData:["_aa!@@2 2  335s   d!__ ",[1,2,3,4,13,11],[0,3,5,6,0,3]],expectedResult:"__!@2@2 2  @3_s   d!__ "},
            {testData:["_aa!<>@@2 2  335s   d!__ ",[1,2,3,4,5,6],[7,8,9,10,0,11]],expectedResult:"_@2 2_ @2 2  335s   d!__ "},
            {testData:[" 123_aa!<>@454@2 2  335s   d!__ ",[1,2,2,3,4,5,6],[7,8,9,11,10,0,11]],expectedResult:" !>4@ 4!<>@454@2 2  335s   d!__ "},
            {testData:[" $$()^123_aa!<>@44&<>54@2 2  335s   d!__ ",[5,2,11,1,2,2,3,4,5,6],[1,2,5,7,8,9,11,10,0,11]],expectedResult:" 2_$a $23_a$!<>@44&<>54@2 2  335s   d!__ "},
            {testData:[" $$()^123_aa",[3,4],[1,0,1]],expectedResult:"invalid data"},
            {testData:[" $$()^123_aa",[3,4,2],[1,0]],expectedResult:"invalid data"},
            {testData:["",[3,4,2],[1,0,1]],expectedResult:"invalid data"},
            {testData:["123_aa!<>@454@2 2  335",[],[1,0,1]],expectedResult:"123_aa!<>@454@2 2  335"},
            {testData:["123_aa!<>@454@2 2  335",[3,4,2],[]],expectedResult:"123_aa!<>@454@2 2  335"},
            {testData:["123_aa!<>@454@2 2  335",[],[]],expectedResult:"123_aa!<>@454@2 2  335"},
            {testData:["35s   d!__",[3,4,2,10],[1,0,1,2]],expectedResult:"invalid data"},
            {testData:["35s   d!__",[3,4,2],[1,0,10]],expectedResult:"invalid data"},
            {testData:["35s   d!__",[-3,4,2],[1,0,1]],expectedResult:"invalid data"},
            {testData:["35s   d!__",[3,4,2],[1,0,-1]],expectedResult:"invalid data"},
            {testData:["35s   d!__",[3,4.3,2],[1,0,1]],expectedResult:"invalid data"},
            {testData:["35s   d!__",[3,4,2],[1,0,1.1]],expectedResult:"invalid data"},
            {testData:["string",[NaN,NaN],[NaN,NaN]],expectedResult:"invalid data"},
            {testData:["string",[2,4,2],[2,4,2]],expectedResult:"string"},
            {testData:[`${undefined}`,[1,2,3,4],[5,2,6,6]],expectedResult:"uidnnined"},
            {testData:["string",[2,4,Infinity],[2,Infinity,2]],expectedResult:"invalid data"},];

        testData.forEach((value, index) => {
            const resultValue : string = StringChanges.stringReverse(value.testData[0],value.testData[1],value.testData[2]);
            test(`test data : ${value.testData} ; expected result : ${value.expectedResult}`, () => {
                expect(resultValue).toBe(value.expectedResult);
            })
        })
    })


})