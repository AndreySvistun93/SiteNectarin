import { ACTION_OPEN_MENU_STATE, ACTION_CLOSE_MENU_STATE } from "./action";
const menuDefaultState = {
  menuState: false
};

export const menuReducer = (state = menuDefaultState, action) => {
  switch (action.type) {
    case ACTION_OPEN_MENU_STATE:
      return {
        ...state,
        menuState: action.payload
      };
    case ACTION_CLOSE_MENU_STATE:
      return {
        ...state,
        menuState: action.payload
      };
    default:
      break;
  }
  return state;
};
