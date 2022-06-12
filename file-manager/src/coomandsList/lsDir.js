import fs from 'fs';
    
export const list = async (path) => {
    try {
        console.log(path);
        const files = await fs.promises.readdir(path);
        let arr_files = [];

        files.forEach(file => {
            arr_files.push(file);
        });
        console.log(arr_files);
    } catch (error) {
        throw Error('Operation failed');
    }
};
