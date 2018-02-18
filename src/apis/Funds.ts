import { FundOrderRequest, Options } from '../utils/DataSchemas';
import request from "../utils/request";

export default class Funds {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getFunds() {
        return request('GET', `/${this.options.version}/funds`, this.options);
    }
    async postSubscription(data: FundOrderRequest, isinCode: String) {
        const requestOptions: Options = {
            ...this.options,
            data: data
        };
        return request('POST', `/${this.options.version}/funds/${isinCode}/subscriptions`, requestOptions);
    }
    async postRedemption(data: FundOrderRequest, isinCode: String) {
        const requestOptions: Options = {
            ...this.options,
            data: data
        };
        return request('POST', `/${this.options.version}/funds/${isinCode}/redemptions`, requestOptions);
    }
}
