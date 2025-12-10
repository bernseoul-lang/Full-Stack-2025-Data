/* 
제어문
1. 조건문:조건의 true, false여부에 따라 실행할 구문을 선택 if, switch 
2. 반복문: 특정 회수나  true 조건 하에서 특정 코드블럭을 반복 수행, for, while, do while, for in, for of
3. break: switch에 사용하면 case를 실행하고 switch 전체를 빠져나감. 
        반복문에 사용하면 break문을 감싸고 있는 가장 가까운 반복문을 빠져나감
4. continue: 반복문에서 사용하며 continue 하단의 코드를 수행하지 않고 다음번 반복을 수행
if 문은 예를 들어 conditional statement 조건문으로서 true, false
와 {},()

if(조건이 참일 때) { 
console.log()}
else(나머지, 값이 안 들어간다){ 
    console.log}

로 해보는 것이다. 

    */

//if

let age = 13;
if(age>19) {
    console.log('over 19!');
} else if (age>15){
    console.log('over 15!');
}else if(age>13){
    console.log('over 13!');
}else{
    console.log('lower than 13!');
}
 
let val = 55;
//switch

switch(val){
    case 1:console.log('Montag');break;
    case 2:console.log('Dienstag');break;
    case 3:console.log('Mittwoch');break;
    case 4:console.log('Donnerstag');break;
    case 5:console.log('Freitag');break;
    case 6:console.log('Samstag');break;
    case 7:console.log('Sonntag');break;
    default:console.log('nich 1 bis 7!');
 
}

//실습: 위 switch  
let val2=3;

if(val===1){
    console.log('Montag');
}
else if(val===2){
    console.log('Dienstag');
}
else if(val===3){
    console.log('Mittwoch');
}
else if(val===4){
    console.log('Donnerstag');
}
else if(val===5){
    console.log('Freitag');
}
else if(val===6){
    console.log('Samstag');
}
else if(val===7){
    console.log('Sonntag');
}
else{
    console.log('not a value from 1 to 7!');
}

//answer:
if(val=1)console.log('mon');
if(val=2)console.log('tue');
if(val=3)console.log('wed');
if(val=4)console.log('thu');
if(val=5)console.log('fri');
if(val=6)console.log('sat');
if(val=7)console.log('sun');
else console.log('1부터 7의 값이 아님!');

//실습:변수의 값이 홀수이면 홀수입니다! 짝수이면 짝수입니다!를 출력
//      if문과 switch 문을 사용해서 각각 실습 

let num = 5;

if(num%2===1){
    console.log('홀수입니다');

}
    else{
        console.log('짝수입니다.');
    }

if(num){}


let num1 = 7;  // 원하는 숫자로 변경

switch (num % 2) {
    case 1:
        console.log("홀수입니다!");
        break;
    case 0:
        console.log("짝수입니다!");
        break;
    default:
        console.log("숫자가 아닙니다!");
}
let val3 =7;
switch(val3 %2 ===0){
    case true:console.log(`짝수입니다.`);break;
    case false: console.log(`홀수입니다.`);
}

//실습: 변수의 값이 100이하의 수이면 5로 나눈 나머지를 출력, 
// 100 을 초과하는 수이면 3으로 나눈 나머지를 출력
let val12 = 77;
let result = 0;

if (val <= 100);

console.log(result);

 //실습: 변수의 타입이  Array인지 아닌지 출력 
 const val4 =[1,2,3,4,5]; //배열 Array

if (Array.isArray(val4)) {
    console.log('Array입니다.')
} 
else{
    console.log('Array타입이 아닙니다!');
}
//정답
console.log(val4 instanceof Array ? 'Array 타입': 'Array 타입 아님!');


//실습: 객체가 변수가 가진 문자열을 프라퍼티로 가지고 있는 지 출력
const obj = {
    name: 'HongGilDong',
    age:20,
    hobby:['축구','농구','야구']
};
const val5 = 'name';

if(val5 in obj){
    console.log('Property가 있습니다. ');
}
else{
    console.log('프라퍼티가 없습니다. ');
}

 console.log(val5 in obj ? '가지고 있음!':'가지고 있지 않음!');
 

 //for 

 //- 특정회수만큼 반복 수행할 코드가 있다면 for 사용 
 // -for 작동 순서
 // -1. 초기식 수행(처음 한 번만)
 // - 2. 판별식 수행 (결과가 true면 for 코드블럭 수행, false면 for문을 빠져 나감)
 // - 3. 증감식 수행
 // -4. 판별식 수행 (결과가 true면 for코드블럭 수행,false면 for문을 빠져 나감)
 // -판별식 결과가 false이면 for문을 벗어남

 // 10회 반복, 0부터 9까지 출력 
 for (let i=0;i<10;i++){
    console.log(i);
 }

 //5회 반복, 5부터 1까지 출력
 for(let i =5; i>0;i--){
    console.log(i);
 }

 //초기식에 변수를 여러개 사용 가능 
 for(let i=1, sum=0;i<=10;i++){
    sum += i;//sum = sum+i;
    console.log(`누적 합::${sum}`);
}

