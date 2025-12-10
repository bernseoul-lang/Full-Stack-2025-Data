//배열 실습1: 고차함수 사용 금지


//1. 배열에서 귤이 존재하면 '귤이 있습니다'. 존재않으면 '귤이 존재하지 않습니다' 출력
let fruits =['사과','배','귤','감','오렌지'];
console.log(fruits.includes('귤')? '귤이 있습니다' : '귤이 존재하지 않습니다');

//2.배열에서 '노랑'을 제거한 배열을 출력
let colors = ['빨강','파랑','노랑','초록'];
const index = colors.indexOf('노랑');
colors.splice(index,1);
console.log(colors);
// console.log(fruits.delete);

//3. reverse 메소드를 사용하지 말고 배열의 모든 요소의 순서를 뒤집어서 출력 
let nums = [1,2,3,4,5];
 
//const rnums = 
 let arr = [];

   for(let i=nums.length-1; i >= 0; i--) {
    arr.push(nums[i]);
}
console.log(arr);

//4. 배열에서 최대값을 구해서 출력
let arr1 = [7,3,9,12,5];
let big = arr1[0];
for (let ele of arr1){
    (big = big < ele ? ele : big);
}
console.log(big);

// for(let i=0;i<arr1.length;i++){
//     if(max<arr[i]) max = arr1[i];
// }
// console.log(max);

//5. 배열의 인덱스 2에 'C'를 삽입한 후 배열을 출력
let alphabet = ['A','B','D','E'];
alphabet.splice(2,0,'C');
console.log(alphabet);

//6. 중복된 요소가 한번만 나오는 배열을 출력
let origin = [1,3,3,5,1,7,9,9];
let unique=[]; //유일한 값들만 저장할 배열 
for (let i = 0; i<origin.length;i++){ 
    if(!unique.includes(origin[i]))unique.push(origin[i]);
}
// for (let ele of origin){
//     if(!unique.includes(ele)){ //배열의 인덱스 순회
//         unique.push(ele)
//     }
// }
console.log(unique);

//7.3행3열 배열을 만들고 1부터 9까지 채워서 출력

let matrix = [];
let num = 1;

for (let i = 0; i < 3; i++) {
    let row = [];          // 한 행(row)을 만든다
    for (let j = 0; j < 3; j++) {
        row.push(num);     // 숫자 채우기
        num++;
    }
    matrix.push(row);      // 완성된 행을 matrix에 넣기
}

console.log(matrix);

let mantra=[];
for (let i=0;i<3;i++){
    mantra[i]=[];
    for(let j=0;j<3;j++){
        mantra[i][j]=i*3+j+1;
    }
}
console.log(mantra);

//8. 배열에서 인덱스 1과 인덱스 3의 요소를 변경한 배열을 출력
//
let arr2=['가','나','다','라','마'];
 
// let temp = arr2[1];   // '나'
// arr2[1] = arr2[3];     // 인덱스 1 ← '라'
// arr2[3] = temp;        // 인덱스 3 ← '나'

// console.log(arr2);
// 3 // console.log(['가',arr2[3],'나',arr2[1], '마'])

let temp = arr2[1];
arr2[1] =arr2[3];
arr[2]= temp;
console.log(arr2);

//9. 배열에서 짝수만 모은 배열을 출력 
//Print an array that contains only the even numbers from the original array.
let numbers = [10,13,22,37,40,55];
 
let blackp = [];

// for (let num of numbers) {
//   if (num % 2 === 0) blackp.push(num);
// }

// console.log(blackp);

for(let i=0;i<numbers.length;i++)
{
    if(!(numbers[i]%2))blackp.push(numbers[i]);
}
console.log(blackp);

//10. 배열을 오른쪽으로 한 칸 이동 [1,2,3,4] =>[4,1,2,3]
 

let arr3 = [1,2,3,4];

let spagetti = arr3.pop();   // 마지막 요소 제거 → 4
arr3.unshift(spagetti);       // 맨 앞에 넣기

console.log(arr3);

//10-1. 배열을 다시 왼쪽으로 한칸 이동. 
//강사님 코드
// arr3.push(arr3.shift());
// console.log(arr3);

let arr4 = [4, 1, 2, 3];   // 현재 상태: 오른쪽 이동된 배열

let temp1 = arr4.shift();   // 맨 앞 요소 제거 → 4
arr4.push(temp);           // 맨 뒤에 넣기

console.log(arr4);


//10-2. 배열을 원하는 칸 수만큼 이동시키는 함수 
let arr_4 = [1,2,3,4,5,6,7,8,9];
const shiftArr4 = function (arr,direction,count){
    if (direction == 'right'){
    for(let i=0;i<count;i++)arr.unshift(arr.pop());
    } else {
        for(let i=0;i<count;i++)arr.push(arr.shift());

    }
    //pop.shift 
    return arr;
}

// shiftArr4(arr_4,3); //[7,8,9,1,2,3,4,5,6]

console.log(shiftArr4(arr_4,'right',3));
console.log(shiftArr4(arr_4,'left',3));
