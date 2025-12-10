/*
함수(function)
    재사용(reusing )하기 위해 코드을을 묶어놓은 카드 블록
    02.함수는 생성해 두고 필요한 때 불러서 사용
    자바스크립트에서 함수는 매우 중요한 프로그래밍 단위
    (named function) 이름이 있는 함수, 이름없는 함수(annonymous function)로 구분
    
    */

    function add(a,b){
        return a +b;
    }
    console.log(add); //[Function: add]
    console.log(add()); //NaN: undefined + undefined 의 결과 
    console.log(add(1)); // NaN: 1+ undefined  이 결과
    console.log(add(1,2)); //3
    console.log(add(1,2,3)); //3, 세번째 인자 3은 무시 

//2. 함수 표현식
// 값으로서의 함수
// 변수에 할당도 가능하고 다른 함수에 인자로 전달도 가는ㅇ.
//호이스팅 안됨 
const mul = function(a,b){
    return a *b;
}
console.log(mul); //[Function: mul]
console.log(mul());//NaN, undefined*undefined의 결과
console.log((1));//NaN, 1*undefined의 결과 ;
console.log((1,2));//2
console.log((1,2,3));//2, 세번째 인자 3은 무시

//3. Function 생성자 함수
const dev= new Function('a','b','return a/b');//[Function: anonymous]
console.log(dev);//NaN, undefined/undefined의 결과 
console.log(dev()); //NaN, 1/undefined 의 결과
console.log(dev(1)); //
console.log(dev(1,2)); //0.5
console.log(dev(1,2,3)); //0.5, 세번째 인자 3은 무시

//4. 화살표 함수(arrow function)
//  -함수 선언문의 문법을 간략히
// - 자체 스코프를 가지지 않음. 
// - 호이스팅 안됨 
// 파라미터가 1개일 때는 () 생략 가능(예>x=>x*x)

const minus1 = (a,b)=> a-b; //함수 몸체가 한 줄인 경우
const minus2=(a,b)=>{//함수 몸체가 여러 줄인 경우
    return a-b;
};
console.log(minus1);//[Function: minus1]
console.log(minus1());//NaN, undefined - undefined의 결과 
console.log(minus1(1));//NaN, 1-undefined의 결과
console.log(minus1(1,2));//-1
console.log(minus1(1,2,3));//-1, 세번째 인자 3은 무시 

//자바스크립트에서 함수표현식, 화살표함수는 값이므로 함수에 인자로 전달 가능
// 콜백함수(callback function):함수에 인자로 전달되는 함수
// 고차함수(high order function):함수를 인자로 전달받는 함수

//고차함수: f파라미터를 통해서 함수를 전달받는 함수
const plusMain = function(val,f){
    console.log(f(val));
};

//콜백함수
const plus1 = a => a+1;
const plus2 = a => a+2;
const plus3 = a => a+3;

//고차함수를 호출하면서 콜백함수를 전달
plusMain(1,plus1);//2
plusMain(1,plus2);//3
plusMain(1,plus3);//4

//실습
//1.calcMain이란 고차함수를 생성
//2. 덧셈 addCalc, 뺄셈 subCalc, 곱셈 mulCalc, 나눗셈 divCalc 라는 콜백함수들 생성
//3. 10과 5와 골백함수를 고차함수에 인자로 전달해서 연산결과를 출력
//4. 단, 함수리터럴 방식과 화살표함수 방식으로 두가지로 진행. \

// const calcMain =function(nu1,nu2,f)=>{
//     return (f(nu1,nu2));
// }

// const addCalc = (a,b)=> a+b;
// const subCalc = (a,b)=> a-b;
// const mulCalc = (a,b)=> a*b;
// const divCalc = (a,b) => a/b;

// const addCalc2 = function (nu1, nu2){
//     return v1+v2;
// };
// const subCalc2 = function (nu1, nu2){
//     return v1-v2;
// };
// const mulCalc2 = function (nu1, nu2){
//     return v1*v2;
// };
// const divCalc2 = function (nu1, nu2){
//     return v1/v2;
// };
// console.log(addCalc);
// console.log(subCalc);
// console.log(mulCalc);
// console.log(divCalc);

