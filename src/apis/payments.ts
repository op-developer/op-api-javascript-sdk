import axios from 'axios';

import * as copy from '../utils/copy';
import { PaymentData, PaymentConfirmData, Options } from '../utils/dataSchemas';

export default class Payments {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async paymentInitiate(body: PaymentData) {
        const requestOptions = await copy.modifyOptions(
            this.options,
            'POST',
            '/payments/initiate',
            body
        );
        return axios(requestOptions);
    }
    async paymentConfirm(body: PaymentConfirmData) {
        const requestOptions = await copy.modifyOptions(
            this.options,
            'POST',
            '/payments/confirm',
            body
        );
        return axios(requestOptions);
    }
}
