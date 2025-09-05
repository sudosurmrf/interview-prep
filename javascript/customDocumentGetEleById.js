//create a custom built in document object function to retrieve a dom element by id;

Document.prototype.myGetElementById = function(id) {
  function traverse(node) {
    if (node.id === id) return node;

    for (let child of node.children) {
      const found = traverse(child);
      if (found) return found;
    }

    return null;
  }

  return traverse(this.body);
};
