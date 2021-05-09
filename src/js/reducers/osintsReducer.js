export default function reducer(state={
    osints: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
    switch (action.type) {
      case "FETCH_OSINTS": {
        return {...state, fetching: true};
      }
      case "FETCH_OSINTS_REJECTED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "FETCH_OSINTS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          osints: action.payload
        };
      }
      case "ADD_OSINT": {
        return {
          ...state,
          tweets: [...state.tweets, action.payload]
        };
      }
      case "UPDATE_OSINT": {
        const { id, text } = action.payload;
        const newTweets = [...state.tweets];
        const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id);
        newTweets[tweetToUpdate] = action.payload;

        return {
          ...state,
          tweets: newTweets
        };
      }
      case "DELETE_OSINT": {
        return {
          ...state,
          tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
        };
      }
    }

    return state;
}
