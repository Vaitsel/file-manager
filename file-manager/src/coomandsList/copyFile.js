import * as fs from "node:fs/promises";
import { checkDoublePath } from "../utils/checkDoublePath.js";

export const copy = async (props,path,check_del) => {
    let names = await checkDoublePath(props,path);

    if ( names ) {
        try {
            await fs.copyFile(names[0],names[1]).then(() => {
                if (check_del) {
                    fs.unlink(names[0]);
                }
            })
            .catch(() => {
                console.log('Operation failed');
            })
        } catch (error) {
            console.log('Operation failed');
        }
    } else {
        console.log('Operation failed');
    }

};
