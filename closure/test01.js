/*
    클로저
    반환된 내부함수가 자신이 선언됐을 때의 환경인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프)
    밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수
    (클로저: 자신이 생성될 때의 환경을 기억하는 함수)
*/

function outerFunc() {
    var x = 10;
    var innerFunc = function () { console.log(x); };
    innerFunc();
  }
  
  outerFunc(); // 10
  /*
    함수 outerFunc 내에서 내부 함수 innerFunc가 선언되고 호출되었다.
    이때 내부함수 innerFunc는 자신을 포함하고 있는 외부함수 outerFunc의 변수 x에 접근할 수 있다.
    이는 함수 innerFunc가 함수 outerFunc의 내부에 선언되었기 때문이다.
  */

// ---------------------------------------------------------------
function outerFunc() {
    var x = 10;
    var innerFunc = function () { console.log(x); };
    return innerFunc;
}

/**
 *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
 *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
 */
var inner = outerFunc();
inner(); // 10    
/*
    함수 outerFunc는 내부함수 innerFunc를 반환하고 생을 마감했다.
    즉, 함수 outerFunc는 실행된 이후 콜스택에서 제거되었으므로 함수 outerFunc의 변수 x 또한
    더이상 유효하지 않게 되어 변수 x에 접근할 수 있는 방법은 달리 없어 보인다. 그러나
    위 코드의 실행 결과는 변수 x의 값인 10 이다. 이미 life-cycle이 종료되어 실행 컨텍스트
    스택에서 제거된 함수 outerFunc의 지역변수 x가 다시 부활이라도 한 듯이 동작하고 있다.

    이처럼 자신을 포함 하고 있는 외부 함수보다 내부 함수가 더 오래 유지되는 경우, 외부 함수 밖에서
    내부 함수가 호출되더라도 외부함수의 지역변수에 접근할 수 있는데 이러한 함수를 클로저라고 부른다.
*/