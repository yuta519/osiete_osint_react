const initialState = {osints: [], fetching: false, fetched: false, error: null}

export default function reducer(state=initialState, action) {
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
      case "FETCH_DANGEROUS_OSINTS": {
        return {...state, fetching: true};
      }
      case "FETCH_DANGEROUS_OSINTS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          osints:action.payload
        }
      }
    }

    return state;
}
