const hong = {};
//property 동적 생성;
hong.name = '홍길동';
hong['age']=20;
//hong.home-address = 'Seoul';
hong['home-address']='Seoul';

//프라퍼티 축약 표현( ES6)
//  프라퍼티의 값이 변수의 값과 같을 때 프라퍼티명만 객체내에 기술
let x=1,y=2;
const obj1={
    x, //x:1
    y  //y:2
}

//계산된 프라퍼티명(프라퍼티명을 변수를 활용해서 여러 개 동적으로 생성)
const prefix = 'prop';
let i = 0;
const obj2 = {
    [`${prefix}-${++i}`]:i,
    [`${prefix}-${++i}`]:i,
    [`${prefix}-${++i}`]:i,
};
console.log(obj2);

//for문을 활용해서 obj2객체에 prop-4부터 prop-100까지 프라퍼티 생성 
for (let j=4;j<=100;j++){
    obj2[`${prefix}-${j}`]=j;
}
console.log(obj2);

//실습
/*
1. primenum이라는 객체를 객체리터럴 방식으로 생성
2. 2~1000의 범위에서 프라퍼티명을 prime-2~prime- 마지막 소수까지 생성
3. 각 프라퍼티는 소수를 가지도록 해서 primenum 객체를 출력
4. 소수(prime number): 1과 자기자신 외에는 나누어 떨어지지 않는 정수 */

// const primenum= {
//     "prime-2":2,
// };
// let str ="";
// for(let num =2;num<=1000;num+=2){
//     let flag = false;
//     primenum[`prime -${num}`]=num;
//     str += num + " ";
// }
// console.log(str);

const primenum={};
for(let i=2;i<=1000;i++){
    let isPrime = true;  // flag 변수
    for(let j = 2; j < i; j++) { //i의 현재값 전까지 1씩 증가하면서 반복 
        if (i % j === 0) {   // 한 번이라도 나누어 떨어지면 소수가 아님
            isPrime = false;
            break;           // 더 볼 필요 없으니 탈출
        }
    }

    if (isPrime) { //소수인 경우
        primenum[`prime-${i}`] = i;  // prime-2, prime-3 이런 식으로 저장, (동적으로 계산된 프라퍼티를 생성)
    }

    }
   
console.log(primenum);


// const primenum = {
//     "prime-2": 2,  // 2는 미리 넣어두기 (유일한 짝수 소수)
// };

// let str = "";

// // 3부터 1000까지 홀수만 검사
// for (let num = 3; num <= 1000; num += 2) {
//     let flag = true; // 일단 소수라고 가정

//     // 2부터 num-1까지 나누어보면서 소수인지 검사
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) { // 한 번이라도 나누어떨어지면 소수 아님
//             flag = false;
//             break;
//         }
//     }

//     if (flag) { // 소수일 때만 primenum에 등록
//         primenum[`prime-${num}`] = num;  // 공백 제거: prime-숫자
//         str += num + " ";
//     }
// }

// console.log(primenum); // 객체 전체 확인
// console.log(str);      // 소수 리스트 문자열 확인


//동적 메소드 생성
const kim ={
    name: 'Jennie',
    age:30
};
//getName 은 kim 객체의 프라퍼티명, 뒤의 익명함수리터럴을 getName프라퍼티에 저장
kim.getName = function(){ // 프라퍼티에 함수리터럴 저장 => 메소드
    return this.name;
};
console.log(kim);
console.log(kim.getName());

//메소드 축약 표현 (ES6)
const choi = {
    name:'Lisa Manobal',
    age:29,
    //getName: function(){console.log(this.name);}
    getName(){
        console.log(this.name);
    },
    //getAge: function(){console.log(this.age);}
    getAge(){
        console.log(this.age);
    }
};

/*
1. 직원 한 명의 정보를 객체로 만들어 출력
객체명: hong, 프라퍼티:(name:'Jennie', age:30, position:'manager')

2. 프라퍼티 추가: salary: 3500
3. position 프라퍼티 값을 '총괄매니저'로 변경
4. age 프라퍼티 제거
5. 주소 프라퍼티 추가: address {city:'서울', gu:'강남구', zip:'05101'}
6. 주소 프라퍼티 출력
7. 주소 중 구의 값을 '송파구'로 변경
8. 새로운 직원 생성 
    객체명: kang, 프라퍼티: (name:' 강감찬', age:20, position: '홍보부')
9. 새로운 직원에 주소 프라퍼티 추가 : address{city:'경기도',gu:'분당구',zip:'04101'}
10.employee 객체를 생성하여 두 직원을 프라퍼티로 추가: 프라퍼티명 emp1, emp2
11. employee  객체의 프라퍼티인 emp2 객체에 salary:2500 프라퍼티 추가
12. employee 객체내의 두 직원의 급여 합계를 출력 
*/

// function Person(name,age,position){
//     this.name=name;
//     this.age=age;
//     this.position=position;    
// }

// const hong1 = new Person('Jennie', 30, 'Manager');
// console.log(hong1);

// hong1.position="Main Manager";
// console.log(hong1.position);

// delete hong1.age;
// console.log(hong1.age);

// hong1.address

// const kang= new Person( 강감찬, 20, 홍보부);
// console.log(kang);

// kang.address =  address{city:'경기도',gu:'분당구',zip:'04101'}
// console.log(kang);

// const employee = {
//     emp1:hong,
//     emp2:kang,
// };
// console.log(employee);

// //11.
// employee.emp2.salary=2500;
// console.log(employee);

// //12
// let result =0;
// for(let emp in employee){
//     console.log(emp.salary);
// }
// console.log();
// // const totalSalary = employee.emp1.salary + employee.emp2.salary;
// console.log("12: 직원 두 명의 급여 합계 =", totalSalary);

// 1. 직원 객체 hong 생성
const hong = {
    name: 'Jennie',
    age: 30,
    position: 'manager'
};
console.log("1:", hong);

// 2. salary 프라퍼티 추가
hong.salary = 3500;
console.log("2:", hong);

// 3. position 값을 '총괄매니저'로 변경
hong.position = '총괄매니저';
console.log("3:", hong);

// 4. age 프라퍼티 제거
delete hong.age;
console.log("4:", hong);

// 5. 주소 프라퍼티 추가
hong.address = {
    city: '서울',
    gu: '강남구',
    zip: '05101'
};
console.log("5:", hong);

// 6. 주소 프라퍼티 출력
console.log("6: hong 주소 =", hong.address);

// 7. 주소 중 구의 값을 '송파구'로 변경
hong.address.gu = '송파구';
console.log("7:", hong.address);

// 8. 새로운 직원 kang 생성
// const kang = {
//     name: '강감찬',
//     age: 20,
//     position: '홍보부'
// };
// console.log("8:", kang);

const kang = {
    name: "Lisa",
    age:20,
    position:'Ads Team'
};
// 9. kang에 address 추가
kang.address = {
    city: 'Gyeonggi',
    gu: 'Bundang',
    zip: '04101'
};
console.log("9:", kang);

// 10. employee 객체 생성 후 hong, kang 추가
const employee = {
    emp1: hong,
    emp2: kang
};
console.log("10:", employee);

11. employee.emp2에 salary: 2500 추가
employee.emp2.salary = 2500;
console.log("11:", employee.emp2);
 
// 12. 두 직원의 급여 합계 출력
const totalSalary = employee.emp1.salary + employee.emp2.salary;
console.log("12: 직원 두 명의 급여 합계 =", totalSalary);
 