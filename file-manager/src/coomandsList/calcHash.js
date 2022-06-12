import fs from 'fs';
import crypto from 'crypto';
import { checkPath } from "../utils/checkPath.js";

export const calculateHash = async (props,path) => {
    let file = await checkPath(props,path);
    if ( file ) {
        try {
            const fileBuffer = fs.readFileSync(file);
            const hashSum = crypto.createHash('sha256');
            hashSum.update(fileBuffer);
        
            const hex = hashSum.digest('hex');
        
            console.log(hex);
        } catch (error) {
            console.log('Operation failed');
        }
    } else {
        console.log('Operation failed');
    }
};