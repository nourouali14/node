console.log("HELLO WORLD");
const fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node');

console.log('File "welcome.txt" created with content: Hello Node');
