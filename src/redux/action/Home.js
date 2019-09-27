import request from "@/utils/request";
import { FETCH_PRODUCT_LIST } from "../actionTypes";

export const fetchProductList = () => {
  return dispatch => {
    // console.log(window.error);

    // window.addEventListener("unhandledrejection", (msg) => {
    //   console.log(msg);

    // });



    // const b = "qweqweqwe";
    // Promise.reject(b);

    // setTimeout(() => {
    //   const test = 123;
    //   test.forEach(item => {
    //     console.log(item);
    //   });
    // });

    // const test = 123;
    // test.forEach(item => {
    //   console.log(item);
    // });

    // const a = "";
    // if(!a) {
    //   throw new Error("errrrrrrorrrr");
    // }




    request({
      url: "/v1/book",
      data: {
        id: 123,
        type: "abc"
      }
    }).then(res => {
      dispatch({
        type: FETCH_PRODUCT_LIST,
        list: res.data
      });
    });
  };
};
