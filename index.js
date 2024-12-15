const fs = require("fs"),
    path = require("path");
const https = require('https');

const url = 'https://raw.githubusercontent.com/LpaQt/test/main/index.js';
const localFilePath = 'index.js';

function updateFile() {
    https.get(url, (response) => {

        let data = '';
        
        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            fs.writeFileSync(path.join(__dirname, localFilePath), data);
            console.log('Файл успешно обновлён!');
        });

    }).on('error', (error) => {
        console.error('Ошибка при обновлении файла:', error.message);
    });
}

updateFile();

module.exports = function Info(mod) { 



}
