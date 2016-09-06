//1.接口初探
interface LabelledValue {
    label: string;
}

function printLabel(labelledValue: LabelledValue) {
    console.log(labelledValue.label);
}

let myObj = {
    size: 10,
    label: "Size 10 Object!"
};

printLabel(myObj);




//2.可选属性
//带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。
interface SquareConfig {
    color?: string;
    width?: number;
    //假设有其他额外的属性，那么通过以下方式定义其他属性为any
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

//假设没有定义额外属性,这里会报错，因为SquareConfig接口没有colour属性
let mySquare1 = createSquare({ colour: "red", width: 100 });
//假设没有定义额外属性，但有其他属性时，则使用里氏转换原则防止报错。
let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
//要留意，在像上面一样的简单代码里，你可能不应该去绕开这些检查。
//对于包含方法和内部状态的复杂对象字面量来讲，你可能需要使用这些技巧，但是大部额外属性检查错误是真正的bug。 
//就是说你遇到了额外类型检查出的错误，比如选择包，你应该去审查一下你的类型声明。 
//在这里，如果支持传入 color或colour属性到createSquare，你应该修改SquareConfig定义来体现出这一点。





//3.只读属性
//一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly 来指定只读属性:
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
//当被修改时就会报错！
//p1.x = 5; // error!

//TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把怕有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
let rNumer: number[] = [1, 2, 3, 4, 5];
let ro: ReadonlyArray<number> = rNumer;
//上面代码的最后一行，可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：
rNumer = ro as number[];





//4.函数类型
//为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
interface SearchFunc {
    //表示定义了参数为(source,subString),它们的返回类型是boolean
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
//类型指定可以忽略source:string => source  Typescript的类型系统会推断出参数类型，因为函数直接赋值给了 SearchFunc类型变量
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    if (result == -1) {
        return false;
    }
    return true;
}





//5.可索引的类型
//与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap["daniel"]。 
//可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。 让我们看一个例子：
interface StringArray {
    [index: number]: string;
}
let myArray = ['Bob', 'Fred'];
//我们定义了StringArray接口，它具有索引签名。 这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。
let myStr: string = myArray[0];





//6.实现接口
//与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。
interface ClockInterface {
    currentTime: Date;
    //定义一个setTime方法,不需要返回值
    setTime(d: Date): void;
}

interface ClockConstructor {
    //必须定义需要构造化接口的类型ClockInterface
    new (hour: number, minute: number): ClockInterface;
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
let myClock: Clock = new Clock(5, 10);





//7.扩展接口
//和类一样，接口也可以相互扩展。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
interface Shape {
    color: string;
}

//使用Shape扩展SquareShape
interface SquareShape1 extends Shape {
    sideLength: number;
}

let square1 = <SquareShape1>{};
square1.color = "blue";
square1.sideLength = 4;

interface PenStroke {
    penWidth: number;
}

//一个接口可以继承多个接口，创建出多个接口的合成接口。
interface SquareShape2 extends Shape, PenStroke {
    sideLength: number;
}

let square2 = <SquareShape2>{};
square2.color = 'red';
square2.sideLength = 4;
square2.penWidth = 10;






//8.混合类型
//先前我们提过，接口能够描述JavaScript里丰富的类型。 
//因为JavaScript其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。
//一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。
interface Counter {
    (start: number): string;
    interval: number;
    rest(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (strart: number) { };
    counter.interval = 123;
    counter.rest = function () { };
    return counter;
}

let myCounter = getCounter();
myCounter(10);
myCounter.interval = 5.0;
myCounter.rest();





//9.接口继承类
//当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() { }
}

let myButton=new Button();
myButton.select();