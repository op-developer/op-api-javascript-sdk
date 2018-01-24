import axios from 'axios';

import * as copy from '../utils/copy';
import * as validator from '../utils/validator';
import { Holding } from '../utils/dataSchemas';

export class Holdings {
    options: any;
    constructor(options: any) {
        this.options = options;
    }
    async getHoldings() {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            '/holdings'
        );
        return axios(requestOptions);
    }
}
