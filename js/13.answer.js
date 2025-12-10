const calcMain = (num1,num2,f)=> console.log(f(num1,num2));
const addcallBack =(num1,num2)=>num1+num2;
const subcallBack =(num1,num2)=>num1-num2;
const mulcallBack =(num1,num2)=>num1*num2;
const devcallBack =(num1,num2)=>num1/num2;
calcMain(2,5, addcallBack);
calcMain(2,5, subcallBack);
calcMain(2,5, mulcallBack);
calcMain(2,5, devcallBack);

//2

const calcMain2 = (num1,num2,f1,f2) =>{
    if (num1>num2)console.log(f1(num1,num2));
    else if(num2>num1) console.log(f2(num2,num1));
    else console.log('same');
    };

const f1 = (num1, num2) => num1 - num2;
const f2 = (num1, num2)=> num2*num2-num1*num1;
calcMain2(5,3,f1,f2);
calcMain2(3,5,f1,f2);
calcMain2(3,3,f1,f2);

//3 즉시실행함수
(function (num1,num2,f1,f2){
    if (num1>num2)console.log(f1(num1,num2));
    else if(num2>num1) console.log(f2(num2,num1));
    else console.log('same');
}(3,5,f1,f2));

//고차함수, 콜백함수 실습 4
const calcMain3 = function (num,fn1,fn2,fn3){
    console.log(fn3(fn2(fn1(num))));
}
const fn1 = num => num*5;
const fn2 = num=> num-3;
const fn3 = num => num/2;
calcMain3(3, fn1,fn2,fn3);