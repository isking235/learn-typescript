/* function logText(text) {
    console.log(text);
    return text;
}

logText(10); //숫자 10
logText('하이'); //문자열 하이
logText(true); //진위값 true
 */


/* function logText<T>(text:T):T {
    console.log(text);
    return text;
}

logText<string>('하이'); */


/* function logText(text:string) {
    console.log(text);
    text.split('').reverse().join(''); //문자만 가능한 로직을 넣는다면  string
    return text;
}

function logNumber(num:number) {
    console.log(num);
    return num;
}

logText('a');
logText(10);
const num = logNumber(10);
logText(true); */


/* function logText(text : string |number) {
    console.log(text);
    return text;
}

const a = logText('a');
logText(10); */

//제네릭의 장점과 타입 추론에서의 이점
function logText<T>(text:T) :T{
    console.log(text);
    return text;
}

const str = logText<string>('a');
str.split('');
logText<boolean>(true); 

//인터페이스에 제네릭을 선언하는 방법
/* interface Dropdown{
    value : string;
    selected : boolean;
}

const obj : Dropdown = {value:10, selected:false}; */


interface Dropdown<T> {
    value: T;
    selected : boolean;
}

const obj1 : Dropdown<number> = {value:'abc', selected:false};//오류남
const obj2 : Dropdown<string> = {value:'abc', selected:false}; //'abc' 가 string라 오류 안 남

//제네릭의 타입 제한
/* function logTextLength<T>(text:T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    })
    return text;
}

logTextLength<string>(['hi','abc']);
 */
//제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length : number;
}

function logTextLength<T extends LengthType>(text:T):T{
    text.length;
    return text;
}

logTextLength('a');
logTextLength(10);
logTextLength({length :10});

//제네릭 타입 제한 3 -keyof
interface ShoppingItem {
    name:string;
    price : number;
    stock:number;
}

/* function getShoppingItemOption<T>(itemOption : T) :T {
    return itemOption;
}

getShoppingItemOption(10);
getShoppingItemOption<string>('a'); */


function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption : T) :T {
    return itemOption;
}

getShoppingItemOption('name');