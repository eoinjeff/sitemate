// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'half',
  };
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }
  const splitString = time.split(':');
  const mins = Number(splitString[1]);
  const hours = Number(splitString[0]);
  if (mins <= 30) {
    // eslint-disable-next-line prefer-template
    const result = numbers[mins] + ' past ' + numbers[hours];
    return result;
  }
  if (mins > 30) {
    const result = `${numbers[60 - mins]} to ${numbers[1 + hours]}`;
    return result;
  }
}

module.exports = { convertTimeToWords };
