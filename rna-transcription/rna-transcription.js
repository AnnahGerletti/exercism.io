var Rna = {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A'
}

var DnaTranscriber = function () {
}

DnaTranscriber.prototype.toRna = function (input) {
  var nucleotides = input.split('')
  nucleotides.map(input) {

  }
  return Rna[input]
}

module.exports = DnaTranscriber
