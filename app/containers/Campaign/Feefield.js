import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 40px;
`;

const Label = styled.h4`
  margin: 0;
`;

const Description = styled.p`
  color: #b5bac3;
`;

const TextInput = styled.input`
  border: 1px solid #eeeef1;
  height: 40px;
  border-radius: 3px;
  padding: 5px 10px;
  position: relative;

  &:focus {
    outline: none;
  }

  &:before {
    content: '£';
    display: block;
    position: absolute;
    height: 30px;
    width: 30px;
    top: 0;
    left: 0;
  }
`;

class FeeField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  updateInputValue(e) {
    const { fieldName } = this.props;

    this.setState({
      inputValue: e.target.value,
    });
    this.props.saveFeeField(fieldName, e.target.value);
  }

  render() {
    const { label, description } = this.props;

    return (
      <Wrapper>
        <div>
          <Label>{label}</Label>
          <Description>{description}</Description>
        </div>
        <TextInput
          type="text"
          value={this.state.inputValue}
          onChange={e => this.updateInputValue(e)}
        />
      </Wrapper>
    );
  }
}

FeeField.propTypes = {
  fieldName: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  saveFeeField: PropTypes.func,
};

export default FeeField;
