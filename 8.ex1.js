//제어문 실습

//1.1 부터 100까지 짝수의 합을 구해서 출력

    // let sum =0;
    // for (let i=2;i<=100;i=i+2){
    //     sum+=i;
    // }
    // console.log(`1부터 100까지의 합:${sum}`);
    
    // let result1=0;
    // for (i=1;i<=100;i++){
    //     if(i%2===0){
    //         result1+=i;
    //     }
    // }
    // console.log("짝수의합은: ",result1);

// 2.1부터 100까지 7의 배수 중 50 보다 큰 수들을 출력
// for (let i =1;i<=100;i++){
//     if(i%7===0&&i>50){
//         console.log(i);
//     }
// }

// for(let i=7;i<=100;i=i+7){
//     if(i>50)console.log(i);
// }

// 3.1부터 1000까지 홀수의 개수의 개수와 짝수의 개수 출력


let OddCount=0;
let EvenCount=0;

for(let i =1;i<1000;i++){
    if(i%2===0) EvenCount++;
    else OddCount++;
}
console.log('홀수는:',OddCount);
console.log('짝수는:',EvenCount);
console.log(`홀수:${OddCount}, 짝수:${EvenCount}`);

//4. 1부터 1000까지 제곱수만 출력(제곱수:정수를 제곱한 수, 예> 1은 1*1이므로 제곱수, 4는 2*2이므로 제곱수...)
for (let n =1; n*n<=1000;n++){
    console.log(n*n);
}

for(let i=1;i*i<=1000;i++)console.log(i*i);
//5. 윤년 판별
/* 윤년: 4로 나눈 나머지가 0이면서 100으로 나눈 
나머지가 0이 아니거나 400으로 나눈 나머지가 0인 연도 */
let jahr=2025;
if((jahr%4===0&&jahr%100!==0)||jahr%400===0)console.log(jahr+"년은 윤년입니다.");
else console.log(jahr+"년은 윤년이 아닙니다.");


//6. 세 수 중 가장 큰 수를 출력
let num1= 4;
let num2 = 1;
let num3 = 2931;
let max = num1>=num2 ?(num1>=num3?num1:num3):(num2>=num3 ?num2:num3);
// let max = a;
// if (b>max)max=b;
// if(c>max)max=c;

console.log('가장 큰 수', max);
console.log(`가장 큰 수 is ${max}`);
//7. 팩토리얼(factorial)계산하여 출력
// 팩토리얼: 1부터 해당 수까지 곱한 수 (예> 5팩토리얼: 1*2*3*4*5)

let n=19;
let result =1;
for(let i =1;i<=n;i++){
    result*=i;
}
console.log(n+"!=",result);
console.log(`Result is ${result}`);

/*8. 1000까지 피보나치 수열 출력 


*/

for 