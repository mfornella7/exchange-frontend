import { createAction, handleActions } from "redux-actions";

const initialState = {
    mode: 'dark'
};

export const updateMode = createAction("UPDATE_MODE");


export default handleActions(
  {
    "UPDATE_MODE": (state, { payload } ) => ({
      ...state,
      mode: payload.mode
    }),
  },
  initialState
);
