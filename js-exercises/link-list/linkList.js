import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newHead = new LinkListNode(value, this.head);
    this.head = newHead;
  }

  append(value) {
    const LastNode = new LinkListNode(value);
    let tmp = this.head;
    if (!tmp) {
      this.head = LastNode;
      return;
    }
    while (tmp.next !== null) {
      tmp = tmp.next;
    }

    tmp.next = LastNode;
  }

  delete(value) {
    let tmp = this.head;
    if (tmp.value === value) {
      this.head = this.head.next;
      return;
    }
    while (tmp) {
      if (tmp.next && tmp.next.value === value) {
        tmp.next = tmp.next.next;
      }
      tmp = tmp.next;
    }
  }

  traverse() {
    let tmp = this.head;
    while (tmp) {
      tmp = tmp.next;
    }
  }

  contains(value) {
    let tmp = this.head;
    while (tmp) {
      if (tmp.value === value) {
        return true;
      }
      tmp = tmp.next;
    }
  }

  length() {
    let length = 0;
    let tmp = this.head;
    while (tmp) {
      // eslint-disable-next-line no-plusplus
      length++;
      tmp = tmp.next;
    }
    return length;
  }
}
