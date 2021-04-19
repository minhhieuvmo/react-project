import { FETCH_API } from "./types";
import api from "../api/quoteApi";

export const createFetchApi = () => async (dispatch) => {
  const res = await api.get("");
  dispatch({
    type: FETCH_API,
    payload: res.data.quotes,
  });
};
