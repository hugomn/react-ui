import React from "react";
import { TextArea as SUIRTextArea } from "@infinitecsolutions/semantic-ui-react";

const TextArea = props => {
  return <SUIRTextArea {...props} />;
};

TextArea.displayName = "TextArea";

export default TextArea;
