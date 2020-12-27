"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Map中通过value找到key
function getKeyByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
        if (value === searchValue)
            return key;
    }
}
exports.default = getKeyByValue;