//1에서 50까지의 정수에서 3의 배수만 출력
for(let i = 3, max=0; i<=50; i++){
    max = i;
    console.log(max);
}

//정답
for(let i=1; i<=50;i++){
    if(i%3==0)console.log(i);
}
//같은 결과 반복 적은 코드 
// for(let i=3;count<=50;i=i+3){
//     console.log(i);
//     console.log(`${++count}번 반복`);
// }

//gpt version
// for (let i = 3; count <= 0; i <=50, i += 3) { 
//     console.log(i);
//     console.log(`${++count}번 반복`);
// }

// for 문 내에서 break,continue 사용 
for (let i = 1; i<=50; i++){
    if(i%4==0)continue; //i의 값이 4의 배수라면 아래코드 수행안하고 다음번 반복 수행 
    if(i==30)break; //i의 값이 30이 되면 가장 가까운 반복문을 탈출 
    if(i%2==0) console.log(`${i}는 짝수!`);  
}

// 중첩 for (nested for, for문을 2개이상 겹쳐서 사용)
//외부 for가 5번, 내부 for 가 외부 for 1번마다 5번 수행하므로 전체 25번 반복 
// O(2):성능에 사용하는 빅오 노테이션, Big O Notation. 2라는 이야기는 반복이 중첩되었다는 이야기
//성능을 위해 최대 O(3)를 넘지 않도록 로직을 구현하는 것이 중요.
for(let i=1; i<=5;i++){
    for(let j =1; j<=5;j++){ //i가 1번 반복할 때마다 j는 5번 반복 
    console.log(`${i}*${j}=${i*j}`);
    }
}

/*실습:구구단 출력
2*1=2 2*2=2 2*3=6....2*9=18
...
9*1=9 9*2=18 9*3=27   9*9=81
*/
 
for (let i=2;i<=9;i++){
    let str =""; //for (let j =1;j<=9;j++){}
    for (let j = 1;j<=9;j++){
        str +=`${i}*${j}=${i*j}\t`;
    }
    console.log(str);
}
//teacher
for (let i=2;i<=9;i++){
    for (let j =1;j<=9;j++){
    process.stdout.write(`${i}*${j}=${i*j}\t`);
    }
    console.log();
}


//gpt 

for (let dan = 2; dan <= 9; dan++) {
    console.log(`=== ${dan}단 ===`);
    
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} * ${i} = ${dan * i}`);
    }

 
}
    for(let dan=2;dan<=9;dan++){
        console.log(`--- ${dan}단 ---`);

    }

//실습: 1000까지 피보나치 수열 출력
/*1
1 2
1 2 3 
1 2 3 5
1 2 3 5 8 
1 2 3 5 8 13
*/
let a = 1;
let b = 1;

// console.log(a);
// process.stdout.write(a + " ");

 
// while(b<=1000)
//     process.stdout.write(b + " ");
   
//     let next = a+b;
//         a=b;
//         b=next;


// while(true){
//     let next= a+b;
//     if(next>1000) break;
//     a=b;
//     b=next;
//     console.log('');
//     process.stdout.write('');
// }

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 5 
// 1 2 3 5 8 ...
// 1 2 3 5 8 ...987 
// this style of output?
/*let a = 1;
let b = 1;

let fib = [a];   // 첫 줄: 1 출력

// 1000 이하의 피보나치 수 생성
while (b <= 1000) {
    fib.push(b); // 배열에 숫자를 추가

    // 현재까지의 수열을 한 줄로 출력
    console.log(fib.join(" "));

    // 다음 피보나치 계산
    let next = a + b;
    a = b;
    b = next;
}


AI Algorithm:
let a = 1;
let b = 1;

// 첫 줄
console.log(a);

// 두 번째 줄 시작
process.stdout.write(a + " ");

while (b <= 1000) {
    // print current Fibonacci number on same line
    process.stdout.write(b + " ");

    // prepare for next
    let next = a + b;
    a = b;
    b = next;

    // if next line should start → print newline
    console.log("");  // 줄바꿈
    process.stdout.write(""); // 다음 줄 준비
}

*/

let v = 10;
while(v>0){
    console.log(v);
    v--;
}

//do while
//- while과 동일하지만 한번은 do블럭을 수행하고 조건이 true 인 동안 반복 수행
let v2 = 10;
do{
    console.log(v2);
    v2--;
} while(v2>0);

//for in 
// 객체의 프라퍼티들을 반복할 때 사용 
const hong = {
    name: '호길동',
    age:20,
    address:'Seoul Gangnam Road 320'
};
// 객체의 프라퍼티들을 하나씩 꺼내서 반복 
//key 변수에는 프라퍼티의 키가 할당됨 
for(let key in hong){ 
    console.log(key,hong[key]);
}

//for of 
// -iterable 을 반복할 때 사용 
// 이터러블: 반복 가능한 객체(배열 문자열 Map, Set ...)

let str = 'Hello Javascript!';
for (let ch of str){
    console.log(ch);
}