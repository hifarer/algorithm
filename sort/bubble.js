
let randomArray = require('../utils/random-array')

let arr = randomArray(15)
console.log(arr)
/**
 * 冒泡排序
 * 思路：
 * 每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。如果不满足就让它俩互换。
 * 一次冒泡会让至少一个元素移动到它应该在的位置，重复 n 次，就完成了 n 个数据的排序工作。
 */
for (let i = 0; i < arr.length - 1; i++) {
  let hasChange = false // 提前退出冒泡循环的标志位
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j + 1] < arr[j]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      hasChange = true
    }
  }
  if (!hasChange) break
}
console.log(arr)

/**
 * 算法复杂度，每一项为内循环的次数
 * (n - 1) + (n - 2) + ... + 2 + 1
 * (n - 1 + 1) + (n - 2 + 2)...
 * n*n/2
 * n^2
 */


// 冒泡的过程只涉及相邻数据的交换操作，只需要常量级的临时空间，所以它的空间复杂度为 O(1)，是一个原地排序算法。

// 相邻的两个元素大小相等的时候不会做交换，所以冒泡排序是稳定的排序算法。