var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isDone = false;
var num = 1;
var str = 'Hello world!';
var array1 = [1, 2, 3, 4];
var array2 = [1, 2, 3, 4];
var x;
x = ['hello', 10];
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.Blue;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
;
var c3 = Color3.Green;
var Color4;
(function (Color4) {
    Color4[Color4["Red"] = 1] = "Red";
    Color4[Color4["Green"] = 2] = "Green";
    Color4[Color4["Blue"] = 3] = "Blue";
})(Color4 || (Color4 = {}));
;
var colorName = Color4[2];
console.log(colorName);
var notSure1 = 4;
notSure1 = "maybe a string instead";
notSure1 = false;
var notSure2 = 4;
notSure2.ifItExists();
notSure2.toFixed();
var list = [1, true, "free"];
list[1] = 100;
function warnUser() {
    alert("This is my warning message");
}
var unusable = undefined;
function add(x, y) {
    return x + y;
}
var myAdd1 = function (x, y) { return x + y; };
var myAdd2 = function (x, y) { return x + y; };
var myAdd3 = function (x, y) { return x + y; };
function buildName1(firstName, lastName) {
    if (lastName) {
        return firstName + "" + lastName;
    }
    return firstName;
}
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    if (lastName) {
        return firstName + "" + lastName;
    }
    return firstName;
}
function buildName3(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    if (lastName) {
        return firstName + "" + lastName;
    }
    return firstName;
}
var mybuildName3 = buildName3(undefined, "Adams");
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + "" + restOfName.join(' ');
}
var mybuildName4 = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
function printLabel(labelledValue) {
    console.log(labelledValue.label);
}
var myObj = {
    size: 10,
    label: "Size 10 Object!"
};
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare1 = createSquare({ colour: "red", width: 100 });
var mySquare2 = createSquare({ width: 100, opacity: 0.5 });
var p1 = { x: 10, y: 20 };
var rNumer = [1, 2, 3, 4, 5];
var ro = rNumer;
rNumer = ro;
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    return true;
};
var myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var myClock = new Clock(5, 10);
var square1 = {};
square1.color = "blue";
square1.sideLength = 4;
var square2 = {};
square2.color = 'red';
square2.sideLength = 4;
square2.penWidth = 10;
function getCounter() {
    var counter = function (strart) { };
    counter.interval = 123;
    counter.rest = function () { };
    return counter;
}
var myCounter = getCounter();
myCounter(10);
myCounter.interval = 5.0;
myCounter.rest();
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.apply(this, arguments);
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var myButton = new Button();
myButton.select();
function identity(args) {
    return args;
}
var output = identity('Hello World!');
var output2 = identity;
var output3 = identity;
var output4 = identity;
function loggingIdentity(args) {
    console.log(args.length);
    return args;
}
var myLoggingIdentity = loggingIdentity(["1", "2", "3"]);
var myGenericIdentityFn1 = identity;
var myGenericIdentityFn2 = identity;
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 5;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "Hello";
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, " World!"));
function lengthwiseIdentity(args) {
    console.log(args.length);
    return args;
}
lengthwiseIdentity({ length: 5, value: 3 });
var Zookeeper = (function () {
    function Zookeeper() {
    }
    return Zookeeper;
}());
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        _super.apply(this, arguments);
    }
    return Lion;
}(Animal));
function findKeeper(a) {
    return a.prototype.keeper;
}
findKeeper(Lion).nametag;
var xEmpty;
var yEmpty;
xEmpty = yEmpty;
//# sourceMappingURL=tsc.js.map