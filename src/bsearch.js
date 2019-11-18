// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1

  let reader = [1, 2, 6];
  let target = 1;
  let search = function (reader, target) {
    for(var i=0;i<=reader.length;i++){
        if(target === reader[i]){
                return i;
        }
    }
  return -1;
  };

// search(target)
