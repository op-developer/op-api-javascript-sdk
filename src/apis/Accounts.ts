import axios from 'axios';

import * as validator from '../utils/validator';
import * as copy from '../utils/copy';
import { AccountType, Transaction } from '../utils/dataSchemas';

export class Accounts {
    options: any;
    constructor(options: any) {
        this.options = options;
    }
    async getAllAccounts() {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            '/accounts'
        );
        return axios(requestOptions);
    }
    async getAccountById(accountId: String) {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            `/accounts/${accountId}`
        );
        return axios(requestOptions);
    }
    async getAccountsTransactions(accountId: String) {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            `/accounts/${accountId}/transactions`
        );
        return axios(requestOptions);
    }
    async getAccountTransactionsById(accountId: String, transactionId: String) {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            `/accounts/${accountId}/transactions/${transactionId}`
        );
        return axios(requestOptions);
    }
}
