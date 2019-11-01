import { DATA_SET_APP } from "./action";
const dataAppDefaultState = {
  dataApp: {}
};

export const appReducer = (state = dataAppDefaultState, action) => {
  switch (action.type) {
    case DATA_SET_APP:
      return {
        ...state,
        dataApp: action.payload
      };
  }
  return state;
};
