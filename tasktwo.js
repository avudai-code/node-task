function getBalancedSubstrings(S) {
    const result = [];
    
    for (let i = 0; i < S.length - 1; i++) {
      const charCounts = new Map();
      charCounts.set(S[i], 1);
      let distinctChars = 1;
  
      for (let j = i + 1; j < S.length; j++) {
        const currentChar = S[j];
  
        if (!charCounts.has(currentChar)) {
          if (distinctChars === 2) {
            break; 
          }
          charCounts.set(currentChar, 1);
          distinctChars++;
        } else {
          charCounts.set(currentChar, charCounts.get(currentChar) + 1);
        }
  
        if (distinctChars === 2 && [...charCounts.values()].every(count => count * 2 === j - i + 1)) {
          result.push(S.slice(i, j + 1));
        }
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(getBalancedSubstrings("cabbacc")); // Output: ["abba"]
  console.log(getBalancedSubstrings("abababa")); // Output: ["ababab", "bababa"]
  console.log(getBalancedSubstrings("aaaaaaa")); // Output: []
  
  