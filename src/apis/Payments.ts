import axios from 'axios';

import { PaymentData, PaymentConfirmData, Options } from '../utils/DataSchemas';

export default class Payments {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async initiate(body: PaymentData) {
        const requestOptions = Object.assign({}, this.options, {
            method: 'POST',
            url: '/payments/initiate',
            data: body
        });
        return axios(requestOptions);
    }
    async confirm(body: PaymentConfirmData) {
        const requestOptions = Object.assign({}, this.options, {
            method: 'POST',
            url: '/payments/confirm',
            data: body
        });
        return axios(requestOptions);
    }
}
