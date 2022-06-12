import fs from 'fs';
import { checkPath } from "../utils/checkPath.js";

export const cd = async (props,path) => {
    let dir = await checkPath(props,path);
    if (dir) {
        try {
            await fs.promises.stat(dir);
            return dir;
        } catch (error) {
            console.log('Operation failed');
            return path
        }
    } else {
        console.log('Operation failed')
        return path
    }
};
