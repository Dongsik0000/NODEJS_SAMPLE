const message = "Hello!"

message.toLowerCase();
// Calling 'message'
// message();
// message는 함수가 아니기 때문에 이렇게 호출 불가

const announcement = "Hello World!";
 
// 오타 발생 시 빠른 수정으로 수정 가능
announcement.toLocaleLowerCase();

// 오류 찾기
function flipCoin() {
    return Math.random() < 0.5;
}

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
    //..
} else if (value === "a") {
    //Oops, unbreachable
}

let x = 3;
// let x = [0, 1, null]
// x를 다시 선언할 수 없음

// class Animal {}
// class Rhino extends Animal {
//     hasHorn: boolean = true;
// }
// class Elephant extends Animal {
//     hasTrunk: boolean = true;
// }
// class Snake extends Animal {
//     hasLegs: boolean = false;
// }
// let zoo = [new Rhino(), new Elephant(), new Snake()];

// 이럴 땐 명시적으로 타입을 지정해주어야 함
//let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Bredan", new Date());