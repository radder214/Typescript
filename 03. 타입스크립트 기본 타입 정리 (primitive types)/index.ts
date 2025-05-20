// 변수명: 타입
let myName: string = "kim";
let age: number = 20;
let married: boolean = false;
// null, undefined 도 타입 지정 가능
let money: null = null;
let think: undefined = undefined;
// array
let members_arr: string[] = ["kim", "lee", "park"];
let members_arr2: (string | number)[] = ["kim", "lee", "park", 10, 20, 30];
// object
// object 안에 들어갈 타입은 내가 만들 object와 똑같은 모습으로 지정하면 된다.
let members_obj: {member1: string, member2: string, member3: string} = {
    member1: "kim",
    member2: "lee",
    member3: "park"
}