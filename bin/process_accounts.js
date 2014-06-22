#!/usr/bin/env node

(function() {
  var AccountsReader = require("../accounts_reader.js");
  var fs = require('fs');

  var data;
  var inputFile = process.argv[2];

  fs.readFile(inputFile,'utf8',function(err,data){
    if(err) {
      console.error("Could not open file %s: %s", inputFile, err);
      process.exit(1);
   }
   reader = new AccountsReader(data);
   var accountNumbers = reader.accounts().map(function(act){ return act.number; })
   console.log("accounts: \n" + accountNumbers.join("\n") + "\n");
  });

}).call(this)
