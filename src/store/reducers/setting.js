import { createAction, handleActions } from "redux-actions";

const initialState = {
    mode: 'dark',
    fundsTab: -1,
};

export const updateMode = createAction("UPDATE_MODE");
export const updateFundsTab = createAction("UPDATE_FUNDS_TAB");


export default handleActions(
  {
    "UPDATE_MODE": (state, { payload } ) => ({
      ...state,
      mode: payload.mode
    }),
    "UPDATE_FUNDS_TAB": (state, { payload } ) => ({
      ...state,
      fundsTab: payload.fundsTab
    }),
  },
  initialState
);
