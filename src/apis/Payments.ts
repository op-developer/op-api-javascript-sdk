import request from "../utils/request";

import { PaymentData, PaymentConfirmData, Options } from '../utils/DataSchemas';

export default class Payments {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async initiate(body: PaymentData) {
        const requestOptions: Options = {
            ...this.options,
            data: body
        };
        return request('POST', `/${this.options.version}/payments/initiate`, requestOptions);
    }
    async confirm(body: PaymentConfirmData) {
        const requestOptions: Options = {
            ...this.options,
            data: body
        };
        return request('POST', `/${this.options.version}/payments/confirm`, requestOptions);
    }
}
