module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsMap = {};

  bracketsConfig.forEach(([openingBracket, closingBracket]) => {
    bracketsMap[closingBracket] = openingBracket;
  });

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];

    if (bracketsMap.hasOwnProperty(currentBracket)) {
      let openingBracket = bracketsMap[currentBracket];

      if (openingBracket === currentBracket) {
        if (stack.length === 0 || openingBracket !== stack[stack.length - 1]) {
          stack.push(currentBracket);
        } else {
          stack.pop();
        }
      } else {
        if (stack.length === 0 || openingBracket !== stack.pop()) {
          stack.push(currentBracket);
        }
      }
    } else {
      stack.push(currentBracket);
    }
  }

  return stack.length === 0;
}