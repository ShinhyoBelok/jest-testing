function stringLength(string) {
  if (string === '') return 'the string have to be at least 1 character long';
  if (string.length > 10) return 'The string is too long, make it lower than 10 char';
  return 'string is between 1-10 character';
}

function reverseString(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversedString += string[i];
  }
  return reversedString;
}

function capitalize(string) {
  if (string === '') return 'Empty string';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  stringLength,
  reverseString,
  capitalize,
}