import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  h6 {
    font-size: 12px;
  }

  h5 {
    font-size: 16px;
    font-weight: normal;
  }
`;

const FormHeader = () => (
  <Wrapper>
    <h6>Step 3 of 5</h6>
    <h2>Define influencer deliverables</h2>
    <h5>0 of 2 complete</h5>
  </Wrapper>
);

FormHeader.propTypes = {};

export default FormHeader;
