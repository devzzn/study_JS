/*
    전역 객체
    - 실행 컨텍스트에 컨트롤이 들어가기 이전에 생성이 되며 constructor가 없기 때문에 new 연산자를
    이용하여 새롭게 생성 할 수 없다. 즉, 개발자가 전역 객체를 생성하는 것은 불가능하다.
    - 전역 객체는 전역 스코프를 갖게 된다.
    - 전역 객체의 자식 객체를 사용할 때 전역 객체의 기술은 생략할 수 있다. 예를 들어 document 객체는
    전역 객체 window의 자식 객체로서 window.document..와 같이 기술할 수 있으나 일반적으로 전역 객체의 
    기술은 생략한다.
*/
document.getElementById('foo').style.display = 'none';
// window.document.getElementById('foo').style.display = 'none';

//그러나 사용자가 정의한 변수와 전역 객체의 자식 객체 이름이 충돌하는 경우,
// 명확히 전역 객체를 기술하여 혼동을 방지할 수 있다.
function moveTo(url) {
    var location = {'href':'move to '};
    alert(location.href + url);
    // location.href = url;
    window.location.href = url;
  }
  moveTo('http://www.google.com');

// 전역 객체는 전역 변수를 프로퍼티로 가지게 된다. 다시 말해 전역 변수는 전역 객체의 프로퍼티이다.
var ga = 'Global variable';
console.log(ga);
console.log(window.ga);

// 글로벌 영역에 선언한 함수도 전역 객체의 프로퍼티로 접근할 수 있다. 
// 다시 말해 전역 함수는 전역 객체의 메소드 이다.
function foo() {
    console.log('invoked!');
  }
  window.foo();

// Standard Built-in Objects(표준 빌트인 객체)도 역시 전역 객체의 자식 객체이다. 전역 객체의 자식 객체를 
// 사용할 때 전역 객체의 기술은 생략할 수 있으므로 표준 빌트인 객체도 전역 객체의 기술을 생략할 수 있다.
// window.alert('Hello world!');
alert('Hello world!');