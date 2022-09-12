// 该文件为请求封装的文件，对于axios进行封装

import axios from "axios";

// 使用类形式封装
class Request {
    // GET请求方法
    get(url = "") {
        if (url === "") {
            return Promise.reject(new Error("empty url is not allowed."));
        }
        return axios.get(url);
    }
}

export default new Request();