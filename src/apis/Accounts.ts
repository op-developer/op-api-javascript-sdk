import { Options } from '../utils/DataSchemas';
import request from '../utils/request';

export default class Accounts {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getAll() {
        return request('GET', `/${this.options.version}/accounts`, this.options);
    }
    async getById(accountId: String) {
        return request('GET', `/${this.options.version}/accounts/${accountId}`, this.options);
    }
    async getTransactions(accountId: String) {
        return request('GET', `/${this.options.version}/accounts/${accountId}/transactions`, this.options);
    }
    async getTransactionsById(accountId: String, transactionId: String) {
        return request('GET', `/${this.options.version}/accounts/${accountId}/transactions/${transactionId}`, this.options);
    }
}
