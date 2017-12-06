import React from "react";

export default props => {
  // console.log(renderHTML);
  return (
    <div>
      <h1>Previewer</h1>
      {props.renderedMarkdown}
    </div>
  );
};
