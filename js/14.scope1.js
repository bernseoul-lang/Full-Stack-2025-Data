//자바스크립트는 코드상에서 선언된 위치에 따라 변수의 스코프(참조 범위)가 결정됨
/** “In JavaScript, a variable’s scope (its accessible range) is determined by where it is declared in the code*/
//lexical scope = static scope

var v1 = 1; //전역 변수
console.log(v1);
//console.log(window.v1); //node 환경에서는 window 객체가 없음

function func1() {
    var v1 = 2; //func1함수의 지역 변수, var는 스코프에 관계없이 재선언 가능
    console.log(v1); //2
}

func1();

var v2 = 1; //전역 변수
function func2(){
    //var v2; 생략된 형태
    console.log(v2);//undefined, 함수 내에 선언된 v2가 없으므로 v2가 호이스팅됨
    var v2= 2; //func2함수의 지역 변수.
    console.log(v2);//2
}
func2();

var v3 = 1;
let l1 =1;

//block scope
{
    var v3 = 2; //전역 변수, var로 선언된 변수는 block scope을 갖지 않음 => 위 전역 변수를 재선언한 것. 
    let l1 = 2; //지역 변수, let 이나 const로 블럭 안에서 선언한 변수는 block scope를 가짐 
}

/**{
    var v3 = 2; // Global variable. Variables declared with var do NOT have block scope, so this redeclares the global variable.
    let l1 = 2; // Local variable. Variables declared with let or const 
    // inside a block have block scope.
}
 */
//동일한 스코프 내에서 var는 재선언 가능
var v4 =1; //전역 변수
var v4= 2;
console.log(v4);

//동일한 스코프 내에서 let이나 const는 재선언 불가능
let l2 = 1; //전역 변수 
//let l2 =2;
console.log(l2);

{
    let l2=2; //지역 변수, let이나 const도 스코프가 다르면 선언 문제 없음 
    console.log(l2);
}

//node환경에서의 전역객체 :global이나 globalThis 가 생성한 빈 객체
console.log(this); 
console.log(global);
console.log(globalThis);
console.log(this==global);//false
console.log(this==globalThis);//false
console.log(global==globalThis); //true