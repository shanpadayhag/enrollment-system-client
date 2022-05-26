import React from 'react';
import { PrimaryInput } from "./InputField.styles";

const InputField = (props) => {
  const {onChangeText, theme, onFocusOut, ...inputProps} = props;

  inputProps.onBlur = onFocusOut;
  inputProps.onChange = (event) => {
    onChangeText(event.target.value)
  };

    switch (theme) {
        default:
            return <PrimaryInput {...inputProps} />
    }
}

export default InputField;
