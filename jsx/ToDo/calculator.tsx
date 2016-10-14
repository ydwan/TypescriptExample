/// <reference path="../../typings/tsd.d.ts" />

interface CalculatorProps {
    number1: string;
    number2: string;
    type: string;
}

interface CalculatorState {
    result: string
}


class calculator extends React.Component<CalculatorProps, CalculatorState>{
    constructor(props: CalculatorProps) {
        super();
        this.state.result = "0";
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.props.number1} />
                    <select name="" value={this.props.type}>
                        <option value="1">+</option>
                        <option value="2">-</option>
                        <option value="3">*</option>
                        <option value="4">/</option>
                    </select>
                    <input type="text" value={this.props.number2} />
                </div>
                <div>
                    结果：<span>{this.state.result}</span>
                </div>
            </div>
        )
    }
}