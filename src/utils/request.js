import axios from "axios";

const methodPost = ["PUT", "POST", "PATCH"];
const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
};
const request = (options = {}) => {
  const paramKey = methodPost.includes(options.method) ? "data" : "params";
  return axios({
    headers,
    method: options.method || "get",
    url: options.url,
    [paramKey]: { ...options.data }
  });
};

export default request;
