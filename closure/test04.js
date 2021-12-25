function Counter() {
    // 카운트를 유지하기 위한 자유 변수
    var counter = 0;
  
    // 클로저
    this.increase = function () {
      return ++counter;
    };
  
    // 클로저
    this.decrease = function () {
      return --counter;
    };
  }
  
  const counter = new Counter();
  
  console.log(counter.increase()); // 1
  console.log(counter.decrease()); // 0

/*
    생성자 함수 Counter는 increase, decrease 메소드를 갖는 인스턴스를 생성한다. 
    이 메소드들은 모두 자신이 생성됐을 때의 렉시컬 환경인 생성자 함수 Counter의 스코프에 속한 
    변수 counter를 기억하는 클로저이며 렉시컬 환경을 공유한다. 생성자 함수가 함수가 생성한 객체의 
    메소드는 객체의 프로퍼티에만 접근할 수 있는 것이 아니며 자신이 기억하는 렉시컬 환경의 변수에도 접근할 수 있다.

    이때 생성자 함수 Counter의 변수 counter는 this에 바인딩된 프로퍼티가 아니라 변수다. 
    counter가 this에 바인딩된 프로퍼티라면 생성자 함수 Counter가 생성한 인스턴스를 통해 
    외부에서 접근이 가능한 public 프로퍼티가 되지만 생성자 함수 Counter 내에서 선언된 
    변수 counter는 생성자 함수 Counter 외부에서 접근할 수 없다. 
    하지만 생성자 함수 Counter가 생성한 인스턴스의 메소드인 increase, decrease는 클로저이기 
    때문에 자신이 생성됐을 때의 렉시컬 환경인 생성자 함수 Counter의 변수 counter에 접근할 수 있다. 
    이러한 클로저의 특징을 사용해 클래스 기반 언어의 private 키워드를 흉내낼 수 있다.
*/