import axios from "axios";

export function fetchOsints() {
  return function(dispatch) {
    dispatch({type: "FETCH_OSINTS"});
    axios.get("http://localhost:8000/api/data")
      .then((response) => {
        dispatch({type: "FETCH_OSINTS_FULFILLED", payload: response.data})
        console.log(response.data);
      })
      .catch((err) => {
        dispatch({type: "FETCH_OSINTS_REJECTED", payload: err})
      });
  };
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text
    }
  };
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text
    }
  };
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id};
}
