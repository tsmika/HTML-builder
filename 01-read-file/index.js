const fs = require('fs');
const path = require('path');
const { stdout } = require('process');

const readStream = fs.createReadStream(path.join(__dirname,'\\text.txt'), 'utf-8');
let output = '';
readStream.on('data', chunk => output += chunk);
readStream.on('end', () => stdout.write(output));