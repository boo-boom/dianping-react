import request from "@/utils/request";
import { FETCH_PRODUCT_LIST } from "../actionTypes";

export const fetchProductList = () => {
  return dispatch => {
    request({
      url: "/mock/products/likes.json",
    }).then(res => {
      dispatch({
        type: FETCH_PRODUCT_LIST,
        list: res.data
      });
    });
  };
};
