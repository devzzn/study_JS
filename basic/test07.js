/*
    스코프
    스코프는 참조 대상 식별자(identifier, 변수, 함수의 이름과 같이 어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름)를
    찾아내기 위한 규칙이다.
    
    프로그래밍은 변수를 선언하고 값을 할당하며 변수를 참조하는 기본적인 기능을 제공하며 이것으로 프로그램의 상태를 관리할 수 있다.
    변수는 전역 또는 코드 블록(if, for, while, try/catch 등)이나 함수 내에 선언하며 코드 블록이나 함수는 중첩될 수 있다.
    식별자는 자신이 어디에서 선언됐는지에 의해 자신이 유효한(다른 코드가 자신을 참조할 수 있는) 범위를 갖는다.
*/
var x = 'global';

function foo () {
  var x = 'function scope';
  console.log(x);
}

foo(); // ?
console.log(x); // ?

/*
    위 예제의 전역에 선언된 변수 x는 어디에든 참조할 수 있다.
    하지만 함수 foo 내에서 선언된 변수 x는 함수 foo 내부에서만 참조할 수 있고
    함수 외부에서는 참조할 수 없다. 이러한 규칙을 스코프라고 한다.
*/
/*
    전역 스코프
    코드 어디에서든지 참조할 수 있다.
    지역 스코프
    함수 코드 블록이 만든 스코프로 함수 자신과 하위 함수에서만 참조할 수 있다.

    전역 변수
    전역에서 선언된 변수이며 어디에든 참조할 수 있다.
    지역 변수
    지역 내에서 선언된 변수이며 그 지역과 그 지역의 하부 지역에서만 참조할 수 있다.

    변수는 선언 위치에 의해 스코프를 가지게 된다. 즉, 전역에서 선언된 변수는 전역 스코프를 갖는 전역 변수이고,
    지역에서 선언된 변수는 지역 스코프를 갖는 지역 변수가 된다.
    전역 스코프를 갖는 전역 변수는 전역에서 참조할 수 있다.
    지역에서 선언된 지역 변수는 그 지역과 그 지역의 하부 지역에서만 참조할 수 있다.
*/

/*
    암묵적 전역
    위 예제의 y는 선언하지 않은 식별자이다. 따라서 y = 20이 실행되면 참조 에러가 발생할 것처럼 보인다. 
    하지만 선언하지 않은 식별자 y는 마치 선언된 변수처럼 동작한다. 이는 선언하지 않은 식별자에 값을 할당하면 전역 객체의 프로퍼티가 되기 때문이다.

    foo 함수가 호출되면 자바스크립트 엔진은 변수 y에 값을 할당하기 위해 먼저 스코프 체인을 통해 선언된 변수인지 확인한다. 이때 foo 함수의 스코프와 
    전역 스코프 어디에서도 변수 y의 선언을 찾을 수 없으므로 참조 에러가 발생해야 하지만 자바스크립트 엔진은 y = 20을 window.y = 20으로 해석하여 프로퍼티를 동적 생성한다. 
    결국 y는 전역 객체의 프로퍼티가 되어 마치 전역 변수처럼 동작한다. 이러한 현상을 암묵적 전역(implicit global)이라 한다.

    하지만 y는 변수 선언없이 단지 전역 객체의 프로퍼티로 추가되었을 뿐이다. 따라서 y는 변수가 아니다. 따라서 변수가 아닌 y는 변수 호이스팅이 발생하지 않는다.
*/
var x = 10; // 전역 변수

function foo () {
  // 선언하지 않은 식별자
  y = 20;
  console.log(x + y);
}

foo(); // 30