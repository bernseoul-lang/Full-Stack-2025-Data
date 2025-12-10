//lotto 구현 
/**
 * [등수]
 * 1등: 컴퓨터 6개 번호와 사용자 6개 일치
 * 2등: 컴퓨터 5개 번호와 사용자 5개 일치, 보너스번호 맞으면
 * 3등: 컴퓨터 5개 번호와 사용자 5개 일치
 * 4등: 컴퓨터 4개 번호와 사용자 4개 일치
 * 5등: 컴퓨터 3개 번호와 사용자 3개 일치
 * 
 * [기능]
 * - 사용자의 로또번호 6개 생성
 * - 컴퓨터의 로또번호 7개 생성 (6개 + 보너스번호 1개)
 * - 추첨은 100번 수행 
 * - 등수별로 당첨횟수를 출력
 * - 출력 형식 (횟수마다 출력)
 * *****************************************************
 *  컴퓨터의 로또 번호: 32 44 16 21 5 8 보너스 9
 *  사용자의 로또 번호: 42 45 18 19 7 4
 *  1등: X번, 2등:X번, 3등: X번, 4등: X번, 5등: X번, 꽝: X번
 * *****************************************************
 * 
 */

//로또 번호에서 1-45사이에서 count개 뽑기 (중복 없음)
function generateLottoNumbers(count){
    const numbers = new Set();
    while (numbers.size < count){
        const n = Math.floor(Math.random() * 45) +1;
        numbers.add(n)
    }
    return [...numbers].sort((a,b)=>a-b);
}
function countMatches(arr1,arr2){
    const set2 = new Set(arr2);
    let cnt = 0;
    for (const n of arr1){
        if (set2.has(n)) cnt++;
    }
    return cnt++;
}

function getRank(usernums, cpnums, bonus){
    const matchCount = countMatches(usernums, cpnums);
    const bonusMatch = usernums.includes(bonus);
    if (matchCount === 6) return 1;
    if (matchCount === 5 && bonusMatch) return 2;
    if(matchCount === 5) return 3;
    if(matchCount === 4) return 4;
    if(matchCount === 3) return 5;
    return 0;
    }

    const usernums = generateLottoNumbers(6);
    const counts = {
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        0:0
    }; 
    for(let round =1; round<=100;round++){
        const compMain = generateLottoNumbers(6);
        let bonus; 
        while(true){
            bonus = Math.floor(Math.random()*45)+1;
            if (!compMain.includes(bonus)) break;
        }
        const rank = getRank(usernums,compMain, bonus);
        counts[rank]++;
        console.log('*********************************************************');
        console.log(`추첨회수: [${round}]`);
        console.log(
            "컴퓨터의 로또 번호: ",
            compMain.join(" "),
            "보너스",   
            bonus
        );
        console.log("사용자의 로또 번호: ", usernums.join("  "));
        console.log(`1등:${counts[1]}번,`+`2등:${counts[1]}번,`+`3등:${counts[2]}번,`+`4등:${counts[3]}번,`+`5등:${counts[4]}번,`+`6등:${counts[5]}번,`+`꽝:${counts[0]}`);
          console.log("*****************************************************\n");

    }