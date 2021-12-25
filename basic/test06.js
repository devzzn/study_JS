/*
    프로토타입 객체
    자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어.
    자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다.
    그리고 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다.
    이러한 부모 객체를 Prototype 객체 또는 줄여서 Prototype이라 한다.

    자바스크립트의 모든 객체는 Prototype 이라는 인터널 슬롯을 가진다.
    Prototype의 값은 null 또는 객체이며 상속을 구현하는데 사용된다.
    Prototype 객체의 데이터 프로퍼티는 get 액세스를 위해 상속되어 자식 객체의 프로퍼티처럼 사용할 수 있다.
    하지만 set 액세스는 허용되지 않는다.

    Prototype의 값은 Prototype 객체이며 __proto__ accessor property로 접근할 수 있다.
    __proto__프로퍼티에 접근하면 내부적으로 Object.getPrototypeOf가 호출되어 프로토타입 객체를 반환한다.

    student 객체는 __proto__ 프로퍼티로 자신의 부모 객체(프로토타입 객체)인 Object.prototype을 가리키고 있다.
*/

var student = {
    name: 'Lee',
    score: 90
  };
  
  // student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
  console.log(student.hasOwnProperty('name')); // true
  
  console.dir(student);

/*
  [[Prototype]]
  함수를 포함한 모든 객체가 가지고 있는 인터널 슬롯이다.
  객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키며 함수 객체의 경우
  Function.prototype를 가리킨다.

  prototype 프로퍼티
  함수 객체만 가지고 있는 프로퍼티이다.
  함수 객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체를 가리킨다.
*/
function Person(name) {
    this.name = name;
}

var foo = new Person('Lee');

console.dir(Person); // prototype 프로퍼티가 있다.
console.dir(foo);    // prototype 프로퍼티가 없다.

console.log(Person.__proto__ === Function.prototype);
console.log(Person.prototype === foo.__proto__);

/*
    constructor 프로퍼티
    프로토타입 객체는 constructor 프로퍼티를 갖는다.
    constructor 프로퍼티는 객체의 입장에서 자신을 생성한 객체를 말한다.
*/
function Person(name) {
    this.name = name;
}
  
var foo = new Person('Lee');

// Person() 생성자 함수에 의해 생성된 객체를 생성한 객체는 Person() 생성자 함수이다.
console.log(Person.prototype.constructor === Person);

// foo 객체를 생성한 객체는 Person() 생성자 함수이다.
console.log(foo.constructor === Person);

// Person() 생성자 함수를 생성한 객체는 Function() 생성자 함수이다.
console.log(Person.constructor === Function);

/*
    Prototype chain
    자바스크립트는 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는
    프로퍼티 또는 메소드가 없다면 [[Prototype]]이 가리키는 링크를 따라 자신의 부모 역할을 하는
    프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색한다.
    
    student 객체는 hasOwnProperty 메소드를 가지고 있지 않으므로 에러가 발생하여야 하나 정상적으로 결과가 출력되었다. 
    이는 student 객체의 [[Prototype]]이 가리키는 링크를 따라가서 student 객체의 부모 역할을 하는 
    프로토타입 객체(Object.prototype)의 메소드 hasOwnProperty를 호출하였기 때문에 가능한 것이다.
*/
var student = {
    name: 'Lee',
    score: 90
  }
  
  // Object.prototype.hasOwnProperty()
  console.log(student.hasOwnProperty('name')); // true
  