import fs from "fs";
import path from "path"; 




export const getAllFiles = (folderPath : string) => {
    let response: string[] = [];
    const allFilesAndFolders = fs.readdirSync(folderPath);
    allFilesAndFolders.forEach(file => {
        const fullFilePath = path.join(folderPath, file);
        // if(fs.statSync(fullFilePath).isDirectory()){
        //     response = response.concat(getAllFiles(fullFilePath))
        // } else{
        //     response.push(fullFilePath)
        //     // if (!file.startsWith(".git")) { // Exclude Git-related files
        //     //     response.push(fullFilePath);
        //     // }
        // }
        if(fs.statSync(fullFilePath).isDirectory()){
            if(!file.startsWith(".git")){
                response = response.concat(getAllFiles(fullFilePath))
            }
        } else {
            response.push(fullFilePath);
        }
    });

    return response;
}

