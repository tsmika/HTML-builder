const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'styles');
const dest = path.join(__dirname, 'project-dist', 'bundle.css');

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const cssFiles = files.filter(file => path.extname(file) === '.css');

  const cssContent = cssFiles.reduce((acc, file) => {
    const filePath = path.join(directory, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return `${acc}${fileContent}`;
  }, '');

  fs.writeFile(dest, cssContent, err => {
    if (err) {
      console.error(err);
      return;
    }

  });
});