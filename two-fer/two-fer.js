var TwoFer = function () {}

TwoFer.prototype.twoFer = function (who) {
  var who = ''
      if (who !== 'Bob' || 'Alice') {
        return 'One for you, one for me.'
      } else if (who === 'Alice') {
        return 'One for Alice, one for me.'
      } else {
        return 'One for Bob, one for me.'
      }
    }
  // your code goes here
  // You will have to use the parameter who
  // in some way. In this example, it is just
  // returned, but your solution will have to
  // use a conditional.
  console.log(who)
};

module.exports = TwoFer
