import React from "react";
import { render } from "react-dom";
import Editor from "./Editor";
// import Previewer from "./Previewer";
import marked from "marked";

const styles = {
  fontFamily: "sans-serif",
  padding: "5% 10%"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: "" };
  }

  handleContentChange = markdown => {
    this.setState({ markdown });
    // console.log(this.state);
  };

  renderMarkdown = markdown => {
    return marked(markdown);
  };

  render() {
    const renderedMarkdown = this.renderMarkdown(this.state.markdown);
    return (
      <div style={styles}>
        <Editor
          onEditorContentChanged={this.handleContentChange}
          markdown={this.state.markdown}
        />
        <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
