export const checkPath = async (props,path) => {
    const path_to_directory = props.split(' ');
    if (path_to_directory.length == 2) {
        if (path.length < 4) {
            return path + path_to_directory[1]; 
        } else {
            return path + '\\' + path_to_directory[1]; 
        }
    } else {
        return false;
    }
};