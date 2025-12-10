//문서에서 testBtn이라는 아이디를 가진 요소에 이벤트리스너를 추가한다. 
//이벤트리스너:객체에 발생하는 이벤트를 감지해서 이벤트콜백(이벤트처리함수)을 호출
//아이디가 testBtn 인 요소를 클릭하면 뒤의 콜백함수를 수행

document.getElementById('testBtn').addEventListener('Click',()=>{

    const parent = document.getElementById('parent'); //id가 parent인 요소
    console.log('부모 노드:'+parent);
    console.log(typeof parent); //object
    console.log(parent instanceof Object); //true
    console.log(parent instanceof EventTarget); //true
    console.log(parent instanceof Node); //true
    console.log(parent instanceof EventTarget); //true
    console.log(parent instanceof HTMLElement); //true
    console.log(parent instanceof HTMLDivElement); //true
    console.log(parent instanceof HTMLParagraphElement); //false
 

//Object>EventTarget>Node> EventTarget > HTMLElement > HTMLDivElement > HTMLParagraphElement

const childNodes = parent.childNodes;
console.log(childNodes); //NodeList(7) [text, p, text, p, text, p,text]

const child = parent.child;
console.log(child);

const children = parent.children;
console.log(children);

console.log('첫번째 자식: ', parent.firstChild);//#text
console.log('마지막번째 자식:',parent.lastChild); //#text

console.log('첫번째 요소 자식:', parent.firstElementChild); //p
console.log('마지막번째 요소 자식',parent.lastElementChild); //p

const firstElementChild = parent.firstElementChild;
console.log('첫번째 요소 자식의 다음 형제 노드: ', firstElementChild.nextSibling); //#text
console.log('첫번째 요소 자식의 다음 형제 노드: ', firstElementChild.nextElementSibling); //두번째 p

const lastElementChild = parent.firstElementChild;
console.log('마지막 요소 자식의 다음 형제 노드: ', firstElementChild.previousSibling); //#text
console.log('마지막 요소 자식의 다음 형제 노드: ', firstElementChild.previousElementSibling); //두번째 p

const byTagName = document.getElementsByTagName('P'); //HTMLCollection, 태그명이 P인 요소들
console.log(byTagName); //HTML Collection (3)

// for(let )

// const byClassName = document.getElementsByClassName('child');
console.log(byClassName);

const querySingle = document.querySelector('#parent.child');
console.log(querySingle);//첫번째 p 

});

for(let node of queryAll){
    console.log(node); //p p p
}

//실습 1. id가 parent 요소의 세번째 자식 요소 탐색 
const parent = document.getElementById("parent");
    const thirdChild = parent.children[2]; //인덱스0,1,2-> 세번째 
    console.log(thirdChild);
    console.log('');
// <p class="child">세번째 문장</p>

//실습 2. class가 child 인 요소 중 두번째 요소 탐색
const childList = document.getElementsByClassName('child');
    const secondChild = childList[1]; //0:첫번째; 1:두번째
console.log(secondChild); //<p class="child">두번째 문장</p>


//실습 3. class가 child인 요소 중 세번째 요소의 형인 요소 탐색
const thirdChild2 = childList[2]; // 세번 째 Child
const olderSibling = thirdChild2.previousElementSibling; //형(바로앞 형제)

console.log(olderSibling); //<p class= "child"> 두번째 문장</p>