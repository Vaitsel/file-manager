import * as fs from "node:fs/promises";
import { checkDoublePath } from "../utils/checkDoublePath.js";

export const rename = async (props,path) => {
    let names = await checkDoublePath(props,path);

    if ( names ) {
        try {
            await fs.rename(names[0], names[1], (err) => {
                console.log('Operation failed');
            });
        } catch (error) {
            console.log('Operation failed');
        }
    } else {
        console.log('Operation failed');
    }
};