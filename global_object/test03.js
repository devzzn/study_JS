/*
    전역 함수
    애플리케이션 전역에서 호출할 수 있는 함수로서 전역 객체의 메소드이다.
*/

// eval()
// 매개변수에 전달된 문자열 구문 또는 표현식을 평가 또는 실행한다.
// 사용자로부터 입력받은 콘텐츠를 eval()로 실행하는 것은 보안에 매우 취약하므로 사용을 가급적 금지해야한다.
eval(string)
// string: code 또는 표현식을 나타내는 문자열. 표현식은 존재하는 객체들의 프로퍼티들과 변수들을 포함할 수 있다.
var foo = eval('2 + 2');
console.log(foo); // 4

var x = 5;
var y = 4;
console.log(eval('x * y')); // 20

// isFinite()
// 매개변수에 전달된 값이 정상적인 유한수인지 검사하여 그 결과를 Boolean으로 반환한다.
// 매개변수에 전달된 값이 숫자가 아닌 경우, 숫자로 변환한 후 검사를 수행한다.
isFinite(testValue) // testValue: 검사 대상 값
console.log(isFinite(Infinity));  // false
console.log(isFinite(NaN));       // false
console.log(isFinite('Hello'));   // false
console.log(isFinite('2005/12/12'));   // false

console.log(isFinite(0));         // true
console.log(isFinite(2e64));      // true
console.log(isFinite('10'));      // true: '10' → 10
console.log(isFinite(null));      // true: null → 0

// isNaN()
// 매개변수에 전달된 값이 NaN인지 검사하여 그 결과를 Boolean 으로 반환한다.
// 매개변수에 전달된 값이 숫자가 아닌 경우, 숫자로 변환한 후 검사를 수행한다.
isNaN(testValue) // testValue: 검사 대상 값
isNaN(NaN)       // true
isNaN(undefined) // true: undefined → NaN
isNaN({})        // true: {} → NaN
isNaN('blabla')  // true: 'blabla' → NaN

isNaN(true)      // false: true → 1
isNaN(null)      // false: null → 0
isNaN(37)        // false

// strings
isNaN('37')      // false: '37' → 37
isNaN('37.37')   // false: '37.37' → 37.37
isNaN('')        // false: '' → 0
isNaN(' ')       // false: ' ' → 0

// dates
isNaN(new Date())             // false: new Date() → Number
isNaN(new Date().toString())  // true:  String → NaN

// parseFloat()
// 매개변수에 전달된 문자열을 부동소수점 숫자로 변환하여 반환한다.
// 문자열의 첫 숫자만 반환되며 전 후 공백은 무시된다. 그리고 첫문자를 숫자로 변환할 수 없다면 NaN을 반환한다.
parseFloat(string)
// string: 변환 대상 문자열
parseFloat('3.14');     // 3.14
parseFloat('10.00');    // 10
parseFloat('34 45 66'); // 34
parseFloat(' 60 ');     // 60
parseFloat('40 years'); // 40
parseFloat('He was 40') // NaN

// parseInt()
// 매개변수에 전달된 문자열을 정수형 숫자로 해석하여 반환한다. 반환값은 언제나 10진수이다.
parseInt(string, radix);
// string: 파싱 대상 문자열
// radix: 진법을 나타내는 기수(2 ~ 36, 기본값 10)
parseInt('10');     // 10
parseInt('10.123'); // 10
parseInt('10', 2);  // 2진수 10 → 10진수 2
parseInt('10', 8);  // 8진수 10 → 10진수 8
parseInt('10', 16); // 16진수 10 → 10진수 16
parseInt('0x10'); // 16진수 10 → 10진수 16
parseInt('010'); // 8진수 10으로 인식하지 않는다.
parseInt('010', 8); // 8진수 10 → 10진수 8
parseInt('10', 8); // 8진수 10 → 10진수 8
