import os from 'os';
import { commandsRepeater } from './commandsRepeater/commandsRepeater.js';

class FileManager {
  constructor() {
    this.username = process.argv.slice(2)[0].split('=')[1];
    this.init();
    this.commandsRepeater = new commandsRepeater(this.username,process.cwd());
  }

  init() {
    const HomeDir = os.homedir();
    process.chdir(HomeDir);
    console.log(`Welcome to the File Manager, ${this.username} \n`);
    console.log(`You are currently in ${process.cwd()}`)
  }
}

new FileManager();