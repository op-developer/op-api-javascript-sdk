import axios from 'axios';

import * as validator from '../utils/validator';
import * as copy from '../utils/copy';
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
        return axios(requestOptions);
    }
    async postSubscription(data: FundOrderRequest, isinCode: String) {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'POST',
            `/funds/${isinCode}/subscriptions`,
            data
        );
        return axios(requestOptions);
    }
    async postRedemption(data: FundOrderRequest, isinCode: String) {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'POST',
            `/funds/${isinCode}/redemptions`,
            data
        );
        return axios(requestOptions);
    }
}
