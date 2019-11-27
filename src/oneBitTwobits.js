// We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).
// Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will always end with a zero.

var isOneBitCharacter = function(bits) {
let numberOfOnes = 0;
for(let i = bits.length - 2; i >= 0; i--){
    if(bits[i] === 1) numberOfOnes++;
    else return numberOfOnes % 2 === 0;
 }
};

// isOneBitCharacter(bits) => result: true
