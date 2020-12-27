"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function getInvalidUrls(path, regExp, rule) {
    try {
        const data = fs_1.default.readFileSync(path, 'utf-8');
        if (regExp.test(data)) {
            return data.match(regExp).map(rule);
        }
    }
    catch (err) {
        console.log('Error: ', err);
    }
}
exports.default = getInvalidUrls;
