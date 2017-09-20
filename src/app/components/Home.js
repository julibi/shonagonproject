import React from "react";
import ButtonsContainer from "./ButtonsContainer";
import { Route } from "react-router-dom";
import { snus } from "./Snu";
import ReadSnus from "./ReadSnus";

class Home extends React.Component {
  state = {
    currentSnu: {
      id: "id",
      title: "title",
      text: "text"
    },

    readSnus: []
  };

  componentWillMount() {
    let max = snus.length;
    let randomIndex = Math.floor(Math.random() * max);
    let randomSnu = snus[randomIndex];
    let maxKeyword = randomSnu.keywords.length;
    let randomKeyIndex = Math.floor(Math.random() * maxKeyword);
    let randomKeyword = randomSnu.keywords[randomKeyIndex];
    this.setState({
      currentSnu: randomSnu,
      currentKeyword: randomKeyword,
      readSnus: [randomSnu]
    });
  }

  handleClick = smth => {
    let maxKeyword = smth.keywords.length;
    let randomKeyIndex = Math.floor(Math.random() * maxKeyword);
    let newrandomKeyword = smth.keywords[randomKeyIndex];
    this.setState({
      currentSnu: smth,
      currentKeyword: newrandomKeyword,
      readSnus: [...this.state.readSnus, smth]
    });
  };

  render() {
    const filteredSnus = snus.filter(scene => {
      if (
        scene.keywords.find(item => item === this.state.currentKeyword) &&
        scene !== this.state.currentSnu &&
        this.state.readSnus.indexOf(scene) < 0
      ) {
        return true;
      }
      return false;
    });
    console.log("this is readSnu", this.state.readSnus);

    return (
      <div>
        <Route
          exact
          path="/"
          component={({ match }) => (
            <div>
              <div>
                <h2>{this.state.currentSnu.title}</h2>
                <p>{this.state.currentSnu.text}</p>
              </div>
              <ButtonsContainer
                filteredSnus={filteredSnus}
                onClickHandler={this.handleClick}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/readStories"
          component={({ match }) => (
            <ReadSnus readScenes={this.state.readSnus} />
          )}
        />
      </div>
    );
  }
}

// remember what export default is for!
export default Home;
