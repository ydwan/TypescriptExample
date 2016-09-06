React.createElement("foo", null);
var MyComponent = (function () {
    function MyComponent() {
    }
    MyComponent.prototype.render = function () { };
    return MyComponent;
}());
var myComponent = new MyComponent();
function MyFactoryFunction() {
    return {
        render: function () {
        }
    };
}
var myComponent = MyFactoryFunction();
//# sourceMappingURL=jsx.js.map