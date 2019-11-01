export const DATA_SET_APP = "DATA_SET_APP";

export const requestData = (data) => {
  return {
    type: DATA_SET_APP,
    payload: data
  };
};
