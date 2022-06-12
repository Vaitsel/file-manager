import * as fs from "node:fs/promises";
import { checkPath } from "../utils/checkPath.js";

export const create = async (props,path) => {
    let file = await checkPath(props,path);
    if ( file ) {
        try {
            await fs.writeFile(file, '');
        } catch (error) {
            console.log('Operation failed');
        }
    } else {
        console.log('Operation failed');
    }
};