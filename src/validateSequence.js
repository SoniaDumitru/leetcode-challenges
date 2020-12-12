// Given two arrays determine if the second array is a sequence of the first one.

// Solution 1
function isValidSubsequence(array, sequence) {
	let arrIdx = 0;
	let seqIdx = 0;
	while (arrIdx < array.length && seqIdx < sequence.length) {
		if (array[arrIdx] === sequence[seqIdx]) {
			seqIdx += 1;
		} 
		arrIdx += 1;
	}
	return seqIdx === sequence.length;
}

// Solition 2 
function isValidSubsequence(array, sequence) {
	let seqIdx = 0;
	for (const value of array) {
		if (seqIdx === sequence.length) {
			break;
		}
		if (sequence[seqIdx] === value) {
			seqIdx++;
		}
	}
	return seqIdx === sequence.length;
}
