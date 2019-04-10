/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  SAVE_CAMPAIGN,
  SAVE_CAMPAIGN_SUCCESS,
  SAVE_CAMPAIGN_ERROR,
} from './constants';

/**
 * this action starts the request saga
 *
 * @return {object} An action object with a type of SAVE_CAMPAIGN
 */
export function saveCampaign() {
  return {
    type: SAVE_CAMPAIGN,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {object} campaign The repository data
 *
 * @return {object}      An action object with a type of SAVE_CAMPAIGN_SUCCESS passing the campaign data
 */
export function saveCampaignSuccess(campaign) {
  return {
    type: SAVE_CAMPAIGN_SUCCESS,
    campaign,
  };
}

/**
 * Dispatched when saving the campaign fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of SAVE_CAMPAIGN_ERROR passing the error
 */
export function saveCampaignError(error) {
  return {
    type: SAVE_CAMPAIGN_ERROR,
    error,
  };
}
