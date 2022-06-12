import { list } from '../coomandsList/lsDir.js';
import { up } from '../coomandsList/upDir.js';
import { cd } from '../coomandsList/cdDir.js';
import { read } from '../coomandsList/readFile.js';
import { create } from '../coomandsList/addFile.js';
import { rename } from '../coomandsList/renameFile.js';

export class commandsRepeater {
    constructor(username,path) {
        this.path = path;
        this.start(username);
    }

    async start(username) {
        try {
            process.stdin.on('data', async (data) => {

                const props = data.toString().trim();
                let command = props.split(' ')[0];
                if (!command) {
                    command = props;
                }
                let check = true;
                let new_path = '';

                switch (command) {
                    case 'ls':
                        await list(this.path);
                        break;
                    case 'up':
                        new_path = await up(this.path);
                        await this.updatePath(new_path);
                        break;
                    case 'cd':
                        new_path = await cd(props,this.path);
                        await this.updatePath(new_path);
                        break;
                    case 'cat':
                        await read(props,this.path);
                        break;
                    case 'add':
                        await create(props,this.path);
                        break;
                    case 'rn':
                        await rename(props,this.path);
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