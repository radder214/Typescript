/**
 * Q1.
 * object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
 * */
var specObj = {
    size: 123,
    position: [1, 2, 3]
};
var people1 = { name: 'kim', phone: 123, email: 'abc@naver.com' };
var people2 = {
    name: 'kim',
    adult: false,
    phone: 1234
};
