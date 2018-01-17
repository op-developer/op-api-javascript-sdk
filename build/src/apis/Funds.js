"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var validator = require("../utils/validator");
var sprintf_js_1 = require("sprintf-js");
var Funds = /** @class */ (function () {
    function Funds(options) {
        this.options = options;
    }
    Funds.prototype.getFunds = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = '/funds';
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
    Funds.prototype.postSubscription = function (data, fundId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = sprintf_js_1.sprintf('/funds/%s/subscriptions', fundId);
            _this.options['uri'] = path;
            _this.options['body'] = data;
            request.post(_this.options, function (err, res, body) {
                if (!validator.isEmpty(err)) {
                    reject(err);
                }
                resolve(body);
            });
        });
    };
    Funds.prototype.postRedemption = function (data, fundId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = sprintf_js_1.sprintf('/funds/%s/redemptions', fundId);
            _this.options['uri'] = path;
            _this.options['body'] = data;
            request.post(_this.options, function (err, res, body) {
                if (!validator.isEmpty(err)) {
                    reject(err);
                }
                resolve(body);
            });
        });
    };
    return Funds;
}());
exports.Funds = Funds;
