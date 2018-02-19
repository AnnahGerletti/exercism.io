var TwoFer = function () {}

TwoFer.prototype.twoFer = function (who) {
  // your code goes here
  // You will have to use the parameter who
  // in some way. In this example, it is just
  // returned, but your solution will have to
  // use a conditional.
  return who
};

module.exports = TwoFer
var who = ''
var response = ''
if (who !== 'Bob' || 'Alice') {
  response = 'One for you, one for me.'
} else if (who === 'Alice') {
  response = 'One for Alice, one for me.'
} else {
  response = 'One for Bob, one for me.'
} return who
