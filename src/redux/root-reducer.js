import { combineReducers } from 'redux';

import tweetReducer from './tweet/tweet.reducer';

export default combineReducers({
  tweet: tweetReducer,
});
