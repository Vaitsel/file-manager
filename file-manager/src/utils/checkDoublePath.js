export const checkDoublePath = async (props,path) => {
    if (props) {
        const path_to_directory = props.split(' ');
        if (path_to_directory.length === 3) {
            if (path.length < 4) {
                return [path + path_to_directory[1],path + path_to_directory[2]]; 
            } else {
                return [path + '\\' + path_to_directory[1],path + '\\' + path_to_directory[2]]; 
            }
        } 
    }

    return false;

};