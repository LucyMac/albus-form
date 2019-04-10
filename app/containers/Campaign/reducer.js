/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  SAVE_CAMPAIGN_SUCCESS,
  SAVE_CAMPAIGN,
  SAVE_CAMPAIGN_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentCampaign: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CAMPAIGN:
      return state
        .set('loading', true)
        .set('error', false)
        .set('currentCampaign', false);
    case SAVE_CAMPAIGN_SUCCESS:
      return state
        .set(['currentCampaign'], action.campaign)
        .set('loading', false);
    case SAVE_CAMPAIGN_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
