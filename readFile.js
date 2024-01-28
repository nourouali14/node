onst fs = require('fs');

const data = fs.readFileSync('welcome.txt', 'utf-8');
console.log('Content from "welcome.txt":', data);
