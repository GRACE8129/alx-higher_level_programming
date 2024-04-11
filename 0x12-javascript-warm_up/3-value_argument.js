#!/usr/bin/node
const argsCount = process.argv

if (argsCount[2] === undefined) {
  console.log('No argument');
} else {
  console.log(argsCount[2]);
}
