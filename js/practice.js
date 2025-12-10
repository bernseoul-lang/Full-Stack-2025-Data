/*
   파일명 : 23.ex.js

   [클래스 실습]
   1. 학생(Student) 클래스를 생성
   2. 학생은 이름, 나이, 취미(여러개), 국어점수, 영어점수, 수학점수의 데이터를 가짐
   3. 학생 객체를 3개 생성
   4. 아래와 같이 출력
*/

class Student {
    constructor(name, age, hobbies, kor, eng, math) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;     // 배열
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    // 총점 계산
    getTotal() {
        return this.kor + this.eng + this.math;
    }

    // 평균 계산
    getAvg() {
        return this.getTotal() / 3;
    }

    // 출력 포맷
    toString() {
        return `${this.name}, ${this.age}세, 취미:${this.hobbies.join(", ")} `
             + `국어:${this.kor}, 영어:${this.eng}, 수학:${this.math}, `
             + `총점:${this.getTotal()}, 평균:${this.getAvg()}`;
    }
}

// 학생 객체 3명 생성
const s1 = new Student("홍길동", 20, ["골프", "스키"], 100, 100, 100);
const s2 = new Student("강감찬", 30, ["독서", "낮잠"], 90, 90, 90);
const s3 = new Student("이순신", 40, ["게임", "바둑"], 80, 80, 80);

// 배열에 담기
const students = [s1, s2, s3];

console.log(`총 ${students.length}명의 학생 정보입니다!`);
students.forEach(student => {
    console.log(student.toString());
});
