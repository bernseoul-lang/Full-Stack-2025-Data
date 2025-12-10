// ------------------------------------------------------
// 실습 1: 고차함수 + 콜백함수로 사칙연산
// ------------------------------------------------------
const calc = (a, b, f) => f(a, b);

// Callback functions
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

// 실행
console.log(calc(10, 5, add)); // 15
console.log(calc(10, 5, sub)); // 5
console.log(calc(10, 5, mul)); // 50
console.log(calc(10, 5, div)); // 2


// ------------------------------------------------------
// 실습 2: 두 수 + 콜백함수 2개
// ------------------------------------------------------
const compareCalc = (a, b, f1, f2) => {
    if (a > b) {
        return f1(a, b);  // 첫 번째 콜백
    } else if (b > a) {
        return f2(a, b);  // 두 번째 콜백
    } else {
        return "same";    // 두 수가 같음
    }
};

// callback 1: 두 수의 차
const diff = (x, y) => x - y;

// callback 2: 뒤의 수^2 - 앞의 수^2
const squaredDiff = (x, y) => (y * y) - (x * x);

// 실행
console.log(compareCalc(10, 5, diff, squaredDiff)); // 5
console.log(compareCalc(5, 10, diff, squaredDiff)); // 75
console.log(compareCalc(7, 7, diff, squaredDiff));  // same


// ------------------------------------------------------
// 실습 2 (IIFE 버전) - 즉시실행함수
// ------------------------------------------------------
(function (a, b, f1, f2) {
    if (a > b) {
        console.log(f1(a, b));
    } else if (b > a) {
        console.log(f2(a, b));
    } else {
        console.log("same");
    }
})(10, 5,
    (x, y) => x - y,
    (x, y) => (y * y) - (x * x)
);


// ------------------------------------------------------
// 실습 3: 하나의 수 입력 → 5배 → 3 빼기 → 2로 나누기
// ------------------------------------------------------
const processNum = n => ((n * 5) - 3) / 2;

console.log(processNum(10)); // 23.5
console.log(processNum(4));  // 8.5


// ------------------------------------------------------
// 순수 함수(pure function) vs 비순수 함수
// ------------------------------------------------------

// 외부 변수를 가지는 비순수 함수 비교용 변수
let count1 = 0;

// 순수 함수: 인자만 사용, 외부 변수 변경 X
function increase1(n) {
    return ++n;
}
console.log(increase1(count1)); // 1
console.log(increase1(count1)); // 1 (외부 변수 영향 없음)

// 비순수 함수: 외부 변수를 직접 변경함
function increase2() {
    return ++count1;
}
console.log(increase2()); // 1
console.log(increase2()); // 2




// 순수 함수 실습 1
// 함수에 이름을 입력하면 이름 앞에 'Hello! ' 를 추가하는 순수함수 작성
const name1 = '홍길동';
const name2 = '강감찬';

const pureFunc1 = function(name) {
    return name;
};

console.log(pureFunc1(name1));
console.log(name1);
console.log(pureFunc1(name2));
console.log(name2);

// 순수 함수 실습 2
// 원래 객체에는 변경 없이 객체가 가진 age값을 20에서 30으로 변경하는 순수함수 작성
const hong = {
    name: '홍길동',
    age: 20
};

const pureFunc2 = function(hong, age) {
    return {
    name: hong.name,
    age : age
};
};

console.log(pureFunc2(hong, 30));
console.log(hong);