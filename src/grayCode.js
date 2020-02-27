// The gray code is a binary numeral system where two successive values differ in only one bit.
// Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

let grayCode = function(n){
        let list = []
        let stack = [];
        list.push(0);
        let i = 0;
        while(i < n) {
            let len = list.length;
            let inc = (Math.pow(2, i));
            for(let j=0; j<len; j++) {
                stack.push(list[j]);
            }
            while(stack.length > 0) {
                list.push(stack.pop() + inc);
            }
            i++;
        }
        return list;
  };
