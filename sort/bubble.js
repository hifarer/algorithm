
let randomArray = require('../utils/random-array')

let arr = randomArray(15)
console.log(arr)
/**
 * 冒泡排序
 * 思路：
 * 每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。如果不满足就让它俩互换。
 * 一次冒泡会让至少一个元素移动到它应该在的位置，重复 n 次，就完成了 n 个数据的排序工作。
 * 特点：
 * 外循环运行了N次，数组的后N个数就是按从小到大的顺序排列的
 * 循环总次数为1+2+3+4+...+N N为数组的长度减一
 * 
 * 假设有一个数组[99, 95, 90, 78, 72, 71, 54, 36, 14, 3]
 * i原本的取值范围是0~arr.length - 1，但是被移动的元素本身就在数组中，因此最多移动arr.length - 1次，所以i的取值范围是0~(arr.length - 1) - 1 
 * 
 * j原本的取值范围是0~arr.length - 1，由于自己不用和自己比较，所以内循环j的取值范围是0~(arr.length - 1) - 1 - i，i为已排序的元素个数，即外循环的i
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
 * n^2/2
 * n^2
 */


// 冒泡的过程只涉及相邻数据的交换操作，只需要常量级的临时空间，所以它的空间复杂度为 O(1)，是一个原地排序算法。

// 相邻的两个元素大小相等的时候不会做交换，所以冒泡排序是稳定的排序算法。