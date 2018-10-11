import React from "react";
import { Form as SUIRForm } from "@infinitecsolutions/semantic-ui-react";

const Form = props => {
  return <SUIRForm {...props} />;
};

Form.Field = SUIRForm.Field;
Form.Button = SUIRForm.Button;
Form.Checkbox = SUIRForm.Checkbox;
Form.Dropdown = SUIRForm.Dropdown;
Form.Group = SUIRForm.Group;
Form.Input = SUIRForm.Input;
Form.Radio = SUIRForm.Radio;
Form.Select = SUIRForm.Select;
Form.TextArea = SUIRForm.TextArea;

Form.displayName = "Form";

export default Form;
