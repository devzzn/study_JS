/*
    객체 :
    자바스크립트는 객체 기반의 스크립트 언어 이며 자바스크립트를 이루고 있는 거의 모든것이 객체이다.
    원시 타입인 Primitives을 제외한 나머지 값들은 모두 객체이다.
    
    자바스크립트의 객체는 키와 값으로 구성된 프로퍼티들의 집합이다. 
    프로퍼티의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용할 수 있다.
    함수는 일급 객체이므로 값으로 취급할 수 있다. 
    프로퍼티 값으로 함수를 사용할 수도 있으며 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.

    자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 프로토타입이라고 불리는 객체의 프로퍼티와 메소드를 상속 받을 수 있다.

    프로퍼티 : 
    프로퍼티는 프로퍼티 키와 프로퍼티 값으로 구성된다.
    프로퍼티는 프로퍼티 키로 유일하게 식별할 수 있다.
    즉, 프로퍼티 키는 프로퍼티를 식별하기 위한 식별자다.

    메소드 : 
    객체에 제한되어 있는 함수를 의미한다.
*/
var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10, // 프로퍼티 키는 문자열
    function: 1 // OK. 하지만 예약어는 사용하지 말아야 한다.
    // first-name: 'Ung-mo', 오류발생 '-' 연산자 
    // [first-name]: 'Ung-mo', 표현식을 사용할 경우 but 에러발생
  };
  
// 객체의 프로퍼티 접근 하는 방법. 마침표 표기법, 대괄호 표기법
//console.log(person.first-name);    // NaN: undefined-undefined
//console.log(person[first-name]);   // ReferenceError: first is not defined
console.log(person['first-name']); // 'Ung-mo'

console.log(person.gender);    // 'male'
//console.log(person[gender]);   // ReferenceError: gender is not defined
console.log(person['gender']); // 'male'

console.log(person['1']); // 10
console.log(person[1]);   // 10 : person[1] -> person['1']
// console.log(person.1);    // SyntaxError

// 프로퍼티 값 갱신
person['first-name'] = 'Kim';
console.log(person['first-name'] ); // 'Kim'

// 동적 생성
person.age = 20;
console.log(person.age); // 20

// 프로퍼티 삭제
delete person.gender;
console.log(person.gender); // undefined