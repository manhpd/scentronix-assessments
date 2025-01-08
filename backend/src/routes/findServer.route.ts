import { Request, Response, Router } from 'express';
import axios from 'axios';
import { IServer } from '../model/server.model';

const router = Router();

const servers: IServer[] = [
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

export const findServer = async (servers: IServer[]): Promise<IServer> => {
    const checkServer = async (server: IServer): Promise<boolean> => {
        try {
            const response = await axios.get(server.url, { timeout: 5000 });
            return response.status >= 200 && response.status < 300;
        } catch (error) {
            return false;
        }
    };

    const serverStatuses = await Promise.all(
        servers.map(async (server) => ({
            server,
            online: await checkServer(server)
        }))
    );

    const onlineServers = serverStatuses.filter(status => status.online);

    if (onlineServers.length === 0) {
        throw new Error('No servers are online');
    }

    onlineServers.sort((a, b) => a.server.priority - b.server.priority);

    return onlineServers[0].server;
};

router.get('/', async (req: Request, res: Response) => {
    try {
        const server = await findServer(servers);
        console.log(server);
        res.json(server);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;