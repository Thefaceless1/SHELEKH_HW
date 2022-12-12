/*#### Task 1 💻

- Реализовать класс для работы со строками. Методы:
- количество символов по переданному индексу. Например: строка "strings", index = 0, возвращает "s2" или {symbol: 's', count: 2}
- все индексы подстроки. Например строка "str with some subs in str", substring = "str", возвращает [0, 22]
- deleteExclude: метод принимает подстроку для удаления и индекс, который указывает, какую из подстрок не заменять.
    Например строка "3 str for 3 excercise 3", substring = '3', index = 1, возвращает "str for 3 excercise";
index = 0, возвращает "3 str for  excercise"; index = 2, возвращает "str for  excercise 3".
- метод принимает 2 массива с индексами и меняет символы по индексу из 1 массива на символы по индексу 2.
Например строка "string", arr1 = [3,4,2], arr2 = [1,0,1], возвращает "stttsg" (i=>t,n=>s,r=>t)
- Написать по 10 положительных и отрицательных тестов для каждого варианта:
    - Mocha + chai
    - Jest*/




export class StringChanges {

    public static getSymbol(str: string, symbolIndex: number): string {
        if (str.length == 0) return str;
        else if (!Number.isInteger(symbolIndex) || symbolIndex>str.length-1 || symbolIndex<0) return "invalid data";
        else {
            const result: string[] = str.split("").filter(value => value == str[symbolIndex]);
            return result[0] + String(result.length);
        }
    }

    public static getSubstr(str: string, subStr: string) : number[] {
        const result: number[] = [];
        if (str.length == 0 || subStr.length == 0 || !str.includes(subStr)) return result;
        else {
            function getIndex (remStr: string) : void {
                result.push(str.lastIndexOf(subStr));
                str = str.slice(0,str.lastIndexOf(subStr));
                if (str.includes(subStr)) getIndex(str);
            }
            getIndex(str);
            return result.reverse();
        }
    }

    public static deleteExclude (str : string, subStr : string, delIndex : number) :string {
        const resultFromGetSubstr : number[] = StringChanges.getSubstr(str,subStr);
        const result : string[] = str.split("");
        if (delIndex <= resultFromGetSubstr.length-1 && delIndex>=0 && Number.isInteger(delIndex))  {
            let accumDelLength : number =0;
            resultFromGetSubstr.forEach((value, index) => {
                if (index != delIndex) {
                    result.splice(value-accumDelLength,subStr.length);
                    accumDelLength +=subStr.length;
                }
            })
            return result.join("");
        }
        else return "invalid data";
    }

    public static stringReverse (str: string, arr1 : number[], arr2 : number[]) : string  {
        let result : string[] = str.split("");
        if (arr1.length == 0 || arr2.length == 0) return str;
        else if (arr1.some(value => value<0 || !Number.isInteger(value) || value>str.length-1) ||
                 arr2.some(value => value<0 || !Number.isInteger(value) || value>str.length-1) ||
                 arr1.length != arr2.length) return "invalid data";
        else {
            const mergedArrays : [number,number][] = [];
            arr1.forEach((value, index) => {
                mergedArrays.push([value,arr2[index]]);
            })
            mergedArrays.forEach(value => result[value[0]] = result[value[1]])
            return result.join("");
        }
    }
}

console.log(StringChanges.stringReverse("string",[3,4,2],[1,0,1]));