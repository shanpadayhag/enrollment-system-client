import React from 'react';
import { PrimaryLink, TertiaryLink } from './Link.styles';
import { TERTIARY } from 'constants/components/form.constants';

const Link = (props) => {
  const {theme, children, ...linkProps} = props;

  switch (theme) {
    case TERTIARY:
      return <TertiaryLink {...linkProps}>{children}</TertiaryLink>;
    default:
      return <PrimaryLink {...linkProps}>{children}</PrimaryLink>;
  }
};

export default Link;
