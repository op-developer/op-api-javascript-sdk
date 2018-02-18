import { Options } from '../utils/DataSchemas';
import request from '../utils/request';

export default class Holdings {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getHoldings() {
        return request('GET', `/${this.options.version}/holdings`, this.options);
    }
}
