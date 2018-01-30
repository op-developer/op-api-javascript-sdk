import axios from 'axios';

import { Options } from '../utils/DataSchemas';

export default class Accounts {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getAll() {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/${this.options.version}/accounts`
        });
        return axios(requestOptions);
    }
    async getById(accountId: String) {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/${this.options.version}/accounts/${accountId}`
        });
        return axios(requestOptions);
    }
    async getTransactions(accountId: String) {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/${this.options.version}/accounts/${accountId}/transactions`
        });
        return axios(requestOptions);
    }
    async getTransactionsById(accountId: String, transactionId: String) {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/${
                this.options.version
            }/accounts/${accountId}/transactions/${transactionId}`
        });
        return axios(requestOptions);
    }
}
