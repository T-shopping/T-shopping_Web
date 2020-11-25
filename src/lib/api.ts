import Axios from "axios";

const BASE_URL = "http://192.168.43.240:8080";

type MethodType = "get" | "post" | "put" | "patch";

export const requestApi = async (
  method: MethodType,
  url: string,
  body?: any,
  headers?: any
) => {
  try {
    const res = await Axios({
      method,
      url,
      baseURL: BASE_URL,
      data: body,
      headers
    });

    return res;
  } catch (err) {
    if (!err.response) {
      alert("네트워크 문제가 발생했습니다");
    }
    throw err.response;
  }
};
