/* function logMessage(value:string) {
    console.log(value);
}

logMessage('hello');
logMessage(100);
 */

var seho : string | number | boolean;

function logMessage(value : string|number) { //union type |
    if(typeof value == 'number') {
        value.toLocaleString();
    }
    if(typeof value == 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');

}

logMessage('hello');
logMessage(100);

interface Developer {
    name : string;
    skill: string;
}

interface Person {
    name : string;
    age : number;
}

function askSomeone(someone:Developer | Person) { //공통된 속성인 name만 사용 가능 하다.
    someone.name;
    someone.skill
    someone.age
}
/*****& 인터섹션 */
function askSomeone2(someone:Developer & Person) { //&을 통해 모든 속성을 사용 할수 있다.
    someone.name;
    someone.skill;
    someone.age;
}

/**유니온 타입과 언터섹션 타입의 차이점 */
function askSomeone3(someone : Developer | Person) {
    //someone.name;
    //someone.skill;
    //someone.age;
}

askSomeone3({name : '디벨로퍼', skill:'웹 개발'}); //사용가능 
askSomeone3({name : '캡틴', age:100});//사용가능

function askSomeone4(someone : Developer & Person) {
    //someone.name;
    //someone.skill;
    //someone.age;
}

askSomeone4({name : '디벨로퍼', skill:'웹 개발'}); //사용불가능 
askSomeone4({name : '캡틴', age:100}); //사용불가능 
askSomeone4({name : '캡틴', skill:'웹 개발', age:100}); //사용가능 