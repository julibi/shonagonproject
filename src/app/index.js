import React from "react";
import { render } from "react-dom";
import { MyRouter } from "./MyRouter";

class App extends React.Component {
  

  render() {
    
    return (
      <div>
        <MyRouter />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
