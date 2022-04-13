import React from "react";
import ReactDOM from "react-dom";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  aumentar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.aumentar}>Click Me!</button>
        <p>{this.state.contador}</p>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Contador />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
