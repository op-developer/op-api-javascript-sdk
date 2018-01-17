"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var validator = require("../utils/validator");
var Holdings = /** @class */ (function () {
    function Holdings(options) {
        this.options = options;
    }
    Holdings.prototype.getHoldings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var path = '/holdings';
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
    return Holdings;
}());
exports.Holdings = Holdings;
