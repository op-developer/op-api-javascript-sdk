import axios from 'axios';

import * as copy from '../utils/copy';
import { Options } from '../utils/dataSchemas';

export default class Accounts {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getAllAccounts() {
        const requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            '/accounts'
        );
        return axios(requestOptions);
    }
    async getAccountById(accountId: String) {
        const requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            `/accounts/${accountId}`
        );
        return axios(requestOptions);
    }
    async getAccountsTransactions(accountId: String) {
        const requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            `/accounts/${accountId}/transactions`
        );
        return axios(requestOptions);
    }
    async getAccountTransactionsById(accountId: String, transactionId: String) {
        const requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            `/accounts/${accountId}/transactions/${transactionId}`
        );
        return axios(requestOptions);
    }
}
