// 1. 타입 지정
// 타입에 들어갈 수 있는 것들 : string, number, boolean, null, undefined, bigint, [], {} 등

// 1-1. 변수 타입 지정
let names :string = "kim";
names = "lee";
// names = 123 --> type error 발생

// 1-1. union type(다양한 타입이 들어올 수 있게)
let names2 :string | number = "park"; // names2 변수의 타입은 string 혹은 number
names2 = "lee";
names2 = 123;
// names2 = true --> type error 발생
// cf) let names2 :string | number | boolean => 이렇게 3개를 지정할 수도 있다.(그 이상도 가능)

// 1-2. 배열 타입 지정
let array :string[] = ["kim", "lee"];
array.push("park");
// array.push(123) --> type error 발생

// 1-3. 오브젝트 타입 지정
let obj : {name : string} = {name : "kim"};
obj.name = "park";
// obj.name = 123; --> type error 발생
// cf) let obj : {name? : string} => name 속성 값이 있을 수도 있고 없을 수도 있다.(옵셔널이다.)
// ============================================================================================================
// ============================================================================================================
// 2. type alias : 타입을 변수에 담아서 쓸 수 있다.
type MyType = string | number | string[]; // 대문자로 시작해 일반 변수와 구분
let names3 : MyType;
names3 = "kim";
names3 = 777;
names3 = ["kim", "lee"];
// ============================================================================================================
// ============================================================================================================
// 3. 함수 타입 지정
function func1(x :number) :number { // parameter type, return type 지정
    return x * 2;
}

func1(123);
// func1('123'); --> type error 발생

// 에러
// 타입스크립트는 지금 변수의 타입이 확실하지 않으면 마음대로 연산할 수 없다.
// 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용해야 허락해준다.
// function 함수명1(x :number | string) {
//     return x * 2
// }

// 가능
function 함수명2(x :number | string) {
    if (typeof x === 'number'){
      return x * 2
    } 
}
// ============================================================================================================
// ============================================================================================================
// 4. array에 쓸 수 있는 tuple 타입(array에 순서를 포함해서 어떤 자료형이 들어올지 정확히 지정)
type Member = [number, boolean];
// [number, boolean] 이런 걸 'tuple 타입' 이라고 한다.
// 무조건 첫 번째는 number, 두 번째는 boolean 이 와야 한다.
let john :Member = [123, true];
// let park :Member = ["123", true]; --> type error 발생
// ============================================================================================================
// ============================================================================================================
// 5. object에 타입 지정해야할 속성이 너무 많을 때
type Member2 = {
    [key :string] : string  // 글자로 된 모든 object 속성의 타입은 ':string' 이여야 한다.
                            // [key :string] --> 모든 object 속성
                            // 그냥 전부 싸잡아서 타입 지정하는 것이다.
};
let smith :Member2 = {
    name : "smith",
    home : "seoul"
    // money : 10000 --> type error 발생
}
// ============================================================================================================
// ============================================================================================================
// 6. class 타입
class User {
    name :string;
    constructor(name :string){
        this.name = name;
    }
}