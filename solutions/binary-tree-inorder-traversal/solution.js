/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const inorderTraversal = (root) => {
  const steps = [[root, 0]];
  const ans = [];
  while (steps.length) {
    const step = steps.pop();
    const node = step[0];
    const type = step[1];
    if (node === null) continue;
    if (type === 1) {
      ans.push(node.val);
    } else if (type === 0) {
      // In-order
      steps.push([node.right, 0]);
      steps.push([node, 1]);
      steps.push([node.left, 0]);

      /** Pre-order
      steps.push([node.right, 0]);
      steps.push([node.left, 0]);
      steps.push([node, 1]);
      */

      /** Post-order
      steps.push([node, 1]);
      steps.push([node.right, 0]);
      steps.push([node.left, 0]);
      */
    }
  }
  return ans;
}