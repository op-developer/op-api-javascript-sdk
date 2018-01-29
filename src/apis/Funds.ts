import axios from 'axios';

import { FundOrderRequest, Options } from '../utils/dataSchemas';

export default class Funds {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getFunds() {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: '/funds'
        });
        return axios(requestOptions);
    }
    async postSubscription(data: FundOrderRequest, isinCode: String) {
        const requestOptions = Object.assign({}, this.options, {
            method: 'POST',
            url: `/funds/${isinCode}/subscriptions`,
            data: data
        });
        return axios(requestOptions);
    }
    async postRedemption(data: FundOrderRequest, isinCode: String) {
        const requestOptions = Object.assign({}, this.options, {
            method: 'POST',
            url: `/funds/${isinCode}/redemptions`,
            data: data
        });
        return axios(requestOptions);
    }
}
