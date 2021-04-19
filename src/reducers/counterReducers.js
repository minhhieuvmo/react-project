import {
  COUNTER_RESET,
  COUNTER_INCREASE,
  COUNTER_DECREASE,
} from "../actions/types";

const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_RESET:
      return { value: 0 };
    case COUNTER_DECREASE:
      return { ...state, value: state.value - 1 };
    case COUNTER_INCREASE:
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
};
