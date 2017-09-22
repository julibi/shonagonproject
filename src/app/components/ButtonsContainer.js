import React from "react";

class ButtonsContainer extends React.Component {
  render() {
    const SnuButtons = this.props.filteredSnus.map((filteredSnu, idx) => (
      <button
        id={filteredSnu.id}
        onClick={() => this.props.onClickHandler(filteredSnu)}
      >
        {filteredSnu.title}
      </button>
    ));

    return <div>{SnuButtons}</div>;
  }
}

export default ButtonsContainer;
