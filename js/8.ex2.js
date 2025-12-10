//별찍기

/*직각 삼각형
*
**
***
****
*****
*/

// for (let i=0;i<5;i++){
//     for (let j=0;j<i+1;j++){
//         process.stdout.write('*')
//     }
//     console.log();
// }

// /*2. 역직각 삼각형
// *****
// ****
// ***
// **
// *
// i = o, j = 0, 1,2,3,4
// i=1, j=0,1,2,3
// i=2,j=0,1,2
// i=3,j=0,1
// i=4,j=0
// */
// for(let i=5;i>=1;i--){
//     for(let j=1;j<=i;j++){
//         process.stdout.write('*')
//     }
//     console.log();
// }

// for (let i=0;i<5;i++){ // 별의수
//     for (let j=0;j<5-i;j++){ //줄의수
//         process.stdout.write('*')
//     }
//     console.log();
// }

/*3. 역직각 우삼감형 
*****
0****
00***
000**
0000*
i =0, 0 + 5
i =1, 1 + 4
i=2, 2+3
i=3, 3+2
i=4, 4+1
i:줄의수, j: 별의수, j:0의수 
i=0 j=0,1,2,3,4 k=
i=1 j=0,1,2,3 k=0
i=2 j=0,1,2   k=0,1
i=3 j=0,1   k=0,1,2
i=4 j=0,    k=0,1,2,3
*/

// for(let i=0;i<5;i++){ //줄의 수 
//     for(let k =0;k<i;k++){
//         process.stdout.write('0')
//     }
//     for(let s=0;s<5-i;s++){ //별의 수 
//         process.stdout.write('*')
//     }
//     console.log();
// }

/*4. 이등변삼각형 
0000*
000***
00*****
0*******
*********

줄번호 0개수 *개수 결과
0*4 * = 1
1 3 3 000
2 2 5
3 1 7 
4 0 9


*/
//  
/*역이동변삼각형
*********
0*******
00*****
000***
0000*

0의 개수: i
별의 개수: (2(n-1-i)+1)* 
짝수 줄어 들도록 계산됨.

i 0개수 *개수 결과
0 0 9 *********
1 1 7  *******
2 2 5   *****
3 3 3    ***
4 4 1     *

2(n-1-i)+1
줄이 내려갈 수록 별을 2개씩 빼라 

줄 번호에 따라 별을 (9,7,5,3,1)가 나오게 하는 역할
*/

// const n=5;
// for(let i=0;i<n;i++){ //줄의 수 
//     for(let z =0;z<i;z++){
//         process.stdout.write('0')
//     }
//     for(let s=0;s<2*(n-1-i)+1;s++){ //별의 수 
//         process.stdout.write('*')
//     }
//     console.log();
// }

/*6. 9by9 box
*********
*0000000*
*0000000*
*0000000*
*0000000*
*0000000*
*0000000*
*0000000*
*********

i가 행, j가 열
첫 행과 마지막 행에서 i는 0,8 => 8로 나눈 나머지가 0
첫 열과 마지막 열에서 j는 0,8=>8로 나눈 나머지가 0
*/
 
// const rows =10;
// const cols =10;

// for(let i=0;i<rows;i++){ //줄의 수 
//     if(  i===0 || i === rows-1){
//        for(let j=0;j<cols;j++){
//         process.stdout.write("*")
//        }
//     }
//     else{
// //가운데 줄들 * + 0...0+ * 
//         process.stdout.write("*")
//         for(let j = 0;i<cols-2;j++)
//             process.stdout.write("0");
//     }
//     process.stdout.write("*");
// }
// process.stdout.write("\n");
 

for(let i=0; i<9;i++){
    for(let j =0;j<9;j++){
        if(i%8==0||j%8==0)process.stdout.write("*");
        else process.stdout.write('0');
    }
    console.log();
}
console.log();

/* 7.9by9 X
*ooooooo*
oxoooooxo
ooxoooxoo
oooxooxoo
ooooxoooo
oooxoxooo
ooxoooxoo
oxoooooxo
xooooooox

*/
// const size = 9;
// for(let i=0;i<size;i++){
 
