import axios, { AxiosRequestConfig, Method } from 'axios';
import { Options } from './DataSchemas';
import noResponseError from './error';

const request = async (method: string, path: string, options: Options) => {
    const requestOptions: AxiosRequestConfig = {
        headers: options.headers,
        baseURL: options.baseURL,
        timeout: options.timeout,
        method: method as Method,
        url: path,
        data: options.data
    };
    return axios(requestOptions).then(
        response => response.data,
        err => errorHanding(err)
    );
};

function errorHanding(err: any) {
    if (
        err.response !== null &&
        err.response !== undefined &&
        err.response.data !== null
    ) {
        return Promise.reject(err.response.data);
    }
    let errorMessages = [];
    errorMessages.push(noResponseError(err));
    return Promise.reject({ errors: errorMessages });
}

export default request;
