/** Bird 생성자 함수*/
function Bird(){
    this.name = '새';
}

//Chicken 생성자 함수
function Chicken(){
    this.name='닭';
}

//실습: Chicken이 Bird를 상속받도록 
Chicken.prototype = Bird.prototype

//Chicken타입 객체 생성
const chicken = new Chicken();

//프라퍼티 쉐도잉(property shadowing)
// Chicken이 Bird를 상속받았으므로 Chicken 이 가진 name 이 Bird가 가진 name을 가려버림 
console.log(chicken.name);// 닭

//메소드 오버라이딩 (method overriding)
// 상속관계에서 상위의 메소드와 하위의 메소드가 같다면 하위의 메소드가 먼저 발현
// 즉, 하위의 메소드에 의해서 상위의 메소드가 가려짐
// 상위에서 기본 구현을 하고, 하위 중에서 기본적으로는 기본 구현을 사용하지만, 
// 오버라이딩을 해서 기본 구현을 변경해서 사용할 수 있음. 

Bird.prototype.getName= function(){
    return this.name;
};
Chicken.prototype.getName = function(){
    return this.name;
};
const bird1 = new Bird();
const chicken1 = new Chicken();
console.log(bird1.getName());//새
console.log(chicken1.getName());//닭

//메소드 오버라이딩 활용 
//Vehicle 생성자 함수 
function Vehicle() {

    this.accel = function(){
        console.log('가속한당');
    };
    this.break = function(){
        console.log('감속한당');
    }
}

//Car 생성자 함수
function Car(){
    this.accel = function(){
        console.log('엑셀 페달을 밟아 가속한다');
    };
    this.break = function(){
        console.log('브레이크를 밟아 감속하자');
    }
}

//Horse 생성자 함수
function Horse(){
    this.accel = function(){
        console.log('채찍질을 해서 가속한다');
    };
    this.break = function(){
        console.log('고삐를 당겨서 감속하자');
    };
}

//상속 관계를 형성 = 프로토타입체인 형성
Car.prototype = Vehicle.prototype;
Horse.prototype = Vehicle.prototype;

// 공통 상위인 Vehicle 의 프로토타입을 확장 
Vehicle.prototype.role= function(){
    console.log('이동수단이 된다.');
}
const car= new Car();
car.accel();
car.break();
car.role();

const horse = new Horse();
horse.accel();
horse.break();
horse.role(); //horse도 공통메소드 사용 

//Bicycle생성자 함수
function Bicycle(){
    this.accel = function(){
        console.log('Please press the pedal to increase speed!');
    };
    this.break = function(){
        console.log('브레이크 레버를 손으로 쥐어서 감속한다. ');
    };
    //하위에서 재정의(overriding)하면 하위의 메소드가 실행됨
    this.role=function(){
        console.log('쌀을 배달한당~');
    };
};


//Vehicle을 상속
Bicycle.prototype = Vehicle.prototype;

//Bicycle 타입 객체 생성
const bicycle = new Bicycle();
bicycle.accel();
bicycle.break();
// bicycle.role();


//프라퍼티 열거
function Person(name,age){
    this.name = name;
    this.age = age;
}

const person = new Person('Jennie',29);

//instanceof: 객체가 프로토타입체인상에 있는지 여부 반환
console.log(person instanceof Person); //true
console.log(person instanceof Object); //true
console.log(person instanceof Chicken);//false

//in: 객체의 프로토타입체인상에 프라퍼티가 있는 지 여부 반환
console.log('name'in person); //true
console.log('address'in person); //false

//for ~ in: 객체의 열거가능한 프라퍼티의 수만큼 반복
for (let prop in person){
    console.log(prop, person[prop]);//name Jennie , age 29
}

//정적 프라퍼티, 정적 메소드 
// 생성자 함수에 정의한 프라퍼티
// - 생성자함수로 접근가능, 인스턴스(객체)로 접근 불가

function Truck(name,price){
    this.name = name; // Instance Property
    this.price= price; //Instance Property
}

Truck.cc = '5000'; //정적 프라퍼티
Truck.stop = function(){ // 정적 메소드
    console.log('멈춘당~!');
};

const truck = new Truck('Golliath', 10000);

//생성자 함수의 이름인 Truck이 출력되고 생성자함수에는 price라는 정적프라퍼티가 없으므로 undefined출력
console.log(Truck.name, Truck.price);//Truck undefined

//객체의 name프라퍼티값과 price프라퍼티의 값 출력 
console.log(truck.name,truck.price);//Golliath 10000

//정적프라퍼티의 값 출력
console.log(Truck.cc);//5000

//객체로 정적프라퍼티에 접근할 수 없음. 접근불가. 객체에 cc 프라퍼티 없음. 
console.log(truck.cc);//undefined

//정적메소드 호출
Truck.stop();//멈춘당~!

//객체로 정적메소드에 접근 불가, 에러. 
//truck.stop();//TypeError