/*
    Execution Context 실행 컨텍스트
    scope, hoisting, this, function closure 등의 동작원리를 담고 있는 자바 스크립트의 핵심원리
    
    실행 가능한 코드를 형상화하고 구분하는 추상적인 개념 (실행 가능한 코드가 실행되기 위해 필요한 환경)

    전역 코드 : 전역 영역에 존재하는 코드
    Eval 코드 : eval 함수로 실행되는 코드
    함수 코드 : 함수 내에 존재하는 코드
*/
var x = 'xxx';

function foo () {
    var y = 'yyy';

    function bar() {
        var zz = 'zzz';
        console.log(x + y + z);
    }
    bar();
}
foo();
/*
    (global)->(global, foo())->(global, foo(), bar())->(global, foo())->(global)
    위 코드 실행시 실행 컨텍스트 스텍이 생성되고 소멸한다.
    1. 논리적 스택 구조를 가지는 새로운 실행 컨텍스트 스택이 생성
       스택은 LIFO(Last In First Out) 후입 선출의 구조를 가진다.
    2. 전역 코드로 컨트롤이 진입하면 전역 실행 컨텍스트가 생성되고 실행 컨텍스트에 스택이 쌓인다.
       전역 실행 컨텍스트는 애플리케이션이 종료될 때까지 유지된다.
    3. 함수를 호출하면 해당 함수의 실행 컨텍스트가 생성되며 직전의 코드 블록의 실행 컨텍스트 위에 쌓인다.
    4. 함수 실행이 끝나면 해당 함수의 실행 컨텍스트를 파기하고 직전의 실행 컨텍스트에 컨트롤을 반환한다.
*/

