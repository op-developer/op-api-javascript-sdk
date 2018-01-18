import { sprintf } from 'sprintf-js';
const objectAssignDeep = require(`object-assign-deep`);

import { Funds } from './src/apis/Funds';
import { Holdings } from './src/apis/Holdings';
import { Accounts } from './src/apis/Accounts';
import { Payments } from './src/apis/payments';
import * as dataSchemas from './src/utils/DataSchemas';

const config = require('../config.json');

export class Client {
    options: dataSchemas.Options;

    constructor(options?: object) {
        const defaultOptions = {
            headers: {
                'x-request-id': '',
                'x-session-id': '',
                'x-authorization': '',
                'x-api-key': ''
            },
            baseUrl: sprintf('%s/%s', config.API.baseUrl, config.API.version),
            timeout: config.API.timeout,
            uri: '',
            json: true
        };
        this.options = objectAssignDeep({}, defaultOptions, options);
        //this.options = Object.assign({}, defaultOptions, options);
    }

    getAllAccounts(
        options?: dataSchemas.Options,
        headers?: dataSchemas.Headers
    ) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Accounts(this.options).getAllAccounts();
    }
    getAccountById(
        accountId: String,
        options?: dataSchemas.Options,
        headers?: dataSchemas.Headers
    ) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Accounts(this.options).getAccountById(accountId);
    }
    getAccountsTransactions(
        accountId: String,
        options?: dataSchemas.Options,
        headers?: dataSchemas.Headers
    ) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Accounts(this.options).getAccountsTransactions(accountId);
    }
    getAccountsTransactionsById(
        accountId: String,
        transactionId: String,
        options?: dataSchemas.Options,
        headers?: dataSchemas.Headers
    ) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Accounts(this.options).getAccountTransactionsById(
            accountId,
            transactionId
        );
    }
    getFunds(options?: dataSchemas.Options, headers?: dataSchemas.Headers) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Funds(this.options).getFunds();
    }
    getHoldings(options?: dataSchemas.Options, headers?: dataSchemas.Headers) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Holdings(this.options).getHoldings();
    }
    postSubscriptions(
        body: dataSchemas.FundOrderRequest,
        fundId: String,
        options?: dataSchemas.Options,
        headers?: dataSchemas.Headers
    ) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Funds(this.options).postSubscription(body, fundId);
    }
    postRedemptions(
        body: dataSchemas.FundOrderRequest,
        fundId: String,
        options?: dataSchemas.Options,
        headers?: dataSchemas.Headers
    ) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Funds(this.options).postRedemption(body, fundId);
    }
    postPaymentInitiate(
        data: dataSchemas.PaymentData,
        options?: dataSchemas.Options,
        headers?: dataSchemas.Headers
    ) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Payments(this.options).paymentInitiate(data);
    }
    postPaymentConfirm(
        data: dataSchemas.PaymentConfirmData,
        options?: dataSchemas.Options,
        headers?: dataSchemas.Headers
    ) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Payments(this.options).paymentConfirm(data);
    }
}
