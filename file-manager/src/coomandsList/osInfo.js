import os from 'os';

export const osInfo = async (props) => {
    const os_detailes = props.split(' ');
    if (os_detailes.length === 2) {
        switch (os_detailes[1]) {
            case '--EOL':
                console.log(JSON.stringify(os.EOL));
                break; 
            case '--cpus':
                const cpus = [];
                for (let cpu of os.cpus()) {
                    cpus.push('model: ' + cpu.model + ', speed: ' + cpu.speed / 1000 + 'GHz');
                }
                console.log(cpus);
                break; 
            case '--homedir':
                console.log(os.homedir());
                break; 
            case '--username':
                console.log(os.userInfo().username);
                break; 
            case '--architecture':
                console.log(os.arch());
                break; 
            default:
                console.log('Operation failed');
                break; 
        }
    } else {
        console.log('Operation failed');
    }
};