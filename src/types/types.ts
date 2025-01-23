// const str = "Hello"; // string
// const num = 10; // number
// const bool = true; // boolean

// console.log(str.length) // 5
// console.log(str.toUpperCase()); // HELLO

// ETC : Wrapper object
// const wrapperStr = new String(num);
// console.log(wrapperStr.length); // 2
// console.log(wrapperStr.toUpperCase()); // 10
const wrapperNum = new Number("hello");
console.log(wrapperNum.toFixed(2)); 
const boolNum = 1;
const wrapperBool = new Boolean(boolNum);
console.log(wrapperBool);

// Array
let arrayofNumbers1: number[];
arrayofNumbers1 = [5];
arrayofNumbers1 = [5, 10, 39];

console.log(arrayofNumbers1[0]); // 5
console.log(arrayofNumbers1[1]); // 10 
console.log(arrayofNumbers1[2]); // 39

let arrayofNumbers2: Array<number>;
arrayofNumbers2 = [6];
arrayofNumbers2 = [6, 8, 20];

console.log(arrayofNumbers2[2]); // 20

// -- tuple
let singleNumberTuple: [number];
singleNumberTuple = [5];
// singleNumberTuple = [5, 10]; // 오류?
// = 초기화 때 메모리(공간, idx)가 이미 지정 됨 -> Java의 배열 초기화와 유사함
// 표기 방식 주의

const str: string = "Hello"; // string
const num: number = 10; // number
const bool: boolean = true; //boolean

function greeter(name: string): string {
    return "Hello, " + name;
}

// greeter(44); // error : 타입이 맞지 않음
console.log(greeter("Tom"));

const car = {
    color: 'red',
    model: 'Sedan',
    manufacturer: 'Toyota',
};

const person = {
    age: 31,
    name: "Tom",
    job: "Doctor",
    marriage: true,
};

console.log(car.color)

// 구분자, or ; 가능
// 표기하지 않는다면 any라는 타입으로 추론됨 (y 타입 제거 테스트)
function printOutput(pt: {x: number, y: number}) {
    console.log("The X value is : " + pt.x);
    console.log("The Y value is : " + pt.y);
}

printOutput({x: 3, y: 5});
// printOutput({x: 3, y: "안녕하세요"});

function printName(obj: {first: string, last?: string}) {
    if (obj.last !== undefined) {
        console.log("Your First name is " + obj.first.toUpperCase())
        console.log("Your Last name is " + obj.last.toUpperCase())
    } else {
        console.log("Your name is " + obj.first.toLocaleLowerCase())
    }
};

printName({first: "Bob"}); // last가 없는데도 IDE 오류가 안나타남
printName({first: "Bob", last: "Sponge"});

let obj: any = {x: 0};

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// Union
// function printId(id: number | string) {
//     if (typeof id == "string") {
//         // In this branch, id is of type 'string'
//         console.log(id.toUpperCase());
//     } else {
//         //Headers, id is of type 'number'
//         console.log(id);
//     }
// }

// Type Alias & Interface
// function printCoord(point: {x: number; y: number}) {
//     console.log("The coordinate's x value is " + point.x);
//     console.log("The coordinate's y value is " + point.y);
// }

// printCoord({x: 100, y: 100});

// ------

// function calculateDistance(point1: {x: number, y: number}, point2: {x: number, y: number}): number {
//     const locationX = point2.x - point1.x;
//     const locationY = point2.y - point1.y;
//     return Math.sqrt(locationX ** 2 + locationY ** 2);
// }

// // ...추가
// type Point = {
//     x: number,
//     y: number 
// }

// Type Alias & Interface
function printCoord(point: Point) {
    console.log("The coordinate's x value is " + point.x)
    console.log("The coordinate's x value is " + point.y)
}

printCoord({x: 100, y: 100});

//--------

function calculateDistance(point1: Point, point2: Point): number {
    const locationX = point2.x - point1.x;
    const locationY = point2.y - point1.y;
    return Math.sqrt(locationX ** 2 + locationY ** 2);
}

// type Point = {
//     x: number,
//     y: number 
// }

interface Point {
    x: number;
    y: number;
}

// 타입 별칭으로도 Union 같이 다른 타입들도 커스텀 가능
type ID = number | string ;

function printId(id: ID) {
    if (typeof id == "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        //Headers, id is of type 'number'
        console.log(id);
    }
}

// 인터페이스의 상속, 확장 예시
// interface Animal {
//     name: string;
// }

// interface Bear extends Animal {
//     honey: boolean;
// }

// function getBear(): Bear {
//     return {
//         name: "Grizzly",
//         honey: true,
//     };
// }

// const bear = getBear();
// console.log(bear.name); // "Grizzly" // extends from Animal
// console.log(bear.honey); // true

function getBear(): Bear {
    return {
        name: "Grizzly",
        honey: true,
    };
}
type Animal = {
    name: string;
}

type Bear = Animal & {
    honey: boolean;
}

const bear = getBear();
console.log(bear.name); // "Grizzly" // extends from Animal intersections(+)
console.log(bear.honey); // true

// Define Interface
interface Job {
    title: string;
}
interface Job {
    company: string;
}
// Job Instance
const myJob: Job = {
    title: "Softare Enginner",
    company: "Tech Corp"
};

console.log(myJob.title); // "Software Engineer"
console.log(myJob.company);// "Tech Corp"

// Simulate data received from an API call
const apiResponse: any = {
    id: 1,
    title: "TypeScript Begins",
    content: "This is contents of article",
};

// Error case but Could not find
console.log(apiResponse.like);

// Developer define exact formed data
interface Content {
    id: number;
    title: string;
    content: string;
}

// Type assertion using 'as' keyword
const content1 = apiResponse as Content;
// Or using <> bracket syntax
const contet2 = <Content>apiResponse;

//console.log(content1.like); // Property 'like' does not exist
console.log(content1.title); // OK
console.log(content1.content); // OK


// Literal type
function printText(s: string, alignment: "left" | "right" | "center") {
    //...
}
printText("Hello, world", "left");
// printText("Hello, world", "centre"); // Error

// Enum (열거형 타입)
// Function to check the type of day
enum Day {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}
function checkDayType(): void {
    const currentDay = new Date().getDay();

    const isWorkoutDay = currentDay === 2 || currentDay === 4;
    const isWeekend = currentDay === 0 || currentDay === 6;

    const isWorkingDay =
     currentDay !== 0 && currentDay !== 6 &&
     currentDay !== 1 && currentDay !== 3;

     console.log(`Today is day number ${currentDay}.`);
     console.log(`Is today a workout day? ${isWorkoutDay}.`);
     console.log(`Is today a weekend day? ${isWeekend}.`);
     console.log(`Is today a working day? ${isWorkingDay}.`);
}