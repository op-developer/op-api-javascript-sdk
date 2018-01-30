import axios from 'axios';

import { FundOrderRequest, Options } from '../utils/DataSchemas';

export default class Funds {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getFunds() {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/${this.options.version}/funds`
        });
        return axios(requestOptions);
    }
    async postSubscription(data: FundOrderRequest, isinCode: String) {
        const requestOptions = Object.assign({}, this.options, {
            method: 'POST',
            url: `/${this.options.version}/funds/${isinCode}/subscriptions`,
            data: data
        });
        return axios(requestOptions);
    }
    async postRedemption(data: FundOrderRequest, isinCode: String) {
        const requestOptions = Object.assign({}, this.options, {
            method: 'POST',
            url: `/${this.options.version}/funds/${isinCode}/redemptions`,
            data: data
        });
        return axios(requestOptions);
    }
}
