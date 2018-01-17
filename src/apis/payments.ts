import * as request from 'request';
import * as validator from '../utils/validator';
import { sprintf } from 'sprintf-js';
import { PaymentData, PaymentConfirmData } from '../utils/dataSchemas';

export class Payments {
    options: any;
    constructor(options: any) {
        this.options = options;
    }
    paymentInitiate(data: PaymentData) {
        return new Promise((resolve, reject) => {
            const path = '/payments/initiate';
            this.options['uri'] = path;
            this.options['body'] = data;
            request.post(
                this.options,
                (err: object, res: object, body: PaymentData) => {
                    if (!validator.isEmpty(err)) {
                        reject(err);
                    }
                    resolve(body);
                }
            );
        });
    }
    paymentConfirm(data: PaymentConfirmData) {
        return new Promise((resolve, reject) => {
            const path = '/payments/confirm';
            this.options['uri'] = path;
            this.options['body'] = data;
            request.post(
                this.options,
                (err: object, res: object, body: PaymentData) => {
                    if (!validator.isEmpty(err)) {
                        reject(err);
                    }
                    resolve(body);
                }
            );
        });
    }
}
