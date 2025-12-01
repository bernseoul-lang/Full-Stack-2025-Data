console.log('20'-'5'+'3'); //153,-연산시 20-5 연산, 15+'3'
console.log('20'-'5'+3); //18, 

console.log(Number('')===Number('')); //true, "이나 ''는 숫자 0
console.log(Boolean(``)===Boolean('')); // false, "은 false, ''는 true
 
console.log(null+10); //10, null은 산술연산시 0
console.log(undefined+10); //Nan, undefined는 산술연산시 NaN
console.log(null==undefined); //true, null이나 undefined는 값이 없음을 나타냄
console.log(null===undefined); //false, null은 null타입이고 undefined는 undefined타입임. 

 
console.log([1,2]+[3,4]); //1,23,4(산술연산이 아닌 문자열 접합연산을 함, 1, 2문자열과 3,4,문자열을 접함)
console.log([10]-[5]); // 숫자 5(문자열로 변환을 먼저 함 => '10'-'5'=>10-5)
console.log([]+[]); // '', no value (문자열"과 문자열''의 접합연산)

console.log({}+{}); //[object Object][object Object], 객체를 문자열로 변환해서 접합연산
console.log({a:1}.toString()); //[object Object] 
console.log({a:1}=='[object Object]'); //true, 문자열로 바꿈

console.log([]==0); //true, []나 [0]나 ['0']는 숫자로 0
console.log([0]==0); //true
console.log(['0']==0); //true
 
console.log(''||123); //123, 단축평가(''은false)
console.log('hello'&&0); // 0, 단축평가('hello'는 true)
console.log(null&&'end'); //null, 단축평가(null은 false)

console.log(parseInt('9')); //9
console.log(parseInt('09')); //9, 0을 빼고 정수로 변환
console.log(parseInt('0x10')); //16, 16진수 10은 10지누로 16
console.log(parseInt('11',2)); //3, 2진수는 11은 10진수로 3
console.log(parseInt('30px'));//30, 숫자뒤 문자는 파싱할 때 무시 
console.log(parseInt('num30'));//NaN, 문자가 먼저오면 NaN

 
console.log(''==[]); //true, 배열은 ''으로 변환
console.log('0'==[]); //false, '0' == ''
console.log(0==[]);//true,0=='' => 0==0
console.log([]==false);//true, " ==false, 0 == 0

console.log('5'*'2'+'10'-1);//1009, 5*2 먼저, +10, 1010 - 1,=> 1009 
console.log('10'/2+'5'*2);//15, 10/2 먼저, 5후 5*2, 10, => 5+10 >15
console.log('3'-1+'2'-1);//21, 3-1 연산 후 '2'붙임> 22-1 