import React from 'react';
import {PrimaryOption, PrimarySelect} from "./Selector.styles";

export const PrimarySelector = ({onChange, options, name, valuePropName, title, value}) => (
  <PrimarySelect onChange={onChange} value={value}>
    <PrimaryOption value={0}>{`Choose ${title ?? 'value'}`}</PrimaryOption>
    {options.map((item, index) => (
      <PrimaryOption key={index} value={item[valuePropName]}>{item[name]}</PrimaryOption>
    ))}
  </PrimarySelect>
)
