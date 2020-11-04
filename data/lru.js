// 维护一个有序单链表，越靠近链表尾部的结点是越早之前访问的。当有一个新的数据被访问时，我们从链表头开始顺序遍历链表。
// 1. 如果此数据之前已经被缓存在链表中了，我们遍历得到这个数据对应的结点，并将其从原来的位置删除，然后再插入到链表的头部。
// 2. 如果此数据没有在缓存链表中，又可以分为两种情况：
//   如果此时缓存未满，则将此结点直接插入到链表的头部；
//   如果此时缓存已满，则链表尾结点删除，将新的数据结点插入链表的头部。

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(limit) {
    this.count = 0
    this.limit = limit
    this.header = null
  }
  add(data) {
    if (this.header === null) {
      this.header = new Node(data)
    } else {
      let node = this.header
      while(node.next !== null) {
        node = node.next
      }
      node.next = new Node(data)
    }
    this.count++
  }
  remove(data) {
    let node = this.header
    let prev = node
    while(node && node.data !== data) {
      if (node.next) {
        prev = node
      }
      node = node.next
    }
    if (node) {
      prev.next = node.next
      this.count--
    } else {
      if (this.count >= this.limit) {
        prev.next = null
        this.count--
      }
    }
  }
  find(data) {
    let node = this.header
    this.remove(data)
    this.header = new Node(data)
    this.header.next = node
    this.count++
  }
}

let ll = new LinkedList(3)
ll.find(3)
ll.find(5)
ll.find(7)
console.log(JSON.stringify(ll))

ll.find(5)
console.log(JSON.stringify(ll))

ll.find(3)
console.log(JSON.stringify(ll))

ll.find(9)
console.log(JSON.stringify(ll))