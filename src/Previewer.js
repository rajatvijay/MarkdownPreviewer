import React from "react";

export default props => {
  return (
    <div>
      <h1>Previewer</h1>
      <div>{props.renderedMarkdown}</div>
    </div>
  );
};
