import axios, {AxiosRequestConfig} from "axios";
import {Options} from './DataSchemas';

const request = async (method: string, path: string, options: Options) => {
    const requestOptions: AxiosRequestConfig = {
        headers: options.headers,
        baseURL: options.baseURL,
        timeout: options.timeout,
        method: method,
        url: path,
        data: options.data
    };
    return axios(requestOptions).then(response => response.data, response => Promise.reject(response));
};

export default request;