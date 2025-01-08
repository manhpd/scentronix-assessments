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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findServer = void 0;
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const router = (0, express_1.Router)();
const servers = [
    {
        url: "https://does-not-work.perfume.new",
        priority: 1
    },
    {
        url: "https://gitlab.com",
        priority: 4
    },
    {
        url: "http://app.scnt.me",
        priority: 3
    },
    {
        url: "https://offline.scentronix.com",
        priority: 2
    }
];
const findServer = (servers) => __awaiter(void 0, void 0, void 0, function* () {
    const checkServer = (server) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(server.url, { timeout: 5000 });
            return response.status >= 200 && response.status < 300;
        }
        catch (error) {
            return false;
        }
    });
    const serverStatuses = yield Promise.all(servers.map((server) => __awaiter(void 0, void 0, void 0, function* () {
        return ({
            server,
            online: yield checkServer(server)
        });
    })));
    const onlineServers = serverStatuses.filter(status => status.online);
    if (onlineServers.length === 0) {
        throw new Error('No servers are online');
    }
    onlineServers.sort((a, b) => a.server.priority - b.server.priority);
    return onlineServers[0].server;
});
exports.findServer = findServer;
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const server = yield (0, exports.findServer)(servers);
        console.log(server);
        res.json(server);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
exports.default = router;
