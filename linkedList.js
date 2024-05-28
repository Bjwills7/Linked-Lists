const util = require("util");

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      var nextNode = this.head;

      while (nextNode.next !== null) {
        nextNode = nextNode.next;
      }

      nextNode.next = new Node(value);
    }
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      var node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.append(3);
list.append(4);

console.log(util.inspect(list, { depth: null }));
