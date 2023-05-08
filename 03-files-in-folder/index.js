const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }

      if (stats.isFile()) {
        let bytes = stats.size;
        let kilobytes = bytes / 1024;
        let extension = path.extname(file);
        let name = path.basename(file, extension);

        console.log(name + '-' + extension + '-' + kilobytes.toFixed(3) + 'kb');
      }
    });
  });
});