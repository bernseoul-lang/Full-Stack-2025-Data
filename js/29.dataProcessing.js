//문자열 String 

const str = 'Hallo, Javascript!';
console.log(str.indexOf('Java')); //7, 문자열의 시작인덱스
console.log(str.indexOf('Python')); //-1, 문자열이 없으면 
console.log(str.indexOf('a',10)); //10, 10번 인덱스부터 a가 나온 첫 인덱스 

console.log(str.includes('Script'));//false, 문자열 포함 여부 
console.log(str.search('Java'));//7, 문자열의 시작인덱스
console.log(str.search('Python'));//-1, 문자열이 없으면
console.log(str.search(/Java/));//7, search는 정기표현식이 가능
console.log(str.startsWith('Hallo')); //true, 문자열로 시작하는지 여부
console.log(str.endsWith('Script!')); //false, 문자열로 끝나는지 여부
console.log(str.charAt(4)); //o, 인덱스4에 있는 문자
console.log(str.substring(0,5));//0,1,2,3,4, Hallo, 인덱스 0부터 5전까지 문자열
console.log(str.substring(8)); //avascript!, 인덱스 8 부터 끝까지 문자열 

// const str = 'Hello, Javascript!'
console.log(str.slice(-10,-1)); //avascript!, 인덱스 -10부터 -1까지 (-인덱스 뒤에서부터 검색 )

console.log(str.toUpperCase());//HELLO, JAVASCRIPT!,대문자로 변환
console.log(str.toLowerCase());//hello, javascript!, 소문자로 변환
console.log('    Trim this!   '.trim()); //Trim this!, 문자열 앞/뒤 공백 제거 
console.log('Repeat!'.repeat(3)); //Repeat!Repeat!Repeat! 문자열 반복
console.log(str.replace('Javascript','World')); // Hello, World! 문자열 대체 
console.log(str.replace(/Javascript/,'World')); // Hello, World! 문자열 대체 
console.log(str.split(', '));//['Hello','Javascript!'] //문자열 기준으로 분리해서 배열로 반환 
console.log('010-7776-4091'.split('-'));//[ '010', '7776', '4091' ]
console.log('1 2 3'.split('')); //['1','2','3'], 공백 기준으로 분리 

//숫자 NUmber 
console.log
console.log(Number.isFinite(123));//true, 유한수 여부
console.log(Number.isInteger(12.34));//false, 정수 여부
console.log(Number.isNaN(NaN));//true
console.log(NaN===NaN);//false
console.log(Object.is(NaN,NaN));//true
console.log(+0===-0);//true
console.log(Object.is(+0,-0));//false

//수학  Math
console.log(Math.abs(-10));//10, 절대값
console.log(Math.round(4.5)); //5, 반올림
console.log(Math.ceil(4.1)); //5, 주어진 수보다 크지만 가장 작은 정수, 천장값(올림값)
console.log(Math.floor(4.1)); //4, 주어진 수보다 작지만 가장 큰 정수, 바닥값(내림값)
console.log(Math.PI); //PI 
console.log(Math.E); //E
console.log(Math.sqrt(16)); //4, 루트
console.log(Math.random()); //0.0보다 크거나 같고 1.0보다 크거나 작은 임의의 실수
console.log(Math.pow(2,3)); //8,2의 3승(제곱근)
console.log(Math.max(1,2,4,5,3));//5, 최대값
console.log(Math.min(5,1,3,4,2));//1, 최소값

//실습: 배열의 최대값 최소값 출력 
const numarr = [3,1,5,10,8,6,4];
console.log(Math.max(3,1,5,10,8,6,4));
console.log(Math.min(3,1,5,10,8,6,4));
console.log(Math.max(...numarr));
console.log(Math.min(...numarr));


//날짜 Date 시간
console.log(Date.now());//1765243656068, 1970년1월1일 0시0분0초부터 현재까지 밀리초마다 1씩 센값
console.log(Date.parse('2025-12-9'));//1765206000000, 주어진 문자열에 해당하는 날짜/시간에 대한 unix time 값

const date = new Date(); //현재 날짜/시간 정보를 가진 Date 객체 
console.log(date.getFullYear()); //연도 네자리 
console.log(date.getMonth()); // 월(0~11)
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());//분(0~59)
console.log(date.getSeconds());//초(0~59)
console.log(date.getMilliseconds());//밀리초 (0~999)
console.log(date.getTime());//1765244145291, 현재 시점의 unix값
console.log(date.getDay()); //2 요일, (0~6, 0이 일요일)
console.log(date.getTimezoneOffset()); //-540, 시간 원점에서 시차를 분으로 반환 
console.log(date.toLocaleDateString()); //2025. 12. 9.
console.log(date.toLocaleTimeString()); //오전 10:35:45
console.log(date.toLocaleString());//2025. 12. 9. 오전 10:35:45

//실습 현재시점의 날짜/시간을 아래 형식으로 출력 
//출력 형식: 2025년 12월 9일 오전 10시34분 33초

const date1 = new Date();

// 1) 날짜 부분
const year = date.getFullYear();
const month = date.getMonth() + 1;  // 0~11 → 1~12
const day = date.getDate();

// 2) 시간 부분
let hour = date.getHours();         // 0~23
const minute = date.getMinutes();
const second = date.getSeconds();

// 3) 오전/오후 구하기
const ampm = hour >= 12 ? "오후" : "오전";

// 4) 12시간 형식으로 변환
hour = hour % 12;
hour = hour === 0 ? 12 : hour;   // 0시는 12시로 처리

// 5) 최종 출력
//풀이1: 구조분해할당 사용
// const [yearStr,monthStr,dateStr]= date.toLocaleDateString().split('.');
// const[timeStr,minuteStr,secondStr] = date.toLocaleDateString().split(':');

// console.log(`${yearStr}년 ${monthStr}월 ${dateStr}일 ${timeStr}시 ${minuteStr}분 ${secondStr}초`);

// // 풀이 2: 정규표현식 사용 
// const date2 = new Date();

// //  
// const str2 = date.toLocaleString('ko-KR'); 

// //  
// const result = str2.replace(
//   /(\d+)\.\s*(\d+)\.\s*(\d+)\.\s*(오전|오후)\s*(\d+):(\d+):(\d+)/, '$1년 $2월 $3일 $4 $5시$6분 $7초'
// );

// //  
// console.log(result);


const nowStr = date.toLocaleString();
const [yearStr, monthStr,dateStr,timeStr,minuteStr,secondStr]= nowStr.match(/\d+/g);
console.log(`${yearStr}년 ${monthStr}월 ${dateStr}일 \${nowStr.includes('오전)?'오전':'오후'} ${timeStr}시 ${minuteStr}분 ${secondStr}초`);

//데이텇