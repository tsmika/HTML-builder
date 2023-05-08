
const fs = require('fs');
const path = require('path');

const writeStream = fs.createWriteStream(path.join(__dirname, 'messages.txt'), { flags: 'a' });
console.log('Please, enter your message: ');

process.stdin.on('data', (data) => {
  const text = data.toString().trim();

  if (text === 'exit') {
    console.log('Good bye!');
    process.exit();
  }

  writeStream.write(text + '\n', (err) => {
    if (err) throw err;
    console.log('The message has been saved. Press Ctrl+C or print "exit + Enter" to end the program.');
  });
});