
class Node {
  constructor (data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
  show () {
    console.log(this.data)
  }
}

class BST {
  constructor (arr) {
    this.root = null
    if (Array.isArray(arr)) {
      arr.forEach(item => {
        this.insert(item)
      })
    }
  }
  insert (data) {
    let current = this.root
    let parent = null
    if (current === null) {
      this.root = new Node(data)
    } else {
      while (current !== null) {
        parent = current
        if (data < current.data) {
          current = current.left
          if (current === null) {
            parent.left = new Node(data)
          }
        } else {
          current = current.right
          if (current === null) {
            parent.right = new Node(data)
          }
        }
      }
    }
  }
  // 中序遍历
  inOrder (node) {
    if (node !== null) {
      this.inOrder(node.left)
      node.show()
      this.inOrder(node.right)
    }
  }
  // 前序遍历
  preOrder (node) {
    if (node !== null) {
      node.show()
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  // 后续遍历
  postOrder (node) {
    if (node !== null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      node.show()
    }
  }
  // 分层遍历 bfs
  levelOrder () {
    let node = this.root
    let queue = []
    let datas = []
    if (node === null) {
      return
    }
    queue = [node]
    while (queue.length > 0) {
      let node = queue.shift()
      datas.push(node.data)
      if (node.left !== null) {
        next.push(node.left)
      }
      if (node.right !== null) {
        next.push(node.right)
      }
    }
    console.log(datas);
  }
  // 找最小值
  findMin (node = this.root) {
    if (node.left !== null) {
      return this.findMin(node.left)
    } else {
      return node.data
    }
  }
  // 找最大值
  findMax (node = this.root) {
    if (node.right !== null) {
      return this.findMax(node.right)
    } else {
      return node.data
    }
  }
  // 根据值找节点
  findDataNode (data, node = this.root) {
    if (data < node.data) {
      return node.left !== null ? this.findDataNode(data, node.left) : null
    } else if (data > node.data) {
      return node.right !== null ? this.findDataNode(data, node.right) : null
    } else {
      return node
    }
  }
  // 删除节点
  removeNodeFromTree (data) {
    let node = this.root
    let parent = null
    let refer = ''
    while (true) {
      if (data < node.data) {
        if (node.left !== null) {
          parent = node
          node = node.left
          refer = 'left'
        } else {
          break;
        }
      } else if (data > node.data)  {
        if (node.right !== null) {
          parent = node
          node = node.right
          refer = 'right'
        } else {
          break;
        }
      } else {
        break;
      }
    }
    if (data === node.data) {
      // parent === null means remove the root node
      if (node.left === null && node.right === null) {
        parent === null ? this.root = null : parent[refer] = null
      } else if (node.left !== null && node.right !== null) {
        let subNode = node.left
        let rightNode = node.right
        parent === null ? this.root = subNode : parent[refer] = subNode
        while (subNode.right !== null) {
          subNode = subNode.right
        }
        subNode.right = rightNode
      } else {
        node = node.left || node.right
        parent === null ? this.root = node : parent[refer] = node
      }
    }
  }
  // 获取树的深度
  getTreeDepth (node = this.root) {
    if (node.left === null && node.right === null) {
      return 1
    } else if (node.left === null && node.right !== null) {
      return this.getTreeDepth(node.right) + 1;
    } else if (node.left !== null && node.right === null) {
      return this.getTreeDepth(node.left) + 1;
    } else {
      return Math.max(this.getTreeDepth(node.left), this.getTreeDepth(node.right)) + 1
    }
  }
}

const tree = new BST([40, 32, 88, 97, 190, 3, 0, -10])

tree.insert(24)
tree.insert(75)
tree.insert(100)

console.log(JSON.stringify(tree))
// tree.inOrder(tree.root)
// tree.preOrder(tree.root)
// tree.postOrder(tree.root)
tree.levelOrder()
// let min = tree.findMin()
// console.log(min)

// let max = tree.findMax()
// console.log(max)

// let node = tree.findDataNode(100);
// console.log(node)

// tree.removeNodeFromTree(40);
// console.log(JSON.stringify(tree))

// let depth = tree.getTreeDepth()
// console.log(depth)