// Given two binary trees, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

//  Definition for a binary tree node.
//  function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

let p = [1, 0, 1]
let q = [1, 1, 2]

function isSameTree(p, q) {
  if (!p || !q) {
    return p === q
  }
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

isSameTree(p,q);
