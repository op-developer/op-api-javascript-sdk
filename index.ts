const objectAssignDeep = require(`object-assign-deep`);

import Funds from './src/apis/Funds';
import Holdings from './src/apis/Holdings';
import Accounts from './src/apis/Accounts';
import Payments from './src/apis/Payments';
import * as dataSchemas from './src/utils/DataSchemas';
import Mobility from './src/apis/Mobility';

const config = require('./config');

export class Client {
    options: dataSchemas.Options;
    /**
     * Initiate client instance
     * @param options Optional. Set options for HTTP requests
     */
    constructor(options?: dataSchemas.Options) {
        const defaultOptions = {
            headers: {
                'x-api-key': ''
            },
            baseURL: `${config.baseUrl}`,
            version: `${config.version}`,
            timeout: config.timeout,
            responseType: 'json'
        };
        this.options = objectAssignDeep({}, defaultOptions, options);
    }
    /**
     * Get all accounts
     * @param options Optional. Set options for HTTP requests
     */
    getAllAccounts(options?: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Accounts(requestOptions).getAll();
    }
    /**
     * Get account by account id
     * @param accountId Account id
     * @param options Optional. Set options for HTTP requests
     */
    getAccountById(accountId: String, options?: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Accounts(requestOptions).getById(accountId);
    }
    /**
     * Get account's transactions
     * @param accountId Account id
     * @param options Optional. Set options for HTTP requests
     */
    getAccountTransactions(accountId: String, options?: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Accounts(requestOptions).getTransactions(accountId);
    }
    /**
     * Get single transaction.
     * @param accountId Account id
     * @param transactionId Transaction id
     * @param options Optional. Set options for HTTP requests
     */
    getAccountsTransactionById(
        accountId: String,
        transactionId: String,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Accounts(requestOptions).getTransactionsById(
            accountId,
            transactionId
        );
    }
    /**
     * Get information of all available funds
     * @param options Optional. Set options for HTTP requests
     */
    getFunds(options?: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Funds(requestOptions).getFunds();
    }
    /**
     * Get customers holdings of funds.
     * @param options Optional. Set options for HTTP requests
     */
    getHoldings(options?: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Holdings(requestOptions).getHoldings();
    }
    /**
     * Post subscription order ie. buy funds
     * @param body Body of order
     * @param isinCode Isin code of fund
     * @param options Optional. Set options for HTTP requests
     */
    postSubscription(
        body: dataSchemas.FundOrderRequest,
        isinCode: String,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Funds(requestOptions).postSubscription(body, isinCode);
    }
    /**
     * Post redemption order ie. sell funds
     * @param body Body of order
     * @param isinCode Isin code of fund
     * @param options Optional. Set options for HTTP requests
     */
    postRedemption(
        body: dataSchemas.FundOrderRequest,
        isinCode: String,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Funds(requestOptions).postRedemption(body, isinCode);
    }
    /**
     * Initiate payment with payment information. Returns payment with confirmation id.
     * @param body Body of payment
     * @param options Optional. Set options for HTTP requests
     */
    postPaymentInitiate(
        body: dataSchemas.PaymentData,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Payments(requestOptions).initiate(body);
    }
    /**
     * Confirms initiated payment.
     * @param body Body of payment
     * @param options Optional. Set options for HTTP requests
     */
    postPaymentConfirm(
        body: dataSchemas.PaymentConfirmData,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Payments(requestOptions).confirm(body);
    }
    getBranches(options: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Mobility(requestOptions).getBranches();
    }
    getBranchesAsJson(options: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Mobility(requestOptions).getBranchesAsJson();
    }
    getBranchesAsGeoJson(options: dataSchemas.Options) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Mobility(requestOptions).getBranchesAsGeoJson();
    }
}
