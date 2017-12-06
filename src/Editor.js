import React from "react";

export default class Editor extends React.Component {
  handleChange = event => {
    event.preventDefault();
    this.props.onEditorContentChanged(event.target.value);
  };

  render() {
    return (
      <div>
        <p>Write/Paste your super exciting Markdown below</p>
        <textarea onChange={this.handleChange} value={this.props.markdown} />
      </div>
    );
  }
}
