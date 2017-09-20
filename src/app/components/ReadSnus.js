import React from "react";

export default class ReadSnus extends React.Component {
  render() {
    <h3>Gelesene Szenen</h3>
    const ReadSnuList = this.props.readScenes.map((readSnu, idx) => (
      <ul>
        <li key={idx}><h4>{readSnu.title}</h4></li>
        <li>{readSnu.text}</li>
      </ul>
    ));
    return <div>{ReadSnuList}</div>;
  }
}