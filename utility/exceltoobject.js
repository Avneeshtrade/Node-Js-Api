const readXlsxFile = require('read-excel-file/node');

const importExcelData2MySQL = async (filePath) => {
    return await myPromise(filePath);
}
const myPromise = (filepath) => {
    return new Promise((resolve, reject) => {  
        readXlsxFile(filepath).then(rows=>{
            resolve(rows);
        })
        .catch(err=>{
            reject(err);
        });       
    });
}

module.exports = importExcelData2MySQL;