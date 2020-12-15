// given BST tree find closest value given

// Solution 1:
// #Average O(log(n)) time / O(log(n)) space
function findClosestValueInBst(tree, target) {
    return findClosestValue(tree, target, tree.value)
  }
  
  const findClosestValue = (tree, target, closest) => {
      if (tree === null) return closest; 
      if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
          closest = tree.value;
      }
      if (target < tree.value) {
          return findClosestValue(tree.left, target, closest)
      }
      else if (target > tree.value) {
          return findClosestValue(tree.right, target, closest)
      }
      else return closest
  }

// Solution 2:
// Average o(n) time / O(1) space
function findClosestValueInBst(tree, target) {
    findClosestValue(tree, target, tree.value)
  }
  
  const findClosestValue = (tree, target, closest) => {
      let currentNode = tree;
      while (currentNode !== null) {
          if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
              closest = currentNode.value;
          }
          if (target < currentNode.value) {
              currentNode = currentNode.left
          }
          else if (target > currentNode.value) {
              currentNode = currentNode.right
          } else {
              break;
          }
      }
      return closest
  }
  