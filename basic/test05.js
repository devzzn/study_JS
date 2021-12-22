/*
    자바스크립트 함수 특징
    1. 무명의 리터럴로 표현이 가능하다.
    2. 변수나 자료 구조에 저장할 수 있다.
    3. 함수의 파라미터로 전달할 수 있다.
    4. 반환값으로 사용할 수 있다.
*/
// 함수 선언문
function square(number) {
    return number * number;
}

// 기명 함수 표현식(named function expression)
var foo = function multiply(a, b) {
    return a * b;
}

// 익명 함수 표현식(anonymous function expression)
var square = function(number) {
    return number * number;
}

console.log(foo(10, 5)); // 50
console.log(multiply(10, 5)); // Uncaught ReferenceError: multiply is not defined

// 함수는 일급객체이기 때문에 변수에 할당할 수 있는데 이 변수는 함수명이 아니라 할당된 함수를 가리키는 참조값을 저장하게 된다. 
// 함수 호출시 함수명이 아니라 함수를 가리키는 변수명을 사용하여야 한다.

/*
    Function 생성자 함수
    함수 선언문과 함수 표현식은 모두 함수 리터럴 방식으로 함수를 정의하는데
    이것은 결국 내장 함수 Function 생성자 함수로 함수를 생성하는 것을 단순화 시킨 축약법이다.
    new Function(arg1, arg2, ... argN, functionBody)
    일반적으로 사용하지 않음
*/
var square = new Function('number', 'return number * number');
console.log(square(10)); // 100

/*
    함수 호이스팅
    자바스크립트는 ES6의 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅(Hoisting)한다.
    호이스팅이란 var 선언문이나 function 선언문 등 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성을 말한다. 
    즉, 자바스크립트는 모든 선언문(var, let, const, function, function*, class)이 선언되기 이전에 참조 가능하다.
*/
var res = square(5);
function square(number) {
  return number * number;
}

// 변수 호이스팅이 발생된다. 호이스팅된 변수는 undefined로 초기화 되고 실제값의 할당은 할당문에서 이루어진다.
var res = square(5); // TypeError: square is not a function
var square = function(number) {
  return number * number;
}

/*
    일급 객체 (First-class object)
    생성, 대입, 연산, 인자 또는 반환값으로서의 전달 등 프로그래밍 언어의 기본적 조작을 제한없이 사용할 수 있는 대상을 의미한다.
    1. 무명의 리터럴로 표현이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 전달할 수 있다.
    4. 반환값으로 사용할 수 있다.
    함수와 다른 객체를 구분짓는 특징은 호출할 수 있는것이다.
*/

// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log(Object.getOwnPropertyDescriptor(function() {}, 'prototype'));
// {value: {…}, writable: true, enumerable: false, configurable: false}

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log(Object.getOwnPropertyDescriptor({}, 'prototype'));
// undefined

// 기명 즉시 실행 함수(named immediately-invoked function expression)
(function myFunction() {
    var a = 3;
    var b = 5;
    return a * b;
  }());
  
  // 익명 즉시 실행 함수(immediately-invoked function expression)
  (function () {
    var a = 3;
    var b = 5;
    return a * b;
  }());
  
  // SyntaxError: Unexpected token (
  // 함수선언문은 자바스크립트 엔진에 의해 함수 몸체를 닫는 중괄호 뒤에 ;가 자동 추가된다.
 // function () {
    // ...
 // }(); // => };();
  
  // 따라서 즉시 실행 함수는 소괄호로 감싸준다.
  (function () {
    // ...
  }());
  
  (function () {
    // ...
  })();
