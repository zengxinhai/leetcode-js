/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


const widthOfBinaryTree = (root) => {
  let nodeItemList = [{ node: root, index: 0 }];
  let ans = 1;
  while (nodeItemList.length > 0) {
    const newNodeItemList = [];
    for (const nodeItem of nodeItemList) {
      if (nodeItem.node.left !== null) {
        newNodeItemList.push({ node: nodeItem.node.left, index: nodeItem.index * 2 });
      }
      if (nodeItem.node.right !== null) {
        newNodeItemList.push({ node: nodeItem.node.right, index: nodeItem.index * 2 + 1 });
      }
    }
    if (newNodeItemList.length === 0) break;
    const begin = newNodeItemList[0].index;
    const end = newNodeItemList[newNodeItemList.length - 1].index;
    ans = Math.max(ans, end - begin + 1);
    nodeItemList = newNodeItemList;
  }
  return ans;
}