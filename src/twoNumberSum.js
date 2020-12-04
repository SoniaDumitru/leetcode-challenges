// Ex: givenArray = [1,2,3] && targetSum 5 => [2,3]

// Solution 1:
function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
          let firstNum = array[i];
          for (let j = i + 1; j < array.length; j++) {
              const secondNum = array[j];
              if (firstNum + secondNum === targetSum) {
                  return [firstNum, secondNum];
              }
          }
      }
      return [];
  }

// Solution 2:
function twoNumberSum(array, targetSum) {
	const nums = {}
	for (const num of array) {
		const potentialMatch = targetSum - num;
		if (potentialMatch in nums) {
			return [potentialMatch, num]
		} else {
			nums[num] = true;
		}
	}
	return [];
}

// Solution 3:
function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a-b);
      let left = 0;
      let right = array.length - 1;
      while (left < right) {
          let sum = array[left] + array[right]
          if (sum === targetSum) {
              return [array[left], array[right]]
          } else if (sum < targetSum) {
              left++;
          } else if (sum > targetSum){
              right--;
          }
      }
      return []
  }