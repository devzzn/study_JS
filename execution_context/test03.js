/*
    1. 전역 코드에 진입
    컨트롤이 실행 컨텍스트에 진입하기 이전에 유일한 전역 객체가 생성된다.
    전역 객체는 단일 사본으로 존재하며 이 객체의 프로퍼티는 크도의 어떠한 곳에서도 접근할 수 있다.
    초기 상태의 전역 객체에는 빌트인 객체와 BOM, DOM이 설정되어 있다.
    
    전역 객체가 생성된 이후, 전역 코드로 컨트롤이 진입하면 전역 실행 컨텍스트가 생성되고 실행 컨텍스트 스택에 쌓인다.

    2. 스코프 체인의 생성과 초기화
    실행 컨텍스트가 생성된 이후 가장 먼저 스코프 체인의 생성과 초기화가 실행된다.
    이때 스코프 체인은 전역 객체의 레퍼런스를 포함하는 리스트가 된다.

    3. (Variable Instantiation)변수 객체화 실행
    스코프 체인의 생성과 초기화가 종료하면 변수 객체화가 실행된다.
    Variable Instantiation은 Variable Object에 프로퍼티와 값을 추가하는 것을 의미한다.
    변수 객체화라고 번역하기도 하는데 이는 변수, 매개변수와 인수 정보, 함수 선언을 Variable Object에
    추가하여 객체화 하기 때문이다.
    전역 코드의 경우, Variable Object는 Global Object를 가리킨다.
        순서
        3-1. (Function Code인 경우) 매개변수(parameter)가 Variable Object의 프로퍼티로, 인수(argument)가 값으로 설정된다.
        3-2. 대상코드 내의 함수 선언(함수 표현식 제외)을 대상으로 함수명이 Variable Object의 프로퍼티로,
        생성된 함수 객체가 값으로 설정된다.(함수 호이스팅)
        3-3. 대상 코드 내의 변수 선언을 대상으로 변수명이 Variable Object의 프로퍼티로, undefined가 값으로 설정된다.(변수 호이스팅)
*/
var x = 'xxx';

function foo () {
  var y = 'yyy';

  function bar () {
    var z = 'zzz';
    console.log(x + y + z);
  }
  bar();
}

foo();
/*
    클로저
    생성된 함수 객체는 [[Scopes]] 프로퍼티를 가지게 된다. [[Scopes]] 프로퍼티는 함수 객체만이 소유하는 내부 프로퍼티(Internal Property)로서
    함수 객체가 실행되는 환경을 가리킨다. 따라서 현재 실행 컨텍스트의 스코프 체인이 참조하고 있는 객체를 값으로 설정한다.
    내부 함수의 [[Scopes]] 프로퍼티는 자신의 실행 환경과 자신을 포함하는 외부 함수의 실행 환경과 전역 객체를 가리키는데
    이때 자신을 포함하는 외부 함수의 실행 컨텍스트가 소멸하여도 [[Scopes]]프로퍼티가 가리키는 외부 함수의 실행 환경은 소멸하지 않고 참조할 수 있다.

    함수 호이스팅
    함수 선언식의 경우, 변수 객체에 함수표현식과 동일하게 함수명을 프로퍼티로 함수 객체에 할당한다.
    함수 선언식은 변수 객체에 함수명을 프로퍼티로 추가하고 즉시 함수 객체를 할당하지만 함수 표현식은 일반 변수의 방식을 따른다.
    따라서 함수 선언식의 경우, 선언문 이전에 함수를 호출할 수 있다. 

    this value 결정
    변수 선언 처리가 끝나면 다음은 this value 가 결정된다. this value가 결정되기 이전에 this는 전역 객체를
    가리키고 있다가 함수 호출 패턴에 의해 this에 할당되는 값이 결정된다. 전역 코드의 경우, this는 전역 객체를 가리킨다.
    전역 컨텍스트(전역 코드)의 경우, Variable Object, 스코프 체인, this 값은 언제나 전역 객체이다.
*/