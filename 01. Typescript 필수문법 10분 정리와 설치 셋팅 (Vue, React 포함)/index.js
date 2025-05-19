// 1. 타입 지정
// 타입에 들어갈 수 있는 것들 : string, number, boolean, null, undefined, bigint, [], {} 등
// 1-1. 변수 타입 지정
var names = "kim";
names = "lee";
// names = 123 --> type error 발생
// 1-1. union type(다양한 타입이 들어올 수 있게)
var names2 = "park"; // names2 변수의 타입은 string 혹은 number
names2 = "lee";
names2 = 123;
// names2 = true --> type error 발생
// cf) let names2 :string | number | boolean => 이렇게 3개를 지정할 수도 있다.(그 이상도 가능)
// 1-2. 배열 타입 지정
var array = ["kim", "lee"];
array.push("park");
// array.push(123) --> type error 발생
// 1-3. 오브젝트 타입 지정
var obj = { name: "kim" };
obj.name = "park";
var names3;
names3 = "kim";
names3 = 777;
names3 = ["kim", "lee"];
// ============================================================================================================
// ============================================================================================================
// 3. 함수 타입 지정
function func1(x) {
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
function 함수명2(x) {
    if (typeof x === 'number') {
        return x * 2;
    }
}
// [number, boolean] 이런 걸 'tuple 타입' 이라고 한다.
// 무조건 첫 번째는 number, 두 번째는 boolean 이 와야 한다.
var john = [123, true];
var smith = {
    name: "smith",
    home: "seoul",
    // money : 10000 --> type error 발생
};
// ============================================================================================================
// ============================================================================================================
// 6. class 타입
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
