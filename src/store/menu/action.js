export const ACTION_OPEN_MENU_STATE = "ACTION_OPEN_MENU_STATE";
export const ACTION_CLOSE_MENU_STATE = "ACTION_CLOSE_MENU_STATE";

export const openMenuState = () => {
  return {
    type: ACTION_OPEN_MENU_STATE,
    payload: true
  };
};

export const closeMenuState = () => {
  return {
    type: ACTION_CLOSE_MENU_STATE,
    payload: false
  };
};
