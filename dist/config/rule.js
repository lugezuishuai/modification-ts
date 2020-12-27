"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = void 0;
exports.Rule = {
    ProjectRule: (url) => url.replace(`'/document/`, '/').replace(/'$/, ''),
    FileRule: (url) => url.trim()
};
