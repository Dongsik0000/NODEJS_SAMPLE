// const str = "Hello"; // string
// const num = 10; // number
// const bool = true; // boolean
// console.log(str.length) // 5
// console.log(str.toUpperCase()); // HELLO
// ETC : Wrapper object
// const wrapperStr = new String(num);
// console.log(wrapperStr.length); // 2
// console.log(wrapperStr.toUpperCase()); // 10
var wrapperNum = new Number("hello");
console.log(wrapperNum.toFixed(2));
var boolNum = 1;
var wrapperBool = new Boolean(boolNum);
console.log(wrapperBool);
// Array
var arrayofNumbers1;
arrayofNumbers1 = [5];
arrayofNumbers1 = [5, 10, 39];
console.log(arrayofNumbers1[0]); // 5
console.log(arrayofNumbers1[1]); // 10 
console.log(arrayofNumbers1[2]); // 39
var arrayofNumbers2;
arrayofNumbers2 = [6];
arrayofNumbers2 = [6, 8, 20];
console.log(arrayofNumbers2[2]); // 20
// -- tuple
var singleNumberTuple;
singleNumberTuple = [5];
// singleNumberTuple = [5, 10]; // 오류?
// = 초기화 때 메모리(공간, idx)가 이미 지정 됨 -> Java의 배열 초기화와 유사함
// 표기 방식 주의
var str = "Hello"; // string
var num = 10; // number
var bool = true; //boolean
function greeter(name) {
    return "Hello, " + name;
}
// greeter(44); // error : 타입이 맞지 않음
console.log(greeter("Tom"));
var car = {
    color: 'red',
    model: 'Sedan',
    manufacturer: 'Toyota',
};
var person = {
    age: 31,
    name: "Tom",
    job: "Doctor",
    marriage: true,
};
console.log(car.color);
// 구분자, or ; 가능
// 표기하지 않는다면 any라는 타입으로 추론됨 (y 타입 제거 테스트)
function printOutput(pt) {
    console.log("The X value is : " + pt.x);
    console.log("The Y value is : " + pt.y);
}
printOutput({ x: 3, y: 5 });
// printOutput({x: 3, y: "안녕하세요"});
function printName(obj) {
    if (obj.last !== undefined) {
        console.log("Your First name is " + obj.first.toUpperCase());
        console.log("Your Last name is " + obj.last.toUpperCase());
    }
    else {
        console.log("Your name is " + obj.first.toLocaleLowerCase());
    }
}
;
printName({ first: "Bob" }); // last가 없는데도 IDE 오류가 안나타남
printName({ first: "Bob", last: "Sponge" });
