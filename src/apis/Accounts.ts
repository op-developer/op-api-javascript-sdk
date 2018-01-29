import axios from 'axios';

import { Options } from '../utils/dataSchemas';

export default class Accounts {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getAllAccounts() {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: '/accounts'
        });
        return axios(requestOptions);
    }
    async getAccountById(accountId: String) {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/accounts/${accountId}`
        });
        return axios(requestOptions);
    }
    async getAccountsTransactions(accountId: String) {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/accounts/${accountId}/transactions`
        });
        return axios(requestOptions);
    }
    async getAccountTransactionsById(accountId: String, transactionId: String) {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/accounts/${accountId}/transactions/${transactionId}`
        });
        return axios(requestOptions);
    }
}
