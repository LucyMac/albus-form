/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SAVE_CAMPAIGN = 'boilerplate/App/SAVE_CAMPAIGN';
export const SAVE_CAMPAIGN_SUCCESS = 'boilerplate/App/SAVE_CAMPAIGN_SUCCESS';
export const SAVE_CAMPAIGN_ERROR = 'boilerplate/App/SAVE_CAMPAIGN_ERROR';
