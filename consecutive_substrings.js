function consecutiveSubstrings(string) {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    let current = "";

    for (let j = i; j < string.length; j++) {
      current += string[j];
      result.push(current);
    }
  }

  return result;
}

module.exports = consecutiveSubstrings;