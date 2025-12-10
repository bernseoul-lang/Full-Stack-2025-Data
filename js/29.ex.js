//데이터 처리 실습

 

//1. 문자열에서 Java라는 단어가 몇 번 나오는 지 출력 *정규식 사용 금지 
 const text = 'Java is fun, Javascript is powerful. I love Java!';
 const keyword = 'Java';
 const count = text.split(keyword).length-1;

 console.log(count);
 

// 2. 문자열에서 bad와 ugly를 *표 처리해서 출력 (정규표현식 사용 금지)
const text2 = 'This movie is bad and ugly!';

let result = text2.replace('bad','***');
result = result.replace('ugly','****');

console.log(result);

// 3. 문자열에서 a의 개수를 출력
const text3 = 'Javascript is a fantastic language!';
let count1 = 0;

for (const ch of text3){
    if(ch === 'a')
        count1++;
    }
    console.log(count1);

    console.log(text3.split('a').length-1);

// 4. 문자열의 첫글자를 대문자로 변환하여 출력
const text4 = 'we are the world!';
const result4 = text4.charAt(0).toUpperCase()+text4.substring(1);

console.log(result4);


// 5. 문자열에서 도메인(www.google.com)만 추출하여 출력 (정규표현식 사용 금지)
const text5 = 'https://www.google.com/search?q=javascript';
const domain = text5.split('://')[1].split('/')[0];
console.log(domain);

console.log(text5.split('/')[2]);

// 6. 소문자 6개로 구성된 랜덤 비밀번호 생성해 출력
let pw ='';
for (let i = 0; i<6; i++){
    //a~ z까지 랜덤비번 생성됨 
    const code = Math.floor(Math.random()*26)+97;
    pw += String.fromCharCode(code);
}
console.log(pw);


// 7. 20이상 30이하의 랜덤 정수 출력
const num = Math.floor(Math.random()*(30-20+1))+20;
console.log(num);


// 8. 배열 평균값 출력
const arr1 = [10, 25, 39, 40, 55];
let sum = 0;
for (const n of arr1){
    sum += n;
}

console.log(sum/arr1.length);

console.log(arr1.reduce((acc,curr)=> acc+curr,0)/arr1.length);

// 9. 아래 두 날짜의 차이를 일수 계산하여 출력
const today = new Date();
const future = new Date('2026-12-25');
const diffMs = future.getTime() - today.getTime();
const diffDays = Math.floor(diffMs/(1000*60*60*24));
console.log(diffDays);


// 10. 2025년 12월의 첫째 날과 마지막 날 출력

const first = new Date(2025,11,1);
//month 는 0~11, ->11은 12월 의 첫째날. 

const last = new Date(2025,12,0);
//다음 달 (2026년 1월의 0일)-> 2025년 12월의 마지막 날. 

console.log(first.toLocaleDateString());
console.log(last.toLocaleDateString());





















