/*
    encodeURI()
    매개변수로 전달된 URI를 인코딩한다.
    여기서 인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의미한다.
    단 알파벳, 0~9의 숫자, -_.!~*'() 은 이스케이프 처리에서 제외된다.

    - 이스케이프 처리
    네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 ASCII Character-set로 변환하는 것이다.
    UTF-8 특수문자의 경우, 1문자당 1~3byte, UTF-8 한글 표현의 경우, 1문자당 3byte이다.
    예를 들어 특수문자 공백은 %20, 한글 ‘가’는 %EC%9E%90으로 인코딩된다.

    - 이스케이프 처리 이유
    URI 문법 형식 표준 RFC3986에 따르면 URL은 ASCII Character-set으로만 구성되어야 하며 한글을 포함한
    대부분의 외국어나 SCII에 정의되지 않은 특수문자의 경우 URL에 포함될 수 없다.
    따라서 URL 내에서 의미를 갖고 있는 문자나 UFL에 올 수 없는 문자 또는 시스템에 의해 해석될 수 있는 문자를
    이스케이프 처리하여 야기될 수 있는 문제를 예방하기 위함이다.

    decodeURI()은 매개변수로 전달된 URI을 디코딩한다.
*/
encodeURI(URI)
// URI: 완전한 URI
decodeURI(encodedURI)
// encodedURI: 인코딩된 완전한 URI
var uri = 'http://example.com?name=이웅모&job=programmer&teacher';
var enc = encodeURI(uri);
var dec = decodeURI(enc);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher
console.log(dec);
// http://example.com?name=이웅모&job=programmer&teacher

/*
    encodeURIComponent()
    매개변수로 전달된 URI component를 인코딩한다.
    여기서 인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의미한다.
    단 알파벳, 0~9의 숫자, -_.!~*'() 는 이스케이프 처리에서 제외된다.

    decodeURIComponent()
    매개변수로 전달된 URI component를 디코딩한다.

    encodeURIComponent()는 인수를 쿼리스트링의 일부라고 간주한다. 
    따라서 =, ?, &를 인코딩한다. 반면 encodeURI()는 인수를 URI 전체라고 간주하며 
    파라미터 구분자인 =, ?, &를 인코딩하지 않는다.
*/
encodeURIComponent(URI)
// URI: URI component(구성 요소)
decodeURIComponent(encodedURI)
// encodedURI: 인코딩된 URI component(구성 요소)
var uriComp = '이웅모&job=programmer&teacher';

// encodeURI / decodeURI
var enc = encodeURI(uriComp);
var dec = decodeURI(enc);
console.log(enc);
// %EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher
console.log(dec);
// 이웅모&job=programmer&teacher

// encodeURIComponent / decodeURIComponent
enc = encodeURIComponent(uriComp);
dec = decodeURIComponent(enc);
console.log(enc);
// %EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher
console.log(dec);
// 이웅모&job=programmer&teacher