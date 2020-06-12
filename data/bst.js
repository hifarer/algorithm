
class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
  show() {
    console.log(this.data)
  }
}

class BST {
  constructor(arr) {
    this.root = null
    if (Array.isArray(arr)) {
      arr.forEach(item => {
        this.insert(item)
      })
    }
  }
  insert(data) {
    let current = this.root
    if (current === null) {
      this.root = new Node(data)
    } else {
      while (true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = new Node(data)
            break
          } else {
            current = current.left
          }
        } else {
          if (current.right === null) {
            current.right = new Node(data)
            break
          } else {
            current = current.right
          }
        }
      }
    }
  }
  // 中序遍历
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left)
      node.show()
      this.inOrder(node.right)
    }
  }
  // 前序遍历
  preOrder(node) {
    if (node !== null) {
      node.show()
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  // 后续遍历
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      node.show()
    }
  }
  // 循环中序
  loopInOrder() {
    if (!this.root) return
    let node = this.root
    let stack = []
    // 进出栈序列：根左左根右右
    while (stack.length > 0 || node) {
      if (node) {
        stack.push(node)
        node = node.left
      } else {
        node = stack.pop()
        node.show()
        node = node.right
      }
    }
  }
  // 循环前序
  loopPreOrder() {
    if (!this.root) return
    let node = this.root
    let stack = []
    stack.push(node)
    // 进出栈序列：根根左右左右
    while (stack.length > 0) {
      node = stack.pop()
      node.show()
      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left)
    }
  }
  // 循环后序
  loopPostOrder() {
    if (!this.root) return
    let node = this.root
    let stack = []
    let datas = []
    stack.push(node)
    while (stack.length > 0) {
      node = stack.pop()
      // 根右左左右根
      datas.push(node.data)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
    while(datas.length > 0) {
      console.log(datas.pop())
    }
  }
  //  bfs分层遍历，使用队列
  levelOrder() {
    let node = this.root
    if (node === null) {
      return
    }
    let queue = [node]
    while (queue.length > 0) {
      let node = queue.shift()
      node.show()
      if (node.left !== null) {
        next.push(node.left)
      }
      if (node.right !== null) {
        next.push(node.right)
      }
    }
  }
  // 获取树的深度
  getTreeDepth(node = this.root) {
    if (node.left === null && node.right === null) {
      return 1
    } else if (node.left === null && node.right !== null) {
      return this.getTreeDepth(node.right) + 1
    } else if (node.left !== null && node.right === null) {
      return this.getTreeDepth(node.left) + 1
    } else {
      return Math.max(this.getTreeDepth(node.left), this.getTreeDepth(node.right)) + 1
    }
  }
  // 找最小值
  findMin(node = this.root) {
    if (node.left !== null) {
      return this.findMin(node.left)
    } else {
      return node.data
    }
  }
  // 找最大值
  findMax(node = this.root) {
    if (node.right !== null) {
      return this.findMax(node.right)
    } else {
      return node.data
    }
  }
  // 根据值找节点
  findDataNode(data, node = this.root) {
    if (data < node.data) {
      return node.left !== null ? this.findDataNode(data, node.left) : null
    } else if (data > node.data) {
      return node.right !== null ? this.findDataNode(data, node.right) : null
    } else {
      return node
    }
  }
  // 使用循环的方式根据值找节点
  loopFindDataNode(data) {
    let parent = this.root
    let current = this.root
    let referName = ''
    while(true) {
      if (data < current.data) {
        if (current.left) {
          parent = current
          current = current.left
          referName = 'left'
        } else {
          current = null
          break
        }
      } else if (data > current.data) {
        if (current.right) {
          parent = current
          current = current.right
          referName = 'right'
        } else {
          current = null
          break
        }
      } else {
        break
      }
    }
    return [parent, referName, current]
  }
  // 删除节点
  // 1.删除的节点为叶子节点：直接删除。
  // 2.删除的节点只存在左子树或右子树：删除节点的父节点直接指向子树节点。
  // 3.删除的节点同时存在左子树和右子树：将待删除节点的左子树的最右节点或右子树的最左节点用于替换待删除节点。因为左子树最右节点是左子树上最大的，把他移上去，左右子树其他节点都不用动。
  removeNodeFromTree(data) {
    // 找到对应的节点
    let [parent, referName, current] = this.findDataNode(data)

    // 没找到
    if (!current) return
    // 是叶子节点直接删除
    if (current.left === null && current.right === null) {
      referName === ''
        ? this.root === null 
        : (
          referName === 'left'
          ? parent.left = null 
          : parent.right = null
        )
    } else if (current.left !== null && current.right !== null) {
      // 选择左子树的最右节点作为替换节点
      let targetNodeParent = current
      let targetNode = current.left
      let targetReferName = 'left'
      while(targetNode.right !== null) {
        targetNodeParent = targetNode
        targetNode = targetNode.right
        targetReferName = 'right'
      }
      // 从原来的位置移除targetNode
      if (targetReferName === 'left' ) {
        targetNodeParent.left = null
      } else {
        targetNodeParent.right = null
      }
      // 把targetNode放到待删除节点的位置
      if (referName === 'left') {
        parent.left = targetNode
      } else if (referName === 'right') {
        parent.right = targetNode
      } else {
        this.root = parent = targetNode
      }
      // targetNode的子节点指向原来待删除元素的子节点，如果targetNode本身有left 或者right，说明只要把right或者left 挂上去
      if (!targetNode.left) {
        targetNode.left = current.left
      }
      if (!targetNode.right) {
        targetNode.right = current.right
      }
    } else {
      referName === 'left'
        ? parent.left = current.left || current.right 
        : parent.right = current.left || current.right
    }
  }
}

const tree = new BST([40, 32, 88, 97, 190, 3, 0, -10])
tree.insert(24)
tree.insert(75)
tree.insert(100)
console.log(JSON.stringify(tree.root))

// tree.inOrder(tree.root)
// tree.preOrder(tree.root)
// tree.postOrder(tree.root)
console.log('------------------------------------------')
// tree.loopInOrder()
// tree.loopPreOrder()
// tree.loopPostOrder()
// tree.levelOrder()

// let depth = tree.getTreeDepth()
// console.log(depth)
// let node = tree.findDataNode(100)
// console.log(node)

// let min = tree.findMin()
// console.log(min)
// let max = tree.findMax()
// console.log(max)

tree.removeNodeFromTree(40)
console.log(JSON.stringify(tree.root))
tree.removeNodeFromTree(97)
console.log(JSON.stringify(tree.root))
