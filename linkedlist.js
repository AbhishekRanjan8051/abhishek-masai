//creating a node
class Node {
  constructor(element) {
    this.element = element;
    this.next = null; //pointing to the next node / element
  }
}

const elem = new Node(50);
// console.log("elem:", elem);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adding a element on node or adding a node in linked list
  add(element) {
    let node = new Node(element);
    // console.log('node:', node)

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      //   console.log('current:', current)
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // print the linked list

  printList() {
    let current = this.head;
    let index = 0;
    while (current) {
      console.log("index:", index++, "current:", current.element);
      current = current.next;
    }
  }

  // insert at specific index in linked list

  insertAt(element, index) {
    if (index > this.size || (index < 0 && this.size)) {
      return false;
    }

    let node = new Node(element);
    let current = this.head;
    let prev = null;

    let i = 0;

    if (index === 0) {
      node.next = current;
      this.head = node;
      this.size++;
    } else {
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = node; // insert at the index
      prev = prev.next; //move to the next node / inserted node

      prev.next = current; //add the rest of the current to the inserted node

      this.size++; // increment the size of the node
    }
  }

  // deletion or removing the element

  removeElement(element) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.element === element) {
        // check prev is null or not
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        console.log("removing element:", element);
        return true;
      }
      prev = current;
      current = current.next;
    }
  }
  // check linked list is empty or not

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  // checking the size of linked list

  sizeofLL() {
    return this.size;
  }
}

let list = new LinkedList();

list.add(5);
list.add(55);
list.add(85);
list.insertAt(8, 3);
list.removeElement(5);
list.printList();
console.log(list.isEmpty());
console.log(list.sizeofLL());

// implementation of new node in linked list
/*
function eleme(name, value) {
  this.name = name;
  this.value = value;
}

const elem = new eleme("abhishek", 90);
console.log("elem:", elem);

const node = new Node(elem); //contaning elem as value and next is null
console.log("node:", node);
*/
