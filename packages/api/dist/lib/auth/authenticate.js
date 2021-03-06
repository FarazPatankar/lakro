"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.authenticateUserCookieSession = void 0;
var client_1 = require("@prisma/client");
var faker_1 = __importDefault(require("@faker-js/faker"));
var axios_1 = __importDefault(require("axios"));
var prisma = new client_1.PrismaClient();
var authenticateUserCookieSession = function (req, reply) { return __awaiter(void 0, void 0, void 0, function () {
    var token, data, user, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                token = req.cookies['lakro-token'];
                if (!token) {
                    return [2 /*return*/, reply
                            .status(401)
                            .send({ success: false, error: 'Cookie not found.' })];
                }
                return [4 /*yield*/, axios_1["default"].get('https://www.googleapis.com/oauth2/v3/userinfo', {
                        headers: {
                            Authorization: "Bearer ".concat(token)
                        }
                    })];
            case 1:
                data = (_a.sent()).data;
                return [4 /*yield*/, prisma.user.findUnique({
                        where: { email: data.email }
                    })];
            case 2:
                user = _a.sent();
                if (!!user) return [3 /*break*/, 4];
                return [4 /*yield*/, prisma.user.create({
                        data: {
                            id: data.sub,
                            picture: data.picture,
                            email_verified: data.email_verified,
                            username: "".concat(data.name.toLowerCase()).concat(faker_1["default"].datatype.number()).trim(),
                            location: 'London, England',
                            locale: data.locale,
                            email: data.email,
                            name: data.name
                        }
                    })];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                req.email = data.email;
                req.id = user === null || user === void 0 ? void 0 : user.id;
                req.token = token;
                return [2 /*return*/, data];
            case 5:
                err_1 = _a.sent();
                req.token = undefined;
                console.log(err_1);
                return [2 /*return*/, reply.status(401).send({
                        success: false,
                        error: 'Invalid token'
                    })];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.authenticateUserCookieSession = authenticateUserCookieSession;
//# sourceMappingURL=authenticate.js.map