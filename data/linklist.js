
class Node {
  constructor(data) {
    this.prev = null
    this.next = null
    this.data = data
  }
}

class LinkedList {
  constructor() {
    this.header = null
  }
  add(node) {
    if (this.header === null) {
      this.header = node
    } else {
      let current = this.header
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
      node.prev = current
    }
  }
  remove(node) {
    let current = this.header
    while (current && current.data !== node.data) {
      current = current.next
    }
    if (current) {
      current.prev.next = current.next
      if (current.next) {
        current.next.prev = current.prev
      }
      current = null
    }
  }
}

let ll = new LinkedList()
ll.add(new Node(3))
ll.add(new Node(5))
ll.add(new Node(7))
ll.remove(new Node(5))

console.log(ll)