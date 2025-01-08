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
const chai_1 = require("chai");
const nock_1 = __importDefault(require("nock"));
const findServer_route_1 = require("../routes/findServer.route");
describe('findServer', () => {
    afterEach(() => {
        nock_1.default.cleanAll();
    });
    it('should return the online server with the lowest priority', () => __awaiter(void 0, void 0, void 0, function* () {
        const servers = [
            { url: 'http://server1.com', priority: 1 },
            { url: 'http://server2.com', priority: 2 },
            { url: 'http://server3.com', priority: 3 }
        ];
        (0, nock_1.default)('http://server1.com').get('/').reply(200);
        (0, nock_1.default)('http://server2.com').get('/').reply(200);
        (0, nock_1.default)('http://server3.com').get('/').reply(200);
        const result = yield (0, findServer_route_1.findServer)(servers);
        (0, chai_1.expect)(result).to.deep.equal({ url: 'http://server1.com', priority: 1 });
    }));
    it('should return the online server with the lowest priority when some servers are offline', () => __awaiter(void 0, void 0, void 0, function* () {
        const servers = [
            { url: 'http://server1.com', priority: 1 },
            { url: 'http://server2.com', priority: 2 },
            { url: 'http://server3.com', priority: 3 }
        ];
        (0, nock_1.default)('http://server1.com').get('/').reply(500);
        (0, nock_1.default)('http://server2.com').get('/').reply(200);
        (0, nock_1.default)('http://server3.com').get('/').reply(200);
        const result = yield (0, findServer_route_1.findServer)(servers);
        (0, chai_1.expect)(result).to.deep.equal({ url: 'http://server2.com', priority: 2 });
    }));
    it('should reject with an error if no servers are online', () => __awaiter(void 0, void 0, void 0, function* () {
        const servers = [
            { url: 'http://server1.com', priority: 1 },
            { url: 'http://server2.com', priority: 2 },
            { url: 'http://server3.com', priority: 3 }
        ];
        (0, nock_1.default)('http://server1.com').get('/').reply(500);
        (0, nock_1.default)('http://server2.com').get('/').reply(500);
        (0, nock_1.default)('http://server3.com').get('/').reply(500);
        try {
            yield (0, findServer_route_1.findServer)(servers);
        }
        catch (error) {
            (0, chai_1.expect)(error).to.be.an('error');
        }
    }));
    it('should timeout after 5 seconds if the server does not respond', () => __awaiter(void 0, void 0, void 0, function* () {
        const servers = [
            { url: 'http://server1.com', priority: 1 },
            { url: 'http://server2.com', priority: 2 },
            { url: 'http://server3.com', priority: 3 }
        ];
        (0, nock_1.default)('http://server1.com').get('/').delay(6000).reply(200);
        (0, nock_1.default)('http://server2.com').get('/').reply(200);
        (0, nock_1.default)('http://server3.com').get('/').reply(200);
        const result = yield (0, findServer_route_1.findServer)(servers);
        (0, chai_1.expect)(result).to.deep.equal({ url: 'http://server2.com', priority: 2 });
    }));
});
