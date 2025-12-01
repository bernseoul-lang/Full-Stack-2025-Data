/*
객체(object)
    -데이터(프라퍼티)와 기능(메소드)를 합해 놓은 프로그래밍 구성 요소
    - 프라퍼티는 프라퍼티명과 프라퍼티값으로 구성
    - 문법: {}

*/

// 일반적으로 객체는 const로 선언함. 
// 아래에서 obj1, obj2는 객체의 참조값(reference value)을 가짐
// 객체의 참조값은 불변(const), 객체 내부에 있는 프라퍼티들은 가변

//객체생성법1: 객체리터럴 사용(가장 일반적인 방식)

//사용자정의프라퍼티(사용자가 생성한 프라퍼티)가 없는 객체를 객체리터럴로 생성
const obj1 = {};

//사용자 정의 프라퍼티가 2개 있는 객체를 객체리터럴로 생성
 const obj2 ={
    name:'Jennie',
    age:29
 };

 console.log(obj2); //{ name: 'Jennie', age: 29 }

 // 객체의 프라퍼티에 접근하는 법
 obj2.name = "Rose"; //, : 참조연산자 (reference operator)
//  obj2.home-address ="Gangnam "//SyntaxError
 console.log(obj2);
 obj2['name']='Lisa';//[]:참조연산자, 프라퍼티명이 _,$이외의 특수기호를 포함하면 []를 사용해야 함. 
 obj2['home-address']='Seoul Cheongdam Elementary 321'
 console.log(obj2);

 //객체생성법2: Object생성자 함수 사용 
 const o2 = new Object();
 console.log(o2);

 //객체생성법3: 객체 생성자함수 사용
 // Person 처럼 함수 이름은 일반적으로 대문자로 시작. 
 // this : 생성자함수를 통해 생성되는 객체 자신을 가리키는 참조변수 
 function Person(name, age){
    this.name = name;
    this.age = age;
 }

// 객체 생성자함수를 통해 객체 생성
const person = new Person('Jennie', 30);
console.log(person);
console.log(typeof person); //object
//Person생성자함수를 통해 생성한 person객체는 Person타입이기도 하지만 Object 타입이기도 함
//왜냐하면 모든 참조타입은 직/간접적으로 Object를 상속 받음. 
console.log(person instanceof Object); //true, Person 타입은 Object를 상속 받음
console.log(person instanceof Person); //true, Person타입이므로 

//Car타입 객체 생성
function Car(name,price){
    this.name = name;
    this.price = price;
}
const bmw = new Car('BMW',100);
console.log(bmw);
console.log(typeof bmw); //object
console.log(bmw instanceof Object); //true
console.log(bmw instanceof Car); //true

console.log(person instanceof Car); //false
console.log(bmw instanceof Person); //false

//객체생성법 4. class 를 통해 객체 생성
class Dog{ //Dog 클래스 = Dog 타입 
    constructor(name,age){ //생성자
        this.name = name;
        this.age = age;
    }
}

const dog = new Dog('chiwawa',5);
console.log(dog);
console.log(typeof dog); //object
console.log(dog instanceof Object); //true
console.log(dog instanceof Dog); //true

//객체와 프라퍼티 
const bird = {
    name:'dove',
    legCount:2
};

//동적 프로퍼티: 실행시간에 객체의 프라퍼티가 동적으로 추가될 수 있음. 

bird.color = 'white';//or bird['color']='white';

//프라퍼티 존재여부 확인
console.log('name'in bird);//true
console.log('address'in bird);//false

//객체에서 프라퍼티 제거하는 거
delete bird.color;
console.log(bird);

// 객체는 데이터(프라퍼티)와 기능(메소드)를 가질 수 있음. 
//프라퍼티는 프라퍼티명과 프라퍼티값으로 구성되고 데이터를 저장하는 역할 
//메소드는 프라퍼티명과 함수로 구성되고 기능을 수행하는 역할을 함. 
//결론: In Javascript, method is property, but property
// 자바스크립트에서 메소드는 함수리터럴을 프라퍼티값으로 갖는 프라퍼티 

const bp={
    name:'jisoo', //프라퍼티(데이터)
    age:31, //프라퍼티(데이터)
    getName: function(){//프라퍼티(기능)=메소드
        return this.name;
    },
    getAge: function(){ //프라퍼티(기능)=메소드
        return this.age;
    }
};
console.log(bp);
console.log(bp.name);
console.log(bp.age);
console.log(bp.getName);//getName 프라퍼티가 가진 함수리터럴이 출력됨
console.log(bp.getName());//지수
console.log(bp.getAge); //getAge 프라퍼티가 가진 함수리터럴이 출력됨 
console.log(bp.getAge()); //31