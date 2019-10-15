// Write a function that takes a string as input and reverse only the vowels of a string.

let s = "sonia"
let reverseVowels = function(s) {
    let i = 0;
    let j = s.length-1;
    const vowel = ['a','e','i','o','u'];
    s = s.split("");
    while (i<=j){
        let iIsVowel = vowel.includes(s[i]);
        // console.log("i", iIsVowel)
        let jIsVowel = vowel.includes(s[j]);
        // console.log("j:", jIsVowel)
        if (iIsVowel && jIsVowel){
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }
        if (!iIsVowel) i++;
        if (!jIsVowel) j--;
    }
    return s.join("");
};
reverseVowels(s) => result: 'sanio'
