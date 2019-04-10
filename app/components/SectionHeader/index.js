import React from 'react';

import Title from './Title';
import Wrapper from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
class SectionHeader extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Add a new campaign</Title>
      </Wrapper>
    );
  }
}

export default SectionHeader;
