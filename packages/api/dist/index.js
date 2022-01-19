"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fastify_1 = __importDefault(require("fastify"));
var fastify_cors_1 = __importDefault(require("fastify-cors"));
var fastify_autoload_1 = __importDefault(require("fastify-autoload"));
var fastify_oauth2_1 = __importDefault(require("fastify-oauth2"));
var fastify_cookie_1 = __importDefault(require("fastify-cookie"));
var path_1 = require("path");
var constants_1 = require("./lib/constants");
require("dotenv/config");
var fastify = (0, fastify_1["default"])();
fastify.register(fastify_cookie_1["default"]);
fastify.register(fastify_autoload_1["default"], {
    dir: (0, path_1.join)(__dirname, './routes'),
    options: { prefix: '/v1' }
});
fastify.register(fastify_cors_1["default"], {
    credentials: true,
    origin: ['https://lakro.app', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
});
fastify.register(fastify_oauth2_1["default"], {
    name: 'googleOAuth2',
    scope: ['profile email'],
    credentials: {
        auth: fastify_oauth2_1["default"].GOOGLE_CONFIGURATION,
        client: {
            id: process.env.GOOGLE_OAUTH_CLIENT_ID,
            secret: process.env.GOOGLE_CLIENT_SECRET
        }
    },
    startRedirectPath: "/v1/auth/google",
    callbackUri: "".concat(constants_1.API_URL, "/auth/google/callback")
});
fastify.get('/', function (req, reply) {
    reply.send({
        success: true,
        info: {
            package: 'api',
            version: '1.0.0'
        }
    });
});
fastify.listen(constants_1.PORT, function (error, address) {
    if (error)
        throw error;
    console.log("Lakro API running on port ".concat(address));
});
//# sourceMappingURL=index.js.map