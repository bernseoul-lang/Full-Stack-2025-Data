//메소드의 종류
// 1. 정적메소드 (static method)
//2. 프로토타입메소트 (prototype method)
//3. 인스턴스메소드(instance method): 생성자 함수를 통해서 생성된 모든 객체가 하나씩 가지는 메소드 (불합리함)
//4. 객체메소드(object method): 인스턴스화된 객체가 단독으로 가지는 메소드 

//생성자 함수
function Person(name){
    this.name = name;
    this.getName = function(){ //인스턴스 메소드
        return name;
    };
}

const hong = new Person('Rose');//hong 객체의 name은 홍실동, hong객체는 getName 인스턴스 메소드를 가짐. 
const kang = new Person('Jisoo');//kang 객체의 name은 강감찬, kang객체도 getName 인스턴스 메소드를 가짐. 

//프로토타입 메소드
Person.prototype.getName = function(){
    return this.name; //this는 getName을 호출한 객체

}
console.log(hong.getName());
console.log(hong.getName());

Person.getName = function(){
    return this.name;
};
console.log(Person.getName);; //정적 메소드 호출 

//객체메소드
hong.getAge = function(){
    console.log('나이는 10살입니당!');
}
hong.getAge(); //나이는 10살입니당!
//kang.getAge(); //TypeError: kang.getAge is not a function