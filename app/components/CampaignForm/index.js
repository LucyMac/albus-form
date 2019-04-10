/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormHeader from './FormHeader';
import FeeField from '../../containers/Campaign/Feefield';
import DeliverableField from '../../containers/Campaign/DeliverableField';
import { saveCampaign } from '../../containers/Campaign/actions';

const Wrapper = styled.div`
  width: 900px;
  margin-left: calc((100% - 900px) / 2);
  background-color: #fff;
  padding: 100px;
  display: flex;
  flex-direction: column;
`;

const FormBody = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #eeeef1;
  border-radius: 5px;
  padding: 10px;
`;

const FormSection = styled.div`
  padding: 25px 30px;
  border-bottom: 1px solid #eeeef1;
`;

const FormFooter = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: flex-end;

  button {
    height: 35px;
    width: 80px;
    color: #fff;
    border: 2px solid #fc6061;
    border-radius: 5px;
    background-color: #fc6061;
    cursor: pointer;

    :focus {
      outline: none;
    }
  }
`;

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      influencerFee: 0,
      usageFee: 0,
      otherFee: 0,
    };
  }

  saveFeeField = (name, value) => {
    this.setState({
      [name]: Number(value),
    });
  };

  handleSubmit = event => {
    const newCampaign = {
      fees: {
        influencer: this.state.influencerFee,
        usage: this.state.usageFee,
        other: this.state.otherFee,
      },
    };

    event.preventDefault();
    this.props.dispatch(saveCampaign(newCampaign));
  };

  render() {
    const totalFee = this.state.influencerFee + this.state.usageFee;

    return (
      <Wrapper>
        <FormHeader />
        <FormBody>
          <FormSection>
            <FeeField
              fieldName="influencerFee"
              label="Influencer fee"
              description="How much are you paying Zoe?"
              saveFeeField={this.saveFeeField}
            />
            <FeeField
              fieldName="usageFee"
              label="Usage fee"
              description="Are you paying Zoe a usage fee for this content?"
              saveFeeField={this.saveFeeField}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4>Total fee:</h4>
              <div style={{ width: '180px' }}>
                <h4>£ {totalFee > 0 ? totalFee : '-'}</h4>
              </div>
            </div>
          </FormSection>
          <FormSection>
            <DeliverableField
              label="Social deliverables"
              description="What posts have you asked Zoe to do?"
            />
          </FormSection>
          <FormFooter>
            <button type="submit" onClick={this.handleSubmit}>
              SAVE
            </button>
          </FormFooter>
        </FormBody>
      </Wrapper>
    );
  }
}

CampaignForm.propTypes = {
  dispatch: PropTypes.func,
};

export default CampaignForm;
