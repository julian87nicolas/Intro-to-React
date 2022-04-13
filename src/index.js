import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

function A(props) {
  return <p> Hola {props.nombre} </p>;
}

function B(props) {
  return <p> {props.nombre}: 10 </p>;
}

class App extends React.Component {
  render() {
    return (
      <div>
        <A nombre={"Julian Camargo"} />
        <B nombre={"Julian"} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
