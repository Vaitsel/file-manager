import { list } from '../coomandsList/lsDir.js';

export class commandsRepeater {
    constructor(username,path) {
        this.start(username,path);
    }

    async start(username,path) {
        try {
            process.stdin.on('data', async (data) => {
                const str = data.toString().trim();
                switch (str) {
                    case 'ls':
                        await list(path);
                        break;
                    case '.exit':
                        this.close(username)
                        break; 
                    default:
                        this.close(username)
                        break; 
                }
            })
        } catch (err) {
            console.error(err);
        }
    }

    close(username) {
        process.stdout.write(`Thank you for using File Manager, ${username} \n`);
        process.exit(0);
    }
    
}