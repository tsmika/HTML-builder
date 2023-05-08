
const fs = require('fs');
const path = require('path');
const source = path.join(__dirname, 'files')
const destination = path.join(__dirname, 'files-copy')

copyDir(source, destination)
  .then(() => console.log('Copied!'))
  .catch((err) => console.error(err));

async function copyDir(src, dest) {
  await fs.promises.mkdir(dest, { recursive: true });
  const entries = await fs.promises.readdir(src, { withFileTypes: true });

  for (let entry of entries) {
    const sourcePath = path.join(src, entry.name);
    const destinationPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(sourcePath, destinationPath);
    } else {
      await fs.promises.copyFile(sourcePath, destinationPath);
    }
  }
}