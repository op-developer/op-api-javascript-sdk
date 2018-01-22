import * as rp from 'request-promise';

import * as copy from '../utils/copy';
import * as validator from '../utils/validator';
import { sprintf } from 'sprintf-js';
import { PaymentData, PaymentConfirmData } from '../utils/dataSchemas';

export class Payments {
    options: any;
    constructor(options: any) {
        this.options = options;
    }
    async paymentInitiate(body: PaymentData) {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'POST',
            '/payments/initiate',
            body
        );
        return rp(requestOptions);
    }
    async paymentConfirm(body: PaymentConfirmData) {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'POST',
            '/payments/confirm',
            body
        );
        return rp(requestOptions);
    }
}
