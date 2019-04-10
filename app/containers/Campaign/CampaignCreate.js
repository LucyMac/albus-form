/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SectionHeader from '../../components/SectionHeader';
import CampaignForm from '../../components/CampaignForm';

class CampaignCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SectionHeader />
        <CampaignForm dispatch={this.props.dispatch} />
      </div>
    );
  }
}

CampaignCreate.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  // selectPostType: e => dispatch(selectPostType(e.target.value)),
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampaignCreate);
