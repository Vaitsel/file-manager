import fs from 'fs';

export const cd = async (props,path) => {
    const path_to_directory = props.split(' ');
    if (path_to_directory.length == 2) {
        try {
            await fs.promises.stat(path + '\\' + path_to_directory[1]);
            if (path.length < 4) {
                return path + path_to_directory[1]; 
            } else {
                return path + '\\' + path_to_directory[1]; 
            }
        } catch (error) {
            console.log('Operation failed');
            return path
        }
    } else {
        console.log('Operation failed')
        return path
    }
};
