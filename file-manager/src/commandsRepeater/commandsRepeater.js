import { list } from '../coomandsList/lsDir.js';
import { up } from '../coomandsList/upDir.js';

export class commandsRepeater {
    constructor(username,path) {
        this.path = path;
        this.start(username,path);
    }

    async start(username,path) {
        try {
            process.stdin.on('data', async (data) => {
                const str = data.toString().trim();
                let check = true;
                switch (str) {
                    case 'ls':
                        await list(this.path);
                        break;
                    case 'up':
                        let new_path = await up(this.path);
                        await this.updatePath(new_path);
                        break;
                    case '.exit':
                        this.close(username)
                        break; 
                    default:
                        check = false;
                        console.log('Invalid input');
                        break; 
                }
                await this.printDir(check);
            })
        } catch (err) {
            console.error('Invalid input');
        }
    }

    async updatePath(newPath) {
        this.path = newPath;
    }

    close(username) {
        process.stdout.write(`Thank you for using File Manager, ${username} \n`);
        process.exit(0);
    }

    async printDir(check) {
        if (check) {
            console.log(`You are currently in ${this.path}`);
        }
    }
    
}