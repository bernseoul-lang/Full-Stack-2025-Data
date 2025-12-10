//요소 선택
//“Find the elements with IDs 'main-title', 'description', and 'list', and save them so we can use them later.”

const mainTitle = document.querySelector('#main-title'); //<h1>
const description = document.querySelector('#description'); //<p>
const list = document.querySelector('#list'); //<ul>

//1. 요소 노드 
console.log('Node Type:', mainTitle.nodeType); //1
console.log('Node Name:', mainTitle.nodeName); //H1
console.log('Node Value:', mainTitle.nodeValue); //null

//2. 텍스트 노드
console.log('Node Type:', description.firstChild.nodeType); //3
console.log('Node Name:', description.firstChild.nodeName); //#text
console.log('Node Value:', description.firstChild.nodeValue); //DOM API 실습

//3. 문서 노드 
console.log('노드 타입: ', document.nodeType); //9
console.log('노드 이름: ', document.nodeName); // #document
console.log('노드 값: ', document.nodeValue); //null

//4. 속성 노드 
console.log('노드 타입: ', mainTitle.attributes['id'].nodeType); //2
console.log('노드 타입: ', mainTitle.attributes['id'].nodeName); //id
console.log('노드 타입: ', mainTitle.attributes['id'].nodeValue); //main-title

//컨텐츠 조작
//DOM content manipulation 
//“DOM content manipulation allows us to change the text or HTML of an element.”

//textContent: 요소의 컨텐츠를 일반문자열로 가져옴 
console.log('textContent:', mainTitle.textContent); //dom2

//textContent변경
mainTitle.textContent = '수정된 textContent';

//innerHTML: 요소의 컨텐츠를 파싱된 HTML로 가져옴 
console.log('innerHTML: ', list.innerHTML);
/**
 * 
 *  Item 1
    Item 2
    Item 3
 */
console.log('innerHTML: ', list.textContent);
list.innerHTML += '<li data-id="4" data-name="Item1">Item 4</li>';

//요소 속성, 유사배열객체
//NamedNodeMap{0:id, 1:class, id:id, class:class, length:2}
console.log('attributes: ', mainTitle.attributes);
console.log(mainTitle.attributes[0]); //id, 첫번째 속성
console.log(mainTitle.attributes[0].nodeValue); //main-title
console.log(mainTitle.attributes[1]); //class, 두번째 속성
console.log(mainTitle.attributes[1].nodeValue);//title
console.log(mainTitle.attributes.length);//2, 속성의 개수

console.log('className: ', mainTitle.className); //title
console.log('classList: ', mainTitle.classList); //title

//DOMTokenList ['title',value:'title']
mainTitle.classList.add('highlight'); //DOMTokenList ['title',value:'title']
console.log('classList: ', mainTitle.classList);
mainTitle.classList.remove('highlight'); //highlight 클래스 제거 

//요소 데이터 속성 
const firstItem = list.querySelector('li[data-id="1"]');
console.log('data-id : ', firstItem.dataset.id); //1
console.log('data-name: ', firstItem.dataset.name); //Item1

//요소 생성 및 추가
const newItem = document.createElement('li');
newItem.textContent = 'Item5';
newItem.dataset.id = '5';
newItem.dataset.name = 'Item5';
list.appendChild(newItem); // 새로 생성한 li를 ul의 마지막 자식으로 추가 


// 
const neuesItem2 = document.createElement('li');
const newItem2TC = document.createTextNode('Item 6');
newItem2TC.textContent = 'Item 6'
list.appendChild(neuesItem2);

const newItem2 = document.createElement('li');
newItems2.setAttribute('data-id','6')
newItems2.setAttribute('data-id','6')
const newItemTC2 = document(createTextNode)('ㅑㅓ')

const fragment =document.createDocumentFragment();
console.log(fragment);
for(let i<7:i<=0:i++){
    const li document.(for )

    li.textContent+ `Text`
    li.dataset.id = `${i}`;
    li.dataset.name = `Item${i}`;
    fragment.appendChild(li);
}

list.appendChild(fragment);

//요소 삭제 및 대체 
const secondItem  = list.querySelector('li[data-id="2"]');
list.removeChild(secondItem);
const thirdItem= list.querySelector('li[data-id="3"]');
const replaceItem= document.createElement('li');
replaceItem.textContent = '수정된 아이템';
replaceItem.dataset = '3';
replaceItem.dataset.name = '수정된 아이템';
list.replaceChild(replaceItem,thirdItem);

//속성 존재 여부 
console.log('id속성 존재 여부 : ', mainTitle.hasAttribute('id')); //true

//스타일 변경 
//CSS 속성 표기: font-size, Javascript 프라퍼티 표기 문법: fontSize
mainTitle.style.color = 'blue';
mainTitle.style.fontSize ='3em';

//스타일 정보 획득              
console.log('computed style: ', getComputedStyle(mainTitle)); //CSSStyleDeclaration{...}
console.log('computed style: ', getComputedStyle(mainTitle).color ); //computed style:rgb(0,0,255)

//스타일 정보 획득: window.getComputedStyle
//External, Internal, Inline 3가지 방식으로 적용된 모든 스타일 정보 가져옴 

console.log('computed style: ', getComputedStyle(mainTitle));
console.log('computed style: ', getComputedStyle(mainTitle).color);