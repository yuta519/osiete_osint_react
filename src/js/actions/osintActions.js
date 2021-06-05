import axios from "axios";

export function fetchOsints() {
  return function(dispatch) {
    dispatch({type: "FETCH_OSINTS"});
    axios.get("http://localhost:8000/api/data")
    // axios.get("http://localhost:8000/api/dangerous_osint")
      .then((response) => {
        dispatch({type: "FETCH_OSINTS_FULFILLED", payload: response.data})
        console.log(response.data);
      })
      .catch((err) => {
        dispatch({type: "FETCH_OSINTS_REJECTED", payload: err})
      });
  };
}

export function fetchDangerousOsints() {
  return function(dispatch) {
    dispatch({type: "FETCH_DANGEROUS_OSINTS"});
    axios.get("http://localhost:8000/api/dangerous_osint")
      .then((response) => {
        dispatch({type: "FETCH_DANGEROUS_OSINTS_FULFILLED", payload: response.data})
        // console.log(response.data);
      })
      .catch((err) => {
        dispatch({type: "FETCH_DANGEROUS_OSINTS_REJECTED", payload: err})
      });
  };
}

