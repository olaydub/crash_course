const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//    if(err) throw err;
//    console.log('Folder created...');
// });

// Create and write to file - writeFile overwrites
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'dummy content', err =>{
   if(err) throw err;
   console.log('File written to...');
});

// File append
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '...appended text', err =>{
   if(err) throw err;
   console.log('File written to...');
});