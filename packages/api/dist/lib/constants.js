"use strict";
var _a;
exports.__esModule = true;
exports.API_URL = exports.PORT = void 0;
exports.PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
exports.API_URL = process.env.API_URL
    ? "".concat(process.env.API_URL, "/v1")
    : 'http://localhost:8000/v1';
//# sourceMappingURL=constants.js.map