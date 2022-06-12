import * as fs from "node:fs/promises";
import { checkPath } from "../utils/checkPath.js";

export const remove = async (props,path) => {
    let file = await checkPath(props,path);
    if ( file ) {
        try {
            await fs.unlink(file);
        } catch (error) {
            console.log('Operation failed');
        }
    } else {
        console.log('Operation failed');
    }
};