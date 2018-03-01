var DnaTranscriber = function () {
}

DnaTranscriber.prototype.toRna = function (str) {
  var strToArr = str.split('')
  var mapArr = strToArr.map(i => {
    switch (i) {
      case 'C':
        return 'G'
      case 'G':
        return 'C'
      case 'A':
        return 'U'
      case 'T':
        return 'A'
      default:
        return Error('Invalid input')
    }
  })
  var arrToStr = mapArr.join('')
  return arrToStr
}

module.exports = DnaTranscriber
