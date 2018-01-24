import axios from 'axios';

import * as validator from '../utils/validator';
import * as copy from '../utils/copy';
import { sprintf } from 'sprintf-js';
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
            sprintf('/accounts/%s', accountId)
        );
        return axios(requestOptions);
    }
    async getAccountsTransactions(accountId: String) {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            sprintf('/accounts/%s/transactions', accountId)
        );
        return axios(requestOptions);
    }
    async getAccountTransactionsById(accountId: String, transactionId: String) {
        let requestOptions = await copy.modifyOptions(
            this.options,
            'GET',
            sprintf('/accounts/%s/transactions/%s', accountId, transactionId)
        );
        return axios(requestOptions);
    }
}
