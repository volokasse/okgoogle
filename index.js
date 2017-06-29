#! /usr/bin/env node

var open       = require('open');
var searchList = process.argv.slice(2);
var search     = searchList.join().replace(',', '%20');

open('https://www.google.fr/?gfe_rd=cr&ei=gQNVWZ-kOJfEaNPflYgI#q=' + search);