// for(let j =0;j<size;j++){
//     if(i===j&&i===0){
//         process.stdout.write("*");
//     }
//     else if(i===j||i+j===size-1){
//         process.stdout.write("x")
//     }
//     else{
//         process.stdout.write("O")
//     }
// }
// process.stdout.write("\n");
// }

//답안 확인 필요 
// for (let i=0;i<9;i++){
//     for(let j=0;j<9;j++){
//         if()
//     }
// }


/* 8.9by9 box X
*********
**00000**
*0*000*0*
*00*0*00*
*000*000*
*00*0*00*
*0*000*0*
**00000**
*********

*/
for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        if(i%8==0|| j%8==0||i==j|| 8-j==i){
            process.stdout.write("*");
        }
        else{
            process.stdout.write("0");
        }
    } 
    console.log();
}

                   
// 9. 9by9 diamond
// 0000*0000
// 000***000
// 00*****00
// 0*******0
// *********
// 0*******0
// 00*****00
// 000***000
// 0000*0000

const size=9;
const mid=Math.floor(size/2);

for(let i =0; i<size; i++){
    //middle
    const dist = Math.abs(mid-i);
    // const zeros = dist;
    // const stars = size-2*dist;
 

    //위쪽(0-4)
//     if(i<=mid){
//         dist = mid - i;
//     }
//     //아래쪽(5-8)
//     else{
//         dist=mid-i;
//     }
// }

//left 0s
for(let j=0;j<dist;j++){
    process.stdout.write("0");
}

//middle stars
for(let j=0;j<size-dist*2;j++){
    process.stdout.write("*");
}

//right 0s
for(let j=0;j<dist;j++){
    process.stdout.write("0");
}

console.log();}

// 10. 9by9 butterfly
// 000000000
// *0000000*
// **00000**
// ***000***
// ****0****
// ***000***
// **00000**
// *0000000*
// 000000000
// 풀어
const line2 = 9
const middle2 = (line2+1)/2;
let starCnt2, zeroCnt2 =0;
for(let i= 1;i<=line2;i++){
    starCnt2 = i<=middle2?i-1: line2-1;
    zeroCnt2 = i<=middle2 ? (middle2-i) : (i-middle2)*2+1;
}
    for(let j=0;j<starCnt2;j++)process.stdout.write("*");
    for(let j=0;j<zeroCnt2;j++)process.stdout.write("0");
    for(let j=0;j<starCnt2;j++)process.stdout.write("*");
    console.log();


// let size2=9;
// let mid2 =(size-1)/2;

// for(let i =0;i<size;i++){
//     let stars;
//     if(i<=mid){
//         stars = i;
//     } else{
//         stars = size -1 -i;
//     }
//     let zeros = size - stars *2;

//     for(let j=0;j<stars;j++)process.stdout.write("*");
//     for(let j=0;j<stars;j++)process.stdout.write("0");
//     for(let j=0;j<stars;j++)process.stdout.write("*");
// }
    //
//     const stars=(i<=mid)? i : size-1-i;
//     const zeros = size - stars * 2;
//     }
//     //왼쪽 별들
// for(let j=0;j<stars;j++){
//     process.stdout.write("*");
// }
// for(let j=0;j<zeros;j++){
//     process.stdout.write("0");
// }

//right starts
// for (let j=0;j<stars;j++){
//     process.stdout.write("*");
// }
console.log();

//9번 ##### 부분 작성해 보기;
const line = 19;
const middle = (line+1)/2;
let zeroCnt, starCnt=0;
for(let i=1; i <line+1;i++){
    zeroCnt = i<= middle ? middle-i : i-middle;
    starCnt = i<= middle ? 2*i-1 : line-(i-middle)*2;
    for(let j = 0; j <zeroCnt;j++)process.stdout.write('0');
    for(let j = 0; j <starCnt;j++)process.stdout.write('*');
    for(let j = 0; j <zeroCnt;j++)process.stdout.write('0');
    console.log();
}

//pibonacci  피보나치 풀이 
const LIMIT =1000;
for(let i=1,stop=false;!stop;i++){
    let a=1,b=1;
    let line="";
    for(let j=1;j<=i;j++){
        if(j==1){
            line+='1';
        }
        else{
            let next=a+b;
            if(next>1000){
                stop = true;
                break;
            }
            line+= next +'';
            a = b;
            b=next;
        }
    }
    if(!stop)console.log(line);
}