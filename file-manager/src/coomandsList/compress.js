import fs from 'fs';
import zlib from 'zlib';
import { checkDoublePath } from "../utils/checkDoublePath.js";

export const compress = async (props,path) => {
    let names = await checkDoublePath(props,path);

    if ( names ) {
        try {
            const brotli = zlib.createBrotliCompress();
    
            const inp = fs.createReadStream(names[0]);
            var out = fs.createWriteStream(names[1]);
        
            inp.pipe(brotli).pipe(out);
        } catch (error) {
            console.log('Operation failed');
        }
    } else {
        console.log('Operation failed');
    }
};

compress();