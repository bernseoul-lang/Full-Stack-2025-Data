// 정규표현식 실습

// 1. 문자열에서 모든 숫자를 찾아 배열로 반환
// 결과 : ['2025','1','15']

const str1 = '오늘은 2025년 1월 15일 입니다.';

const result1 = str1.match(/\d+/g);
console.log(result1); // ['2025','1','15']


// 2. 주어진 문자열에서 모든 공백을 제거
// 결과 : HelloWorld!
const str2 = "Hello   World!";
const result2 = str2.replace(/\s+/g, '');
console.log(result2); // "HelloWorld!"
 
// 3. 문자열에 'JavaScript'라는 단어가 포함되어 있는지 확인
// 결과 : true
const sentence = "I am learning JavaScript and it's fun!";
const result3 = /JavaScript/.test(sentence);
console.log(result3); // true

// 4. 주어진 문자열이 올바른 전화번호 형식인지 확인
// 결과 : true
const phone = "010-1234-5678";
const result4 = /^\d{3}-\d{4}-\d{4}$/.test(phone);
console.log(result4); // true


// 5. 문자열에서 모든 URL을 추출
// 결과 : ['https://google.com', 'http://example.com']
const text1 = "Visit https://google.com and http://example.com!";
const result5 = text1.match(/https?:\/\/[a-zA-Z0-9.-]+/g);
console.log(result5); // ['https://google.com', 'http://example.com']


// 6. 주어진 문자열에서 숫자와 알파벳만 추출
// 결과 : 'Hello123World456'
const str3 = "Hello123!@#World456";
const result6 = str3.replace(/[^A-Za-z0-9]/g, '');
console.log(result6); // 'Hello123World456'

// 7. 문자열에서 소수점 두 자리까지의 실수를 모두 추출하세요.
// 결과 : ['12.50', '100.99']
const text2 = "The prices are 12.50, 100.99, and 3.5 dollars.";
const result7 = text2.match(/\b\d+\.\d{2}\b/g);
const resulte = text2.match(/\b\d+\.\d{2}\b/g);
console.log(text2.match(/\d+\.\d{2}/g));// ['12.50', '100.99']
console.log(result7); // ['12.50', '100.99']

// 8. 숫자 뒤에 '원'이 오는 경우만 추출
// 결과 : ['1000', '3000']
const t1 = '1000원, 2000달러, 3000원, 400엔';
const result8 = t1.match(/\d+(?=원)/g);
const resultt= t1.match(/\d+(?=원)/g);
console.log(result8); // ['1000', '3000']
console.log(t1.match(/\d+(?=원)/g));// ['1000', '3000']


// 9. 한글 이름들만 추출하여 배열 출력 (한글이름은 2글자~4글자로 제한)
// 결과 : ['김철수', '이은', '최고길동']
const t2 = ['김철수', '이은', '박', '123홍길동', '최고길동'];
const result9 = t2.filter(name => /^[가-힣]{2,4}$/.test(name));
console.log(result9); // ['김철수', '이은', '최고길동']
console.log(t2.filter(ele => /^[가-힣]{2,4}$/.test(ele)));
 

// 10. 영문자와 숫자를 모두 포함하고 6글자 이상인 비밀번호들만 추출하여 배열 출력
// 결과 : ['abc123', 'abcDEF789']
// (?=.*[A-Za-z]) : 영문자가 1개 이상 있어야 함
// (?=.*\d) : 숫자가 1개 이상 있어야 함
const password = ['abc123', 'password', 'abcDEF789', '123456', 'abc!'];
const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const pwRegexx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const result10 = password.filter(pw => pwRegexx.test(pw));
const result11 = password.filter(pw => pwRegex.test(pw));
console.log(result10); // ['abc123', 'abcDEF789']
console.log(result11); // ['abc123', 'abcDEF789']
// console.log(password.filter(ele=>/*[A-Za-z]))(?=.*\d)[a-zA-Z0-9]{6,}$/.test(ele)));*/
    
    //실습
    //1.이메일 주소 패턴 
    //- @앞에는 영문자로 시작하고 숫자를 포함할 수 있고, 특수기호나 공백은 불가한 12글자 이내 붙는다. 
    //- 뒤에는 com, ch이나  ethz.ch 만 오로독
// ['12.50', '100.99']

const email1= 'abc123@abc.com';
const email2 = 'abc_@abc.com';
const email3 = 'abc123@abc.edu';

const emailRegex = /^[A-Za-z][A-Za-z0-9]{0,11}@(com|ch|ethz\.ch)$/;
console.log(emailRegex.test(email1)); // abc123@abc.com → false (왜? abc.com은 허용 도메인 아님)
console.log(emailRegex.test(email2)); // false (_ 사용 불가)
console.log(emailRegex.test(email3)); // false (edu는 허용 도메인 아님)


//2. 아이피 주소 패턴 
// -ex) 127.0.0.1
// - 0~255 증의 숫자. 0~255중의 숫자. 2~55 중의 숫자
const ip1 = '255.255.255.255';
const ip2 = '258.255.255.255'; 
const ip3= '255.355.255.255';
console.log(/^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/);
 // false

// (25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d);
const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;

console.log(ipRegex.test(ip1)); // true
console.log(ipRegex.test(ip2)); // false (258 → 0~255 범위 초과)
console.log(ipRegex.test(ip3)); // false (355 → 범위 초과)
 