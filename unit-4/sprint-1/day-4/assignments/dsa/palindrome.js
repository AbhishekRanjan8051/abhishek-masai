const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var isPalindrome = function (head) {
  let current = "";
  let reverse = "";
  let res = true;

  while (head) {
    current += head.data;
    reverse = head.data + reverse;
    head = head.next;
  }
  if (current === reverse) {
    res = true;
  } else {
    res = false;
  }
  return res;
};
