
let randomArray = require('../utils/random-array')

let arr = randomArray(15)
console.log(arr)

/**
 * 归并排序
 * 思路：
 * 拆成长度为一的数组，然后比较两个数组的第一项，小的先进入结果数组
 */

function mergeSort (arr) {
  if (arr.length < 2) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  // 因为left和right长度可能不一样
  return result.concat(left).concat(right)
}

console.log(mergeSort(arr))

// 归并排序在合并两个有序数组为一个有序数组时，需要借助额外的存储空间。在任意时刻，CPU只会有一个函数在执行，也就只会有一个临时的内存空间在使用。临时内存空间最大也不会超过 n 个数据的大小，所以空间复杂度是 O(n)。所以归并排序不是原地排序算法。

// merge 方法里面的left[0] <= right[0] ，保证了值相同的元素，在合并前后的先后顺序不变。归并排序是稳定的排序方法。

// 假设数组长度为 n，那么拆分数组共需 logn 步，又每步都是一个普通的合并子数组的过程，时间复杂度为 O(n)，故其综合时间复杂度为 O(n log n)。