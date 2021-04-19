import { FETCH_API } from "../actions/types";

export const quoteReducer = (quote = [], action) => {
  switch (action.type) {
    case FETCH_API:
      return action.payload;
    default:
      return quote;
  }
};
