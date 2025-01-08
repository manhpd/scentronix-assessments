import { expect } from 'chai';
import nock from 'nock';
import { findServer } from '../routes/findServer.route';

describe('findServer', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should return the online server with the lowest priority', async () => {
        const servers = [
            { url: 'http://server1.com', priority: 1 },
            { url: 'http://server2.com', priority: 2 },
            { url: 'http://server3.com', priority: 3 }
        ];

        nock('http://server1.com').get('/').reply(200);
        nock('http://server2.com').get('/').reply(200);
        nock('http://server3.com').get('/').reply(200);

        const result = await findServer(servers);
        expect(result).to.deep.equal({ url: 'http://server1.com', priority: 1 });
    });

    it('should return the online server with the lowest priority when some servers are offline', async () => {
        const servers = [
            { url: 'http://server1.com', priority: 1 },
            { url: 'http://server2.com', priority: 2 },
            { url: 'http://server3.com', priority: 3 }
        ];

        nock('http://server1.com').get('/').reply(500);
        nock('http://server2.com').get('/').reply(200);
        nock('http://server3.com').get('/').reply(200);

        const result = await findServer(servers);
        expect(result).to.deep.equal({ url: 'http://server2.com', priority: 2 });
    });

    it('should reject with an error if no servers are online', async () => {
        const servers = [
            { url: 'http://server1.com', priority: 1 },
            { url: 'http://server2.com', priority: 2 },
            { url: 'http://server3.com', priority: 3 }
        ];

        nock('http://server1.com').get('/').reply(500);
        nock('http://server2.com').get('/').reply(500);
        nock('http://server3.com').get('/').reply(500);

        try {
            await findServer(servers);
        } catch (error) {
            expect(error).to.be.an('error');
        }
    });

    it('should timeout after 5 seconds if the server does not respond', async () => {
        const servers = [
            { url: 'http://server1.com', priority: 1 },
            { url: 'http://server2.com', priority: 2 },
            { url: 'http://server3.com', priority: 3 }
        ];

        nock('http://server1.com').get('/').delay(6000).reply(200);
        nock('http://server2.com').get('/').reply(200);
        nock('http://server3.com').get('/').reply(200);

        const result = await findServer(servers);
        expect(result).to.deep.equal({ url: 'http://server2.com', priority: 2 });
    });
});