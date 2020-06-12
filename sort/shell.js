
let randomArray = require('../utils/random-array')

let list = randomArray(15)
console.log(list)

/**
 * 希尔排序
 * 将要排序的一组数按某个增量d分成若干组（不是真的分组），***每组元素的下标并不连续，下标相差d***，对每组使用直接插入排序算法排序；当增量减至1时，排序完成。
 * 初次取序列的一半为增量，以后每次减半，直到增量为1
 * @param {Array} arr 
 */
function shellSort (arr) {
  let len = arr.length
  // 增量递减
  // 假设数组的长度为9，增量分别为4 2 1；假设数组的长度为10，增量分别为5 2 1
  for (let i = Math.floor(len / 2); i > 0; i = Math.floor(i / 2)) {
    // i为增量，j = i即arr[j]是某分组的第N个元素（例如增量为4，arr[4]是数组的第五个元素，即分组1的第0个元素）
    // 随着j值变化，arr[j]指向不同分组的第N个元素（1~N个分组的第一个元素N次，1~N个分组的第二个元素N次...）
    for (let j = i; j < len; j++) {
      let temp = arr[j]   // 待排序部分的第一个元素
      let k = j - i   // 已排序部分的最后一个元素
      // 这里k需要大于等于0，因为有可能最大的元素是第0个
      while (k >= 0 && arr[k] > temp) {
        arr[k + i] = arr[k]
        k -= i  // 取已排序部分的上一个元素
      }
      // 不满足while条件，说明待排序元素应该放到这个已排序元素的后面
      arr[k + i] = temp
    }
  }
  return arr
}

console.log(shellSort(list))

// 希尔排序过程中，只涉及相邻数据的交换操作，只需要常量级的临时空间，空间复杂度为 O(1) 。所以，希尔排序是原地排序算法。

// 单次直接插入排序是稳定的，它不会改变相同元素之间的相对顺序，但在多次不同的插入排序过程中，相同的元素可能在各自的插入排序中移动，可能导致相同元素相对顺序发生变化。 因此，希尔排序不稳定。