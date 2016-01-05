var rand = require('./firstmodule');
var toUSDAlso = require('./secondmod');

function returnMoney(){
  return toUSDAlso(rand(100,1000000));
};

function textReturn(){
  return "Account balance: \n";
}


exports.txtreturn = textReturn;
exports.rannum = returnMoney;
