/**
 * 
 * Iterable 이터러블: 반복의 대상이 되는 객체 
 * - 문자열, 배열 DOMCOLLECTION, MAP, SET, ARGUMENTS ...
 * - 이터러블의 특성 
 * 1) FOR OF  문법으로 반복 가능. 
 * 2) 스프레드문법 사용 가능 
 * 3) 구조분해할당 가능(객체는 이터러블은 아니지만 특별히 구조분해할당이 가능)
 */

//배열은 이터러블

const arr = [1,2,3];

//배열은 Symbol.iterator(이터레이터 메소드)를 가지고 있으므로 이터러블
console.log(Symbol.iterator in arr); //true

//이터레이터 획득 (배열을 반복할 수 있는 반복자메소드 획득)
const iterator = arr[Symbol.iterator]();

//이터레이터는  next메소드를 가지고 있으. 
console.log('next' in iterator); //true

//이터레이터으 ㅣnext 메소드를 호출해서 반복시의 값과 반복완료상태를 얻을 수 있음. 
console.log(iterator.next()); //{ value: 1, done: false }
console.log(iterator.next()); //{ value: 2, done: false }
console.log(iterator.next()); //{ value: 3, done: false }
console.log(iterator.next()); //{ value: undefined, done: true }

// for of 를 통한 이터러블 반복 
for (ele of arr){
    console.log(ele); //1 2 3
}
for(ele of 'Hello'){
    console.log(ele);//H e l l o
}

// 스프레드 문법 (spread syntax): 이터러블의 요소들을 흩어 뿌림
console.log([...arr]); //[1,2,3] 
console.log([...arr,4,5]); //[1,2,3,4,5] 
console.log([...'Hello']); //[ 'H', 'e', 'l', 'l', 'o' ]
console.log([...[1,2],...[3,4,5]]);//[ 1, 2, 3, 4, 5 ]
console.log({...{x:1,y:2}}); //{ x: 1, y: 2 }, 객첸 이터러블은 아니지만 스프레드 문법이 가능.
console.log({...{x:1,y:2}, z:3}); //{ x: 1, y: 2, z: 3 } 기존 객체의 프라퍼티에 새로운 프라퍼티 추가
console.log({...{x:1,y:2},y:3}); //{ x: 1, y: 3 } //기존 객체의 프라퍼티 값을 추가 
console.log({...{x:1,y:2},...{y:3,z:4}}); //{ x: 1, y: 3, z: 4 }

//구조분해할당(Destructuring Assignment)
const[first,second] = [1,2];//first = 1, second = 2
console.log(first, second);
const[h,a,l1,l2,o]= 'hallo';
console.log(h,a,l1,l1,o); //hallo


//Rest여소를 사용한 구조분해할당 
const[x,...y] = [1,2,3]; //x=1,y=[2,3]
console.log(x,y); //1[2,3]

//구조분해할당시 기본값 할당 시 기본겂 설정 
const[aa,bb=2,cc] = [1,3]; //aa=1,bb=2,cc=3
console.log(aa,bb,cc);// 1 2 3

//구조분해할당을 통해 문자열 객체으 length 프라퍼티 추출
 const str = 'Hallo Wilkommen zu Samsung  삼성 인재개발 풀!';
 const {length} = str;
 console.log(length); //38

 //객체 구조분해할당
 const person = {
    name: 'Jennie',
    age:29
 };
 const {name,age} = person;
 console.log(name,age);//Jennie 29

 const persons = [
    {pname:'jennie',page:29},
    {pname:'lisa',page:28},
    {pname:'rOSE',page:28}
 ];

//필요한 객체만 획득
const[hong,,] = persons;
console.log(hong); //{ pname: 'jennie', page: 29 }
const[,,lee]= persons;
console.log(lee);//{ pname: 'rOSE', page: 28 }

//실습
//1. persons배열에서 두번째 객체인 강감찬의 이름만 추출

const [, { pname: kang }] = persons;
console.log(kang); // "lisa"


//2. persons 배열에서 3번째 객체인 이순신의 나이만 추출
const[,,{page}] = persons;
console.log(page);