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
                'x-api-key': ''
            },
            baseUrl: sprintf('%s/%s', config.API.baseUrl, config.API.version),
            timeout: config.API.timeout,
            uri: '',
            json: true
        };
        this.options = objectAssignDeep({}, defaultOptions, options);
    }

    getAllAccounts(options?: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Accounts(requestOptions).getAllAccounts();
    }
    getAccountById(accountId: String, options?: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Accounts(requestOptions).getAccountById(accountId);
    }
    getAccountsTransactions(accountId: String, options?: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Accounts(requestOptions).getAccountsTransactions(accountId);
    }
    getAccountsTransactionById(
        accountId: String,
        transactionId: String,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Accounts(requestOptions).getAccountTransactionsById(
            accountId,
            transactionId
        );
    }
    getFunds(options?: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Funds(requestOptions).getFunds();
    }
    getHoldings(options?: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Holdings(requestOptions).getHoldings();
    }
    postSubscription(
        body: dataSchemas.FundOrderRequest,
        isinCode: String,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Funds(requestOptions).postSubscription(body, isinCode);
    }
    postRedemption(
        body: dataSchemas.FundOrderRequest,
        isinCode: String,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Funds(requestOptions).postRedemption(body, isinCode);
    }
    postPaymentInitiate(
        body: dataSchemas.PaymentData,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Payments(requestOptions).paymentInitiate(body);
    }
    postPaymentConfirm(
        body: dataSchemas.PaymentConfirmData,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Payments(requestOptions).paymentConfirm(body);
    }
}
