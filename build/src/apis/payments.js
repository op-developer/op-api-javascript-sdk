"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var validator = require("../utils/validator");
var Payments = /** @class */ (function () {
    function Payments(options) {
        this.options = options;
    }
    Payments.prototype.paymentInitiate = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = '/payments/initiate';
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
    Payments.prototype.paymentConfirm = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = '/payments/confirm';
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
    return Payments;
}());
exports.Payments = Payments;
