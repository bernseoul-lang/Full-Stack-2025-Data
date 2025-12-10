//생성자 함수
//  -객체를 생성하기 위한 함수
//  - 프라퍼티와 메소드*(함수를 값으로 가지는 프라퍼티)로 구성
// - 생성자 함수는 기본적으로 prototype 프라퍼티를 가짐 

function Circle(radius){
    this.radius = radius;
    this.getArea = function(){
    return Math.PI * this.radius**2;
};
}

// 생성자 함수를 통해 객체 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);  
console.log(circle1.getArea());//반지름이 1인 원의 넓이
console.log(circle2.getArea()); //반지름이 2인 원의 넓이

// 생성자함수에서 정의한  getArea메소드를 생성자 함수를 통해서 생성된
// circle1,circle2 객체가 각각 가지게 되는 문제가 발생!

//생성자함수
function Circle2(radius){
    this.radius = radius;
}

//생성자함수의 prototype에 메소드 생성 (프로토타입 확장)
Circle2.prototype.getArea = function(){ //프로토타입 메소드
    return Math.PI * this.radius**2;
}

const circle3 = new Circle2(3);
const circle4 = new Circle2(4);
console.log(circle3.getArea());
console.log(circle4.getArea());

//생성자함수의 프로토타입에 생성한 메소드는 생성자함수를 통해 생성된
// 모든 객체들이 참조를 공유함. 

//circle3객체에 print라는 메소드를 생성, circle3객체에만 존재하는 메소드
circle3.print = function(){ //인스턴스 메소드=객체 메소드
    console.log('circle3 객체의 print 메소드 호출!');
}
circle3.print();
//결론: 자바스크립트의 메소드 
//1. 정적메소드: 생성자 함수에 정의하고 생성자 하수를 통해서 생성된 모든 객체들이 메소드를 각각 갖게 됨
//2. 프로토타입메소드: 생성자 함수의 프로토타입에 정의하고 생성자 함수를 통해서 생성된 모든 객체들이 메소드를 공유
//3. 인스턴스메소드: 객체마다 각각 정의해서 사용하는 메소드 

/*
__proto__, prototype, constructor, 객체의 관계

- 모든 객체는 __proto__라는 접근자 프라퍼티를 가지고 생성자함수의 prototype프라퍼티에 접근
__proto__프라퍼티는 객체가 리터럴로 만들어진 경우 Object.prototype를 가리킴
객체가 생성자함수로 만들어진 경우는 생성자함수.prototype을 가리킴
-모든 생성자함수는 prototype프라퍼티를 가지고 있음.
-prototype프라퍼티는 가지고 있는 constructor 프라퍼티를 통해 생성자함수에 접근

*/

//Person생성자 함수
//기본적으로 prototype 을 가지고 있음 
function Person(name){
    this.name = name;
}
//Person 생성자 함수를 통해 kang 객체를 생성
//기본적으로 __proto__를 가지고 있음. 
const hong = new Person('강감찬');

//실습: 실행 결과를 주석 달아보기

console.log(Person.prototype);// {}, Person생성자함수의 prototype프라퍼티

console.log(Person.prototype.constructor);// Person,Person 생성자함수

//[Object: null prototype] {}, Object생성자함수의 prototype프라퍼티
console.log(Person.prototype.__proto__); //Object Prototype

//[Function: Person], Person 생성자 함수 
console.log(hong.__proto__.constructor); //Person

//[Object: null prototype] {}, Object생성자함수의 prototype프라퍼티
console.log(hong.__proto__.__proto__); //Object Prototype

//[Function: Object]
console.log(hong.__proto__.__proto__.constructor); // Object 생성자함수

//[Object: null prototype] {}, Object생성자함수의 prototype 프라퍼티
console.log(hong.__proto__.__proto__.constructor.prototype); // Object 

//Object생성자함수의  prototype프라퍼티가 참조하고 있는 prototype은 없음.
//Object는 상속의 최상위 생성자함수임. 
console.log(hong.__proto__.__proto__.constructor.prototype.__proto__); //null, 
 