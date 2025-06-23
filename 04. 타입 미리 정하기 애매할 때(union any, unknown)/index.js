// // 1. union type(타입을 2개 이상 합친 새로운 타입)
// let member: (number | string) = 123;
// member = "park";
// let members: (number | string)[] = [1, 2, 3, "park"];
// // members:(number | string)[] 과 members:number | string[] 는 다르다.
//     // members:(number | string)[] --> members 배열 안에 number 혹은 string 값이 들어올 수 있다.
//     // members:number | string[]   --> members 변수에는 number 혹은 string 배열 타입 값이 할당될 수 있다.
//     // 그렇기에 (소괄호)가 있고 없고의 의미는 다르다.
// let members2: number | string[];
// members2 = 1;
// members2 = ["apple", "banana", "cherry"];
// type MyTypes = number | string;
// let objs: {a : MyTypes} = {a : 123};
// objs.a = "park";
// // 2. any type - 모든 타입 허용
// // type 관련 Error 발생 시 any type은 추적하기 어렵다.
// let master: any;
// master = 123;
// master = "park";
// master = null;
// master = undefined;
// master = true;
// master = [1, 2, 3];
// master = master - 1;    // any는 가능
// master = master[0];     // any는 가능
// // 3. unknown type - 모든 타입 허용, any 보다 안전
// let master2: unknown;
// master2 = 123;
// master2 = "park";
// master2 = null;
// master2 = undefined;
// master2 = true;
// master2 = [1, 2, 3];
// // typescript는 type에 엄격하기에 간단한 수학 연산도 반드시 type을 맞춰줘야 한다.
// // 근데 type이 any면 이러한 엄격함이 사라진다.
// master2 = master2 - 1;  // unknown은 불가능
// master2 = master2[0];   // unknown은 불가능
// // 4. unknown type 사용 시 주의사항
// // 1. 수학 연산 시 타입 체크 필요
// // 2. 인덱스 접근 시 타입 체크 필요
// // 3. 메서드 호출 시 타입 체크 필요
// // ======================================================================
// // 숙제 1
// let uses: string = "kim";
// let ages: (number | undefined) = undefined;
// ages = 20;
// ages = undefined;
// let marrieds: boolean = true;
// let arr: (string | number | undefined | boolean)[] = [uses, ages, marrieds];
// // 숙제 2
// let 학교: {
//     score : (number | boolean)[],
//     teacher : string,
//     friend : string | string[],
// } = {
//     score : [100, 97, 84],
//     teacher : 'Phil',
//     friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher];
