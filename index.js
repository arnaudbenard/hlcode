#!/usr/bin/env node

var exec = require('child_process').exec;
var minimist = require('minimist');
var argv = minimist(process.argv.slice(2), {
    alias: {
        s: 'syntax',
        f: 'file'
    }
});

var syntax = argv.s;
var filename = argv.f;

if (filename) {
    return exec('highlight -O rtf ' + filename + ' | pbcopy');
}

if (!syntax) {
    return console.warn('No syntax specified. Use the -s flag.');
}

return exec('pbpaste | highlight --syntax=' + syntax + ' -O rtf | pbcopy')

