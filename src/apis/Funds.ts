import * as rp from 'request-promise';

import * as validator from '../utils/validator';
import * as copy from '../utils/copy';
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
    async getFunds() {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            '/funds'
        );
        return rp(requestOptions);
    }
    async postSubscription(data: FundOrderRequest, fundId: String) {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'POST',
            sprintf('/funds/%s/subscriptions', fundId),
            data
        );
        return rp(requestOptions);
    }
    async postRedemption(data: FundOrderRequest, fundId: String) {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'POST',
            sprintf('/funds/%s/redemptions', fundId),
            data
        );
        return rp(requestOptions);
    }
}
