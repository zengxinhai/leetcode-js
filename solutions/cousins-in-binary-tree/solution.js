/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const findParentForVal = (root, val, parent, depth) => {
  if (root === null) return null;
  if (root.val === val) return { node: parent, depth }
  return findParentForVal(root.left, val, root, depth + 1) || findParentForVal(root.right, val, root, depth + 1);
}

const isCousins = (root, x, y) => {
  const xParent = findParentForVal(root, x, { val: null }, -1);
  const yParent = findParentForVal(root, y, { val: null }, -1);
  return xParent.depth === yParent.depth && xParent.node.val !== yParent.node.val;
}
