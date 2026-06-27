//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  constructor(currentNode, breadcrumbs = []) {
    this.currentNode = currentNode;
    this.breadcrumbs = breadcrumbs;
  }

  static fromTree(tree) {
    return new Zipper(JSON.parse(JSON.stringify(tree)), []);
  }

  toTree() {
    let zipper = this;
    while (zipper.breadcrumbs.length > 0) {
      zipper = zipper.up();
    }
    return zipper.currentNode;
  }

  value() {
    return this.currentNode ? this.currentNode.value : null;
  }

  left() {
    if (!this.currentNode || !this.currentNode.left) return null;

    const newBreadcrumbs = [
      {
        value: this.currentNode.value,
        right: this.currentNode.right, 
        direction: 'left'             
      },
      ...this.breadcrumbs
    ];

    return new Zipper(this.currentNode.left, newBreadcrumbs);
  }

  right() {
    if (!this.currentNode || !this.currentNode.right) return null;

    const newBreadcrumbs = [
      {
        value: this.currentNode.value,
        left: this.currentNode.left,  
        direction: 'right'         
      },
      ...this.breadcrumbs
    ];

    return new Zipper(this.currentNode.right, newBreadcrumbs);
  }

  up() {
    if (this.breadcrumbs.length === 0) return null;

    const [parentContext, ...remainingBreadcrumbs] = this.breadcrumbs;
    const reconstructedParent = {
      value: parentContext.value,
      left: parentContext.direction === 'left' ? this.currentNode : parentContext.left,
      right: parentContext.direction === 'right' ? this.currentNode : parentContext.right
    };

    return new Zipper(reconstructedParent, remainingBreadcrumbs);
  }

  setValue(newValue) {
    const updatedNode = {
      ...this.currentNode,
      value: newValue
    };
    return new Zipper(updatedNode, this.breadcrumbs);
  }

  setLeft(newLeftTree) {
    const updatedNode = {
      ...this.currentNode,
      left: newLeftTree
    };
    return new Zipper(updatedNode, this.breadcrumbs);
  }

  setRight(newRightTree) {
    const updatedNode = {
      ...this.currentNode,
      right: newRightTree
    };
    return new Zipper(updatedNode, this.breadcrumbs);
  }
}