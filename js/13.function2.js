//즉시 실행함수(IIFE :Immediately Invoked Function Expression)
//- 익명함수를 생성과 동시에 한번만 실행할 목적으로 만들어 사용하는 함수 
//- 즉시실행함수의 실행 결과는 표현식(값)이므로 변수에 저장하거나 함수의 인자나 리턴값으로 활용 가능. 
// - 실행시에 ()로 감싸서 문법에러를 방지해야 함. 
(function(){
    console.log('IIFE');
}());

const func = (function(){
    console.log('IIFE');
}());
//func(); //TypeError:func is not a function. 즉시실행함수의 실행결과는 값,값은 호출할 수 없음. 

(function(num1,num2){
    console.log(num1+num2);
}(1,2));

const func2 = (function(num1,num2){
    console.log(num1+num2);
    // return 1;
}(1,2));
//func2(); //TypeError: func2 is not a function. 즉시실행함수의 실행결과는 undefined값, 값은 호출할 수 없음. 
//func2() => undefined()
console.log(func2);//3,undefined, 즉시실행함수의 수행결과 3이 출력되고 console.log의 리턴값이 undefined

console.log(console.log('hello'));//hello, undefined, hello 출력하고 console.log의 리턴값인 undefined를 출력

//재귀 함수 (recursive function)
//-함수가 함수 내에서 자기 자신을 다시 호출하는 함수
//-무한 반복 호출하지 않도록 함수가 종료될 조건이 있어야 함. 

//팩토리얼: 5팩토리얼 = 1*2*3*4*5
function factorial(n){
    if(n==0 || n==1) return 1;
    console.log(n);
    return n*factorial(n-1);
}
console.log(factorial(7));

//  중첩 함수*(nested function)
// 함수 내에서만 사용할 기능이 있다면 함수내에 함수를 생성 
// 이 때 포함하고 있는 함수를 enclosed 함수 또는 outer 함수
// 포함되어 있는 함수를 nested함수 또는 inner 함수
//자바스크립트에서 변수는 "선언된 위치"에 따라 접근 가능여부가 결정됨. 
function outer(){
    let o = 1; //outer 함수의 지역 변수: outer 함수가 종료되면 접근할 수 없음. 
    function inner(){
        console.log(o); //1
        let i =2;//inner 함수의 지역 변수: inner 함수가 종료되면 접근할 수 없음. 
        console.log(i); //2
    }
    console.log(o); //outer 함수 스코프 
    //console.log(i); //ReferenceError: i is not defined, inner함수 스코프 
    inner();
}
outer();

// 실습
// 두 수와 콜백함수를 입력하면 사칙연산을 수행하는 고차함수, 콜백함수 작성
const calc = (a,b,f) =>f(a,b);

//callback functions. 
const add = (x,y) =>x+y;
const sub = (x,y) => x-y;
const mul = (x,y) => x*y;
const div = (x,y) => x/y;
//실행

console.log(calc(10,5,add));
console.log(calc(10,5,sub));
console.log(calc(10,5,mul));
console.log(calc(10,5,div));
//고차 함수, 콜백함수 실습 2
//두 수와 콜백함수 두개를 전달하고 
// 앞의 수가 크면 첫번째 콜백함수를 호출 
//뒤의 수가 크면 두번째 콜백함수를 호출 
//두 수가 같다면 same 이라는 문자열을 출력
// 첫 번째 콜백함수는 두 수의 차를 연산
// 두번째 콜백함수는 뒤의 수의 제곱과 앞의 수의 제곱의 차를 연산 
const compareCalc=(a,b,f1,f2)=>{
    if(a>b){
        return f1(a,b); //first callback
    }else if (b>a) {
        return f2(a,b); //second callback
    }else{
        return "same";
    }
};

//callback function 1: 두 수의 차 
const diff = (x,y) => x-y;  

//callback function: 뒤의 수의 제곱과 앞의 수의 제곱의 차를 연산 
const squaredDiff =(x,y) =>(y*y) -(x*x);

// 실행
console.log(compareCalc(10,5,diff,squaredDiff));
console.log(compareCalc(5,10,diff,squaredDiff));
console.log(compareCalc(7,7,diff,squaredDiff));

//즉시실행함수 실습
////고차 함수, 콜백함수 실습 2를 즉시실행함수로 변환
(function(a,b, f1,f2){
    if(a>b){
        console.log(f1(a,b));
    }
    else if (b>a){
        console.log(f2(a,b));
    }
    else{
        console.log('same');
    }
})(10,5,
    (x,y)=>x-y,
    (x,y)=>(y*y)-(x*x)
);
//고차 함수, 콜백함수 실습 3
// 하나의 수를 입력받아 5배한 후 3을 빼고 2로 나누기 
const processNum = n => ((n*5)-3)/2;
console.log(processNum(10));
console.log(processNum(4));


//순수 함수(pure function)
// - 외부 변수의 값에 영향을 주지 않는 함수 
// - 일반적으로 라이브러리에서 기존 변수의 값에 영향을 주지 않고 기능만 수행하게 하기 위해 사용 
// 순수 함수들로만 함수를 구성해서 프로그래밍하는 패러다임을 함수형 프로그래밍이라고 함. 
// - 순수 함수가 되려면 기본타입값만 인자로 전달해야 함.

let count1 = 0;

// 순수 함수: 함수 수행 결과가 count1의 값을 변경하지 않음. 
function increase1(n){
    return ++n;
}

console.log(increase1(count1));
console.log(increase1(count1));

//  비순수 함수: 함수 수행 결과가 count1의 값을 변경함. 
function increase2(){
    return ++count1;
}
console.log(increase2()); //1, count1이 0에서 1로 변경
console.log(increase2()); //2, count1이 1에서 2로 변경 