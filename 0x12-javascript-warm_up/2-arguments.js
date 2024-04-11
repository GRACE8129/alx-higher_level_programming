#!/usr/bin/node
const argcount = 'process.argv.length';

if (argcount === 2) {     
console.log('No argument');
} else if (argcount === 3) {
console.log('Argument found');
} else {
console.log('Arguments found');
}

