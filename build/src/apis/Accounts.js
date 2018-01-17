"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var validator = require("../utils/validator");
var sprintf_js_1 = require("sprintf-js");
var Accounts = /** @class */ (function () {
    function Accounts(options) {
        this.options = options;
    }
    Accounts.prototype.getAllAccounts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = '/accounts';
            _this.options['uri'] = path;
            if (validator.exists(_this.options['body'])) {
                _this.options['body'] = undefined;
            }
            request.get(_this.options, function (err, res, body) {
                if (!validator.isEmpty(err)) {
                    reject(err);
                }
                resolve(body);
            });
        });
    };
    Accounts.prototype.getAccountById = function (accountId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = sprintf_js_1.sprintf('/accounts/%s', accountId);
            _this.options['uri'] = path;
            if (validator.exists(_this.options['body'])) {
                _this.options['body'] = undefined;
            }
            request.get(_this.options, function (err, res, body) {
                if (!validator.isEmpty(err)) {
                    reject(err);
                }
                resolve(body);
            });
        });
    };
    Accounts.prototype.getAccountsTransactions = function (accountId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = sprintf_js_1.sprintf('/accounts/%s/transactions', accountId);
            _this.options['uri'] = path;
            if (validator.exists(_this.options['body'])) {
                _this.options['body'] = undefined;
            }
            request.get(_this.options, function (err, res, body) {
                if (!validator.isEmpty(err)) {
                    reject(err);
                }
                resolve(body);
            });
        });
    };
    Accounts.prototype.getAccountTransactionsById = function (accountId, transactionId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = sprintf_js_1.sprintf('/accounts/%s/transactions/%s', accountId, transactionId);
            _this.options['uri'] = path;
            if (validator.exists(_this.options['body'])) {
                _this.options['body'] = undefined;
            }
            request.get(_this.options, function (err, res, body) {
                if (!validator.isEmpty(err)) {
                    reject(err);
                }
                resolve(body);
            });
        });
    };
    return Accounts;
}());
exports.Accounts = Accounts;
