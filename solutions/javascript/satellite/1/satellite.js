//
// This is only a SKELETON file for the 'Satellite' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length !== inorder.length) {
    throw new Error('traversals must have the same length');
  }

  const preSet = new Set(preorder);
  const inSet = new Set(inorder);

  if (preSet.size !== preorder.length || inSet.size !== inorder.length) {
    throw new Error('traversals must contain unique items');
  }
  
  for (const val of preorder) {
    if (!inSet.has(val)) {
      throw new Error('traversals must have the same elements');
    }
  }

  if (preorder.length === 0) {
    return {};
  }

  const buildTree = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd || inStart > inEnd) {
      return {};
    }

    const rootValue = preorder[preStart];
    const rootIndexInInorder = inorder.indexOf(rootValue, inStart);
    const leftTreeSize = rootIndexInInorder - inStart;

    return {
      value: rootValue,
      left: buildTree(
        preStart + 1, 
        preStart + leftTreeSize, 
        inStart, 
        rootIndexInInorder - 1
      ),
      right: buildTree(
        preStart + leftTreeSize + 1, 
        preEnd, 
        rootIndexInInorder + 1, 
        inEnd
      )
    };
  };

  return buildTree(0, preorder.length - 1, 0, inorder.length - 1);
};