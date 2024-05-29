const util = require("util");

class LinkedList {
  #size;

  constructor() {
    this.head = null;
    this.#size = 0;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      var lastNode = this.tail;

      lastNode.next = new Node(value);
    }
    this.#size++;
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      var node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
    this.#size++;
  }

  get size() {
    return this.#size;
  }

  get getHead() {
    return this.head;
  }

  get tail() {
    var node = this.head;

    while (node.next !== null) {
      node = node.next;
    }

    return node;
  }

  at(index) {
    var node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  pop() {
    var node = this.head;

    while (node.next.next !== null) {
      node = node.next;
    }

    node.next = null;
  }

  contains(value) {
    var node = this.head;

    while (node !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  find(value) {
    var node = this.head;
    var index = 0;

    while (node !== null) {
      if (node.value === value) {
        return index;
      }
      index++;
      node = node.next;
    }
    return null;
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
list.pop();
console.log(list.find(7));
