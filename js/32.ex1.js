/**
 * DOM 실습
 * 
 * 아래 아이템들을 가진 리스트를 DOM를 활용해서 HTML에 생성
 * 사과, 딸기, 포도, 복숭아 
 * 
 */
// const mainTitle = document.querySelector('#main-title'); //<h1>
// const description = document.querySelector('#description'); //<p>
// const list = document.querySelector('#list'); //<ul>

 

//풀이 1: innerHTML사용 

//풀이 2: createElement 사용 

// 1. 과일 이름 배열로 준비
const fruits = ['사과', '딸기', '포도', '복숭아'];

// 2. <ul> 요소 생성
const ul = document.createElement('ul');

// 3. 과일마다 <li> 만들어서 <ul>에 추가
for (const fruit of fruits) {
  const li = document.createElement('li');   // <li> 생성
  li.textContent = fruit;                    // 내용 넣기
  ul.appendChild(li);                        // <ul>에 붙이기
}

// 4. 완성된 <ul>을 body에 붙이기
document.body.appendChild(ul);


