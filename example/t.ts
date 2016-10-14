//泛型


//1.泛型之Hello World
function identity<T>(args: T): T {
    return args;
}

let output = identity<string>('Hello World!');
//在这节，我们研究一下函数本身的类型，以及如何创建泛型接口。
//泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：
let output2: <T>(args: T) => T = identity;
//我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
let output3: <U>(args: U) => U = identity;
//我们还可以使用带有调用签名的对象字面量来定义泛型函数：
let output4: { <T>(args: T): T } = identity;




//2.泛型数组
function loggingIdentity<T>(args: T[]) {
    console.log(args.length);
    return args;
}

let myLoggingIdentity = loggingIdentity<string>(["1", "2", "3"]);





//3.泛型接口
interface GenericIdentityFn {
    <T>(args: T): T;
}
let myGenericIdentityFn1: GenericIdentityFn = identity;

//一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。 
//这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： Dictionary<string>而不只是Dictionary）。 
//这样接口里的其它成员也能知道这个参数的类型了。
interface GenericIdentityFn2<T> {
    (args: T): T;
}
let myGenericIdentityFn2: GenericIdentityFn2<number> = identity;





//4.泛型类
//泛型类看上去与泛型接口差不多。 泛型类使用<>括起泛型类型，跟在类名后面
class GenericNumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 5;
myGenericNumber.add = function (x, y) {
    return x + y;
};

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "Hello";
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, " World!"));






//5.泛型约束
interface Lengthwise {
    length: number;
}

function lengthwiseIdentity<T extends Lengthwise>(args: T): T {
    console.log(args.length);
    return args;
}
lengthwiseIdentity({ length: 5, value: 3 });





//6.在泛型里使用类类型
//一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function findKeeper<A extends Animal, K>(a: { new (): A; prototype: { keeper: K } }): K {

    return a.prototype.keeper;
}
findKeeper(Lion).nametag;  // typechecks!

interface Empty<T> {
}
let xEmpty: Empty<number>;
let yEmpty: Empty<string>;
xEmpty = yEmpty;