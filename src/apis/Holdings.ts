import axios from 'axios';

import { Options } from '../utils/dataSchemas';

export default class Holdings {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getHoldings() {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: '/holdings'
        });
        return axios(requestOptions);
    }
}
