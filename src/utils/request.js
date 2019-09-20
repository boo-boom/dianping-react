import axios from "axios";

const methodPost = ["PUT", "POST", "PATCH"];
const request = (options = {}) => {
  const paramKey = methodPost.includes(options.method) ? "data" : "params";
  return axios({
    method: options.method || "get",
    url: options.url,
    [paramKey]: { ...options.data }
  });
};

export default request;
