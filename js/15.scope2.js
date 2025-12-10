var v = 1; // 전역 변수

function outer() {
    console.log(v); // 1  → outer 함수 스코프에는 v가 없으므로 전역 변수 v(1)를 찾음

    v = 3; 
    console.log(v); // 3 → 전역 변수 v의 값을 3으로 변경

    function inner() {
        console.log(v); 
        // undefined 이유:
        // inner 함수 안에 'var v' 선언이 존재하므로,
        // v가 함수 스코프 맨 위로 hoisting됨 (선언만 hoisting)
        // 따라서 지역 변수 v가 존재하긴 하지만 아직 초기화되지 않아 undefined가 출력됨

        var v = 5; 
        console.log(v); // 5 → 이제 지역 변수 v가 5로 초기화되었으므로 5 출력
    }

    inner();
}

outer();
console.log(v); // 3 → inner의 지역 변수 v는 전역 v와 별개이므로 전역 v는 여전히 3

// Scope Chain: inner > outer > global 

//  코드 실행 순서: global >outer > inner 


var v = 1; // Global variable

function outer() {
    console.log(v); 
    // 1 → 'outer' has no local variable named v, so it looks up the scope chain and finds the global v (1).

    v = 3;
    console.log(v); 
    // 3 → This assignment updates the global variable v to 3.

    function inner() {
        console.log(v); 
        // undefined →
        // Because `inner` contains `var v`, JavaScript hoists the declaration to the top of the inner function.
        // The hoisted variable exists but is NOT initialized yet, so its value is undefined.

        var v = 5; 
        console.log(v); 
        // 5 → Now the local variable v is initialized with 5, so 5 is printed.
    }

    inner();
}

outer();
console.log(v); 
// 3 → The inner function's local v does not affect the global v.
// Only 'outer' changed the global variable v to 3.

