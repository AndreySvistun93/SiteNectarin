import axios from "axios";
export const movieRequest = ({ url, action }) => {
  return dispatch => {
    axios.get(url).then(response => {
      dispatch(action(response.data));
    });
  };
};
