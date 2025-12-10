// /**
//  * 클래스(class)
//  * - ES6에 도입됨
//  * - 클레스명은 대문자로 시작하는 관례
//  * 클래스 문법 구성요소
//  * class키워드, 클래스명, constructor, 프로토타입메소드, 정적메소드, getter, setter
//  */

// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this.age = age;
//     }

//     // Prototype method (instance method)
//     printName() {
//         console.log(this._name);
//     }

//     // Static method
//     static printName() {
//         console.log("Person Class");
//     }

//     // Getter method
//     get name() {
//         return this._name;
//     }

//     // Setter method
//     set name(name) {
//         this._name = name;
//     }
// }

//     //클래스를 통해 객체를 생성
//     const person1 = new Person('Jennie',29);
//     const person2 = new Person('Lisa', 27);

//     //객체 
//     // 프라퍼티 접근
//     console.log(person1.name);
//     console.log(person2.age); //undefined, 

//     //객체 프라퍼티 변경
//     person1.name = 'Jenny';
//     console.log(person1.name);
//     person1.age =50;
//     console.log(person1.age);

//     //프로토타입메소드호출 
//     person1.printName();
//     person2.printName();

//     //정적메소드 호출 
//     Person.printName(); //undefined 

//     //자바스크립트에서 클래스는 function타입, 클래스는 내부적으로 함수로 처리됨. 
//     console.log(typeof Person); //function
//     console.log(Person); //[class Person]
//     console.log(person1 instanceof Person); //true
//     console.log(person1 instanceof Object); //true
//     console.log(person2 instanceof Object); //true
//     console.log(person2 instanceof Person); //true

//     //실습: 위 모든 코드를 주석처리하고 생성자함수 문법으로 변경

 

// *생성자 함수(Constructor Function) 버전*//

// 생성자 함수 (constructor 역할)
// function Person(name, age) {
//     this._name = name;
//     this.age = age;
// }

// // 프로토타입 메소드 (instance method)
// Person.prototype.printName = function () {
//     console.log(this._name);
// };

// //  정적 메소드 (static method)
// Person.printName = function () {
//     console.log("Person Class");
// };

// //  getter
// Object.defineProperty(Person.prototype, "name", {
//     get: function () {
//         return this._name;
//     }
// });

// //  setter
// Object.defineProperty(Person.prototype, "name", {
//     set: function (value) {
//         this._name = value;
//     }
// });

// // -----------------------------------------------
// // 객체 생성
// const person1 = new Person("Jennie", 29);
// const person2 = new Person("Lisa", 27);

// // 객체 프로퍼티 접근
// console.log(person1.name);     // "Jennie"
// console.log(person2.age);      // 27

// // 객체 프로퍼티 변경
// person1.name = "Jenny";
// console.log(person1.name);     // "Jenny"

// person1.age = 50;
// console.log(person1.age);      // 50

// // 프로토타입 메소드 호출
// person1.printName();           // Jenny
// person2.printName();           // Lisa

// // 정적 메소드 호출
// Person.printName();            // Person Class

// // 타입 확인
// console.log(typeof Person);                    // function
// console.log(person1 instanceof Person);        // true
// console.log(person1 instanceof Object);        // true
// console.log(person2 instanceof Person);        // true
// console.log(person2 instanceof Object);        // true

//Teacher Version

//생성자 함수 
function Person(name,age){
    this.name = name;
    this.age = age;
}

//프로토타입 메소드
Person.prototype.printName = function(){
    console.log(this.name);
};

//정적 메소드
Person.printName = function(){
    console.log(this.name);
};

//객체 생성
const person1 = new Person('Hong',20);
const person2 = new Person('kang', 30);

person1.printName();
person2.printName();

Person.printName();

console.log(person1.name);//Hong
console.log(person1.age); //20

person2.name = 'Kang';
person2.age = 50;
console.log(person2.name); //kang
console.log(person2.age); //50