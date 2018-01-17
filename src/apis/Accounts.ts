import * as request from 'request';
import * as validator from '../utils/validator';
import { sprintf } from 'sprintf-js';
import { AccountType, Transaction } from '../utils/dataSchemas';

export class Accounts {
    options: any;
    constructor(options: any) {
        this.options = options;
    }
    getAllAccounts() {
        return new Promise((resolve, reject) => {
            const path = '/accounts';
            this.options['uri'] = path;
            if (validator.exists(this.options['body'])) {
                this.options['body'] = undefined;
            }
            request.get(
                this.options,
                (err: object, res: object, body: Array<AccountType>) => {
                    if (!validator.isEmpty(err)) {
                        reject(err);
                    }
                    resolve(body);
                }
            );
        });
    }
    getAccountById(accountId: String) {
        return new Promise((resolve, reject) => {
            const path = sprintf('/accounts/%s', accountId);
            this.options['uri'] = path;
            if (validator.exists(this.options['body'])) {
                this.options['body'] = undefined;
            }
            request.get(
                this.options,
                (err: object, res: object, body: AccountType) => {
                    if (!validator.isEmpty(err)) {
                        reject(err);
                    }
                    resolve(body);
                }
            );
        });
    }
    getAccountsTransactions(accountId: String) {
        return new Promise((resolve, reject) => {
            const path = sprintf('/accounts/%s/transactions', accountId);
            this.options['uri'] = path;
            if (validator.exists(this.options['body'])) {
                this.options['body'] = undefined;
            }
            request.get(
                this.options,
                (err: any, res: object, body: Array<Transaction>) => {
                    if (!validator.isEmpty(err)) {
                        reject(err);
                    }
                    resolve(body);
                }
            );
        });
    }
    getAccountTransactionsById(accountId: String, transactionId: String) {
        return new Promise((resolve, reject) => {
            const path = sprintf(
                '/accounts/%s/transactions/%s',
                accountId,
                transactionId
            );
            this.options['uri'] = path;
            if (validator.exists(this.options['body'])) {
                this.options['body'] = undefined;
            }
            request.get(
                this.options,
                (err: object, res: object, body: Transaction) => {
                    if (!validator.isEmpty(err)) {
                        reject(err);
                    }
                    resolve(body);
                }
            );
        });
    }
}
