const INITIAL_STATE = {
  tweets: [],
};

const tweetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'POST_TWEET':
      return {
        ...state,
        tweets: action.payload,
      };
    default:
      return state;
  }
};

export default tweetReducer;
