/**숫자형 이넘 */
enum Shoes {
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes); //0

/**문자형 이넘 */
enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes2 = Shoes2.Nike;
console.log(myShoes2); //0
/*이넘 활용 사례*/

//예제
enum answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer:string) {
    if(answer == 'yes') {
        console.log('정답입니다');
    }
    if (answer == 'no') {
        console.log('오답입니다.');

    }

}

//answer:string 경우 모두 작성 가능 하다.
askQuestion('예스');
askQuestion('y');
askQuestion('Yes');


enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestionEnum(answer:Answer) {
    if(answer == Answer.Yes) {
        console.log('정답입니다');
    }
    if (answer == Answer.No) {
        console.log('오답입니다.');

    }

}

//enum에선 입력 안된다.
askQuestionEnum('예스');
askQuestionEnum('y');
askQuestionEnum('Yes');

askQuestionEnum(Answer.Yes);
