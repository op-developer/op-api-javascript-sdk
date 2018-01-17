"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEmpty(input) {
    if (input === null || input === undefined || input === '')
        return true;
    return false;
}
exports.isEmpty = isEmpty;
function exists(input) {
    if (input === null || input === undefined)
        return false;
    return true;
}
exports.exists = exists;