const calcMain =function(nu1,nu2,f){
    console.log(f(nu1,nu2));
};
const addCalc = function(num1, num2) {return num1 + num2};
const subCalc = function(num1, num2) {return num1 - num2};
const mulCalc = function(num1, num2) {return num1 * num2};
const divCalc = function(num1, num2) {return num1 / num2};

// const addCalc = (num1, num2)

calcMain(10,5,addCalc);
calcMain(10,5,subCalc);
calcMain(10,5,mulCalc);
calcMain(10,5,divCalc);

//실습
// Math.random() : 0.0 <=x<1.0 범위의 임의의 실수를 리턴하는 함수
//Math.ceil(x):x 보다 크지만 가장 작은 정수를 리턴하는 함수, 천장값, 3.14의 ceil값은 4\
//Math.floor(x):x보다 작지만 가장 큰 정수를 리턴하는 함수, 바닥값, 3.14의 floor값은 3 
console.log(Math.random());

//1.1에서 4까지의 임의의 정수를 생성
//2. 임의의 정수가 1이면 두번째 인자까지 덧셈
// 3. 임의의 정수가 2이면 세번째 인자까지 덧셈
//4. 임의의 정수가 3이면 네번째 인자까지 덧셈
//5. 임의의 정수가 4이면 연산하지 않고 종료 
//고차함수
const adder = function(num1,num2,num3,num4,f){
// console.log(adder(10, 20, 30, 40, add1)); // → 30
// console.log(adder(10, 20, 30, 40, add2)); // → 60
// console.log(adder(10, 20, 30, 40, add3)); // → 100
// console.log(adder(10, 20, 30, 40, stop)); // → "연산 종료"

// };

//콜백함수
const add2 =(num1,num2) => num1+num2;
const add3 = (num1,num2,num3)=>num1+num2+num3;
const add4 = (num1,num2,num3, num4)=>num1+num2+num3+num4;

//고차함수 호출
switch (Math.floor(Math.random()*4)+1){
    case 1 : adder(1,2, undefined, undefined, add2);break;
    case 2 : adder(1,2,3,undefined,add3);break;
    case 3: adder(1,2,3,4,add4);break;
    default:console.log('exit');

// const random = ()=>Math.floor(Math.random()*4+1);
 const random = Math.floor(Math.random() * 4) + 1;
// const add = (n1,n2,n3,n4,f)=>{}
console.log("random value is:", random);

 
/*
// 1. 1~4까지 임의의 정수 생성
const random = Math.floor(Math.random() * 4) + 1;
console.log("랜덤 값:", random);

// 2~5. 조건에 따라 덧셈 or 종료
function calcRandom(a, b, c, d) {
    let sum = 0;

    if (random === 1) {
        sum = a + b;
    } else if (random === 2) {
        sum = a + b + c;
    } else if (random === 3) {
        sum = a + b + c + d;
    } else if (random === 4) {
        console.log("4가 나와서 연산하지 않고 종료합니다.");
        return;
    }

    console.log("결과:", sum);
}

// 예시 실행
calcRandom(10, 20, 30, 40);
// 1. 1~4까지 임의의 정수 생성
const random = Math.floor(Math.random() * 4) + 1;
console.log("랜덤 값:", random);

// 2~5. 조건에 따라 덧셈 or 종료
function calcRandom(a, b, c, d) {
    let sum = 0;

    if (random === 1) {
        sum = a + b;
    } else if (random === 2) {
        sum = a + b + c;
    } else if (random === 3) {
        sum = a + b + c + d;
    } else if (random === 4) {
        console.log("4가 나와서 연산하지 않고 종료합니다.");
        return;
    }

    console.log("결과:", sum);
}

// 예시 실행
calcRandom(10, 20, 30, 40);
 */}