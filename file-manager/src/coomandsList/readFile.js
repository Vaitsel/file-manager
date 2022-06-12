import * as fs from "fs";
import { checkPath } from "../utils/checkPath.js";

export const read = async (props,path) => {
    let file = await checkPath(props,path);
    if ( file ) {
        const stream = fs.createReadStream( file );
        stream.on('data', (chunk) => {
            process.stdout.write(chunk);
        })
    
        stream.on('error', function() {
           console.log('Operation failed');
        });
    } else {
        console.log('Operation failed');
    }
};
