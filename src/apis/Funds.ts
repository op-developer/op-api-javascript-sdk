import axios from 'axios';

import * as copy from '../utils/copy';
import { FundOrderRequest, Options } from '../utils/dataSchemas';

export default class Funds {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getFunds() {
        const requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            '/funds'
        );
        return axios(requestOptions);
    }
    async postSubscription(data: FundOrderRequest, isinCode: String) {
        const requestOptions = await copy.modifyOptions(
            this.options,
            'POST',
            `/funds/${isinCode}/subscriptions`,
            data
        );
        return axios(requestOptions);
    }
    async postRedemption(data: FundOrderRequest, isinCode: String) {
        const requestOptions = await copy.modifyOptions(
            this.options,
            'POST',
            `/funds/${isinCode}/redemptions`,
            data
        );
        return axios(requestOptions);
    }
}
