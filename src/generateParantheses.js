// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// For example, given n = 3, a solution set is:
//
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

const generateParanthesis = (n) => {
  const solution = [];

    const generateCombo = (leftPCount,rightPCount,partialCombination) => {
      if (leftPCount > rightPCount) return;
      if (!leftPCount && !rightPCount) solution.push(partialCombination)
      if (leftPCount > 0) generateCombo(leftPCount-1, rightPCount, partialCombination + '(')
      if (rightPCount > 0) generateCombo(leftPCount, rightPCount-1, partialCombination + ')')

    }
    generateCombo(n,n,'')
    return solution;
}

// console.log(generateParanthesis(4)) => result:
//
// [
//   '(((())))', '((()()))',
//   '((())())', '((()))()',
//   '(()(()))', '(()()())',
//   '(()())()', '(())(())',
//   '(())()()', '()((()))',
//   '()(()())', '()(())()',
//   '()()(())', '()()()()'
// ]
