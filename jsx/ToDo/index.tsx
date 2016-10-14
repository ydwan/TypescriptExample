/// <reference path="../../typings/tsd.d.ts" />

interface HelloWorldProps {
    defaultName: string;
}

interface State {
    name: string;
}

class HelloWorld extends React.Component<HelloWorldProps, State>{
    constructor(props: HelloWorldProps) {
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public handleChange(event: React.FormEvent): void {
        this.setState({ name: "Charles" });
    }

    public render() {
        return (
            <div>
                Hello {this.state.name}!
                <button
                    name="Update"
                    onClick={e => this.handleChange(e)}
                    >Update</button>
            </div>
        );
    }
}