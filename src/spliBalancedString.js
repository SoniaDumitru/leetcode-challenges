// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
//
// Given a balanced string s split it in the maximum amount of balanced strings.
//
// Return the maximum amount of splitted balanced strings.

var balancedStringSplit = function(s) {

    let matches = 0;
	let balance = 0;

	for (let i = 0; i < s.length; i++) {

		if (s[i] === "R") {
			balance -= 1;
		} else if (s[i] === "L") {
			balance += 1;
		}

		if (balance === 0) {
			matches += 1;
		}
	}

	return matches;
};
