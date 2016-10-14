/// <reference path="./../typings/tsd.d.ts" />

//1.基本jsx语法。
//ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
ReactDOM.render(<h1>Hello world!</h1>, document.getElementById('example'));

//react遍历dom时需要key属性，否则会报'Each child in an array or iterator should have a unique "key" prop.'错误
var names = ['Alice', 'Emily', 'Kate'];
ReactDOM.render(
  <div>{
    names.map((name, index) => <div key={index} > Hello, {name}!</div>)
  }</div>
  , document.getElementById('names'));

//JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员
var domArray = [<h1 key='domArray1'>Hello World!</h1>, <h2 key='domArray2'>React is awesome</h2>];
ReactDOM.render(<div>{domArray}</div>, document.getElementById('domArray'));





//2.组件
//React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。React.createClass 方法就用于生成一个组件类。
interface Props {
  message: string;
}

class Greeting extends React.Component<Props,any> {
  render() {
    return <h1>Hello {this.props.message}</h1>;
  }
}

ReactDOM.render(<Greeting message="John"></Greeting>, document.getElementById('HelloMessage'));