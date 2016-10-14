//Boolean
var isDone: boolean = false;


//Number
var num: number = 1;


//String
var str: String = 'Hello world!';


//Array(Have two ways)
var array1: number[] = [1, 2, 3, 4];
var array2: Array<number> = [1, 2, 3, 4];


//Tuple 元组
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error
//console.log(x[0].substr(1)); 


//Enum
enum Color1 { Red, Green, Blue };
var c1: Color1 = Color1.Blue;
//在默认情况下，枚举类型会从数字0开始标记它的元素。我们可以通过人为地设置元素的数值来改变默认值。例如，上面的例子我们可以设置成从1开始计数：
enum Color2 { Red = 1, Green, Blue };
var c2: Color2 = Color2.Green;
//我们甚至可以给所有的枚举元素设置数值：
enum Color3 { Red = 1, Green = 2, Blue = 4 };
var c3: Color3 = Color3.Green;
//枚举类型有一个便捷特性，我们也可以直接用数值来查找其对应的枚举元素的名称。
//举例来说，如果我们有一个值为2,但我们不确定这个数值对应枚举类型中的哪个元素，那我们可以直接查找这个数值对应的名称：
enum Color4 { Red = 1, Green, Blue };
var colorName: string = Color4[2];
console.log(colorName);


//Any任意值
var notSure1: any = 4;
notSure1 = "maybe a string instead";
// okay, definitely a boolean
notSure1 = false;

//在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 
//你可能认为 Object有相似的作用，就像它在其它语言中那样。 
//但是 Object类型的变量只是允许你给它赋任意值 -- 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
var notSure2: any = 4;
notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

//当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
let list: any[] = [1, true, "free"];
list[1] = 100;


//空值
//某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser(): void {
    alert("This is my warning message");
}
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

