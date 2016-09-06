//1.函数类型
//为函数定义类型
//我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
function add(x: number, y: number): number {
    return x + y;
}

let myAdd1 = function (x: number, y: number): number { return x + y };





//2.书写完整函数类型
let myAdd2: (x: number, y: number) => number = function (x: number, y: number): number { return x + y };
//只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
let myAdd3: (baseValue: number, incarement: number) => number = function (x: number, y: number): number { return x + y };







//3.可选参数和默认参数
//TypeScript里的每个函数参数都是必须的。 这不是指不能传递 null或undefined作为参数，而是说编译器检查用户是否为每个参数都传入了值。 
//编译器还会假设只有这些参数会被传递进函数。 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。
//可选参数必须跟在必须参数后面！
function buildName1(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + "" + lastName;
    }
    return firstName;
}

//在TypeScript里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。 
//它们叫做有默认初始化值的参数。 让我们修改上例，把last name的默认值设置为"Smith"。(lastName的类型指定可以省略)
function buildName2(firstName: string, lastName: string = "Smith"): string {
    if (lastName) {
        return firstName + "" + lastName;
    }
    return firstName;
}

//与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 
//如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。 例如，我们重写最后一个例子，让 firstName是带默认值的参数：
function buildName3(firstName="Will", lastName: string): string {
    if (lastName) {
        return firstName + "" + lastName;
    }
    return firstName;
}
let mybuildName3=buildName3(undefined,"Adams");






//4.剩余参数
//必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 
//在JavaScript里，你可以使用 arguments来访问所有传入的参数。
function buildName4(firstName:string,...restOfName:string[]){
    return firstName+""+restOfName.join(' ');
}

let mybuildName4=buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
