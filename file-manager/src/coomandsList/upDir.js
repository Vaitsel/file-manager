import fs from 'fs';

export const up = async (path) => {
    let path_arr = path.split(/\\/);
    if (path_arr.length > 1) {
        let new_path = '';
        if (path_arr.length == 2) {
            new_path = path.slice(0,path.lastIndexOf(path_arr[path_arr.length - 1]));
        } else {
            new_path = path.slice(0,path.lastIndexOf(path_arr[path_arr.length - 1]) - 1);
        }
        await fs.promises.stat(new_path);
        return new_path;
    } else {
        return path;
    }
};
