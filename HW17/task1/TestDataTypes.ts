export type TGetSymbolTestData = {
    testData : [string,number],
    expectedResult : string
}[]

export type TGetSubstrTestData = {
    testData : [string,string],
    expectedResult : number[]
}[]

export type TDeleteExcludeTestData = {
    testData : [string,string,number],
    expectedResult : string
}[]

export type TStringReverseTestData = {
    testData : [string,number[],number[]],
    expectedResult : string
}[]