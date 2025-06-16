// Q1.
// 허전하니까 아래 변수 4개에 타입빨리 집어넣어봅시다.
// (조건) age 변수엔 undefined 말고 숫자도 들어올 수 있습니다.
// let user = 'kim';
// let age = undefined;
// let married = false; 
// let 철수 = [user, age, married];
let user: string = 'kim';
let age: (number | undefined) = undefined;
let married: boolean = false; 
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// Q2. 학교라는 변수에 타입 지정
// let 학교 = {
//     score : [100, 97, 84],
//     teacher : 'Phil',
//     friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]
let 학교: {
    score: (number | boolean)[] // boolean[] | number[] --> 이렇게 해도 됨
    teacher: string,
    friend: string | string[]
} = {
    score  : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher];