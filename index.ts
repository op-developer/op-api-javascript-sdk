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
            headers: {},
            baseURL: config.baseUrl,
            version: config.version,
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
    getAccountTransactions(
        accountId: String,
        enriched?: boolean,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Accounts(requestOptions).getTransactions(
            accountId,
            enriched
        );
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
        enriched?: boolean,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Accounts(requestOptions).getTransactionsById(
            accountId,
            transactionId,
            enriched
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
     * Initiate payment with payment information
     * @param body Body of payment
     * @param options Optional. Set options for HTTP requests
     * @returns Payment with confirmation id.
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
     * @param {body} body Body of payment
     * @param {options} options Optional. Set options for HTTP requests
     */
    postPaymentConfirm(
        body: dataSchemas.PaymentConfirmData,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Payments(requestOptions).confirm(body);
    }

    /**
     * Create transfer between owned accounts
     * @param body Body of transfer
     * @param options Optional. Set options for HTTP requests
     * @returns Response body of transfer
     */
    postTransfer(
        body: dataSchemas.TransferData,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Payments(requestOptions).transfer(body);
    }

    /**
     * Find OP branch offices as JSON or GeoJSON
     * @param bbox Bounding Box filter by coordinates of southwest and northeast point: sw-lon, sw-lat, ne-lon, ne-lat
     * @param location Coordinates of location for sorting the results from nearest to farthest: lon, lat
     * @param query Free-text search terms
     * @param options Optional. Set options for HTTP requests
     */
    getBranches(
        bbox?: string,
        location?: string,
        query?: string,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Mobility(requestOptions).getBranches(bbox, location, query);
    }

    /**
     * Find OP branch offices as JSON
     * @param bbox Bounding Box filter by coordinates of southwest and northeast point: sw-lon, sw-lat, ne-lon, ne-lat
     * @param location Coordinates of location for sorting the results from nearest to farthest: lon, lat
     * @param query Free-text search terms
     * @param options Optional. Set options for HTTP requests
     */
    getBranchesAsJson(
        bbox?: string,
        location?: string,
        query?: string,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Mobility(requestOptions).getBranchesAsJson(
            bbox,
            location,
            query
        );
    }

    /**
     * Find OP branch offices as GeoJSON
     * @param bbox Bounding Box filter by coordinates of southwest and northeast point: sw-lon, sw-lat, ne-lon, ne-lat
     * @param location Coordinates of location for sorting the results from nearest to farthest: lon, lat
     * @param query Free-text search terms
     * @param options Optional. Set options for HTTP requests
     */
    getBranchesAsGeoJson(
        bbox?: string,
        location?: string,
        query?: string,
        options?: dataSchemas.Options
    ) {
        let requestOptions = objectAssignDeep({}, this.options, options);
        return new Mobility(requestOptions).getBranchesAsGeoJson(
            bbox,
            location,
            query
        );
    }
}
