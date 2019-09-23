import request from "@/utils/request";
import { FETCH_PRODUCT_LIST } from "../actionTypes";

export const fetchProductList = () => {
  return dispatch => {
    request({
      url: "http://music.hoohmm.com/search",
      data: {
        keywords: "海阔天空"
      }
    }).then(res => {
      dispatch({
        type: FETCH_PRODUCT_LIST,
        list: res.data.result.songs
      });
    }).catch(err => {
      console.log(err);
    });
  };
};


