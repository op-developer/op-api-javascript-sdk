import axios from 'axios';

import * as copy from '../utils/copy';
import { Options } from '../utils/dataSchemas';

export default class Holdings {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getHoldings() {
        const requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            '/holdings'
        );
        return axios(requestOptions);
    }
}
