import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import Toggle from '../../components/Toggle';

// import { selectPostType } from './actions';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

const Label = styled.h4`
  margin: 0;
`;

const Description = styled.p`
  color: #b5bac3;
`;

const Category = styled.p`
  text-transform: uppercase;
`;

class DeliverableField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, description } = this.props;

    return (
      <Wrapper>
        <div>
          <Label>{label}</Label>
          <Description>{description}</Description>
        </div>
        <div>
          <Category>Instagram</Category>
        </div>
      </Wrapper>
    );
  }
}

DeliverableField.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeliverableField);
