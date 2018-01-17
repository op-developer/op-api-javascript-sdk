"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sprintf_js_1 = require("sprintf-js");
var Funds_1 = require("./src/apis/Funds");
var Holdings_1 = require("./src/apis/Holdings");
var Accounts_1 = require("./src/apis/Accounts");
var payments_1 = require("./src/apis/payments");
var config = require('./config.json');
var Client = /** @class */ (function () {
    function Client(options) {
        var defaultOptions = {
            headers: {
                'x-request-id': '',
                'x-session-id': '',
                'x-authorization': '',
                'x-api-key': ''
            },
            baseUrl: sprintf_js_1.sprintf('%s/%s', config.API.baseUrl, config.API.version),
            timeout: config.API.timeout,
            uri: '',
            json: true
        };
        this.options = Object.assign({}, defaultOptions, options);
    }
    Client.prototype.getAllAccounts = function (options, headers) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Accounts_1.Accounts(this.options).getAllAccounts();
    };
    Client.prototype.getAccountById = function (accountId, options, headers) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Accounts_1.Accounts(this.options).getAccountById(accountId);
    };
    Client.prototype.getAccountsTransactions = function (accountId, options, headers) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Accounts_1.Accounts(this.options).getAccountsTransactions(accountId);
    };
    Client.prototype.getAccountsTransactionsById = function (accountId, transactionId, options, headers) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Accounts_1.Accounts(this.options).getAccountTransactionsById(accountId, transactionId);
    };
    Client.prototype.getFunds = function (options, headers) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Funds_1.Funds(this.options).getFunds();
    };
    Client.prototype.getHoldings = function (options, headers) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Holdings_1.Holdings(this.options).getHoldings();
    };
    Client.prototype.postSubscriptions = function (body, fundId, options, headers) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Funds_1.Funds(this.options).postSubscription(body, fundId);
    };
    Client.prototype.postRedemptions = function (body, fundId, options, headers) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new Funds_1.Funds(this.options).postRedemption(body, fundId);
    };
    Client.prototype.postPaymentInitiate = function (data, options, headers) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new payments_1.Payments(this.options).paymentInitiate(data);
    };
    Client.prototype.postPaymentConfirm = function (data, options, headers) {
        Object.assign(this.options, options);
        Object.assign(this.options.headers, headers);
        return new payments_1.Payments(this.options).paymentConfirm(data);
    };
    return Client;
}());
exports.Client = Client;
