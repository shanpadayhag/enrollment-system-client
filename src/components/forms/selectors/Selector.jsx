import React from 'react';
import {PrimarySelector} from "./Selector.component";

const Selector = (props) => {
  const { theme, options, name, value, valuePropName = 'id', title, onChangeValue = () => {} } = props

  const onChange = (event) => {
    onChangeValue(event.target.value)
  };

  switch (theme) {
    default:
      return <PrimarySelector
        name={name}
        valuePropName={valuePropName}
        value={value}
        options={options}
        title={title}
        onChange={onChange} />
  }
}

export default Selector;
