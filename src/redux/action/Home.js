import request from "@/utils/request";
import { FETCH_PRODUCT_LIST } from "../actionTypes";

export const fetchProductList = () => ({
  type: FETCH_PRODUCT_LIST,
  list: [1,23,4]
});

