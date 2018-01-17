import * as request from 'request';
import * as validator from '../utils/validator';
import { sprintf } from 'sprintf-js';
import {
    Fund,
    FundOrderRequest,
    FundOrderResponse
} from '../utils/dataSchemas';

export class Funds {
    options: any;
    constructor(options: any) {
        this.options = options;
    }
    getFunds() {
        return new Promise((resolve, reject) => {
            const path = '/funds';
            this.options['uri'] = path;
            if (validator.exists(this.options['body'])) {
                this.options['body'] = undefined;
            }
            request.get(
                this.options,
                (err: object, res: object, body: Array<Fund>) => {
                    if (!validator.isEmpty(err)) {
                        reject(err);
                    }
                    resolve(body);
                }
            );
        });
    }
    postSubscription(data: FundOrderRequest, fundId: String) {
        return new Promise((resolve, reject) => {
            const path = sprintf('/funds/%s/subscriptions', fundId);
            this.options['uri'] = path;
            this.options['body'] = data;
            request.post(
                this.options,
                (err: object, res: object, body: FundOrderResponse) => {
                    if (!validator.isEmpty(err)) {
                        reject(err);
                    }
                    resolve(body);
                }
            );
        });
    }
    postRedemption(data: FundOrderRequest, fundId: String) {
        return new Promise((resolve, reject) => {
            const path = sprintf('/funds/%s/redemptions', fundId);
            this.options['uri'] = path;
            this.options['body'] = data;
            request.post(
                this.options,
                (err: object, res: object, body: FundOrderResponse) => {
                    if (!validator.isEmpty(err)) {
                        reject(err);
                    }
                    resolve(body);
                }
            );
        });
    }
}
