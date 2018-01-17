import * as request from 'request';
import * as validator from '../utils/validator';
import { Holding } from '../utils/dataSchemas';

export class Holdings {
    options: any;
    constructor(options: any) {
        this.options = options;
    }
    getHoldings() {
        return new Promise((resolve, reject) => {
            const path = '/holdings';
            this.options['uri'] = path;
            if (validator.exists(this.options['body'])) {
                this.options['body'] = undefined;
            }
            request.get(
                this.options,
                (err: object, res: object, body: Holding) => {
                    if (!validator.isEmpty(err)) {
                        reject(err);
                    }
                    resolve(body);
                }
            );
        });
    }
}
