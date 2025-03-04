'use strict';
const fs = require('fs');
const path = require('path');
const readline = require('readline');

function deleteFolderRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    if(fs.lstatSync(dirPath).isDirectory()) {
        fs.readdirSync(dirPath).forEach(function(file) {
            const curPath = path.join(dirPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
              deleteFolderRecursive(curPath);
            } else {
              fs.unlinkSync(curPath);
            }
          });
          fs.rmdirSync(dirPath);
          console.log("deleting: "+ dirPath);
    } else {
        fs.unlinkSync(dirPath);
        console.log("Deleting "+ dirPath);
    }
  } else {
    console.log("not exist, skip: " + dirPath);
  }
};

const fileStream = fs.createReadStream(path.join(__dirname, "../.gitignore"));

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

const gitignoreFiles = [];

rl.on('line', (line) => {
  if (line !== "" && !line.includes("node_modules") && !line.includes("native/external/") && !line.includes("!")) {
    gitignoreFiles.push(path.join(__dirname,".." ,line));
  }
});

rl.on('close', () => {
  console.log("=================== ready to delete ===================");
  console.log(gitignoreFiles);
  console.log("=================== processing ===================");
  gitignoreFiles.forEach((dirPath)=>{
    deleteFolderRecursive(dirPath);
});
});

