var TwoFer = function () {}

var who = 'Bob'
TwoFer.prototype.twoFer = function (who) {
  if (who === 'Bob') {
    return 'One for Bob, one for me.'
  } else if (who === 'Alice') {
    return 'One for Alice, one for me.'
  } else {
    return 'One for you, one for me.'
  }
}
console.log(TwoFer(who))

module.exports = TwoFer
