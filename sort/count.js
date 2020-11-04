
let randomArray = require('../utils/random-array')

let list = randomArray(15)
console.log(list)

/**
 * 计数排序
 * 只能用在数据范围不大的场景中，若数据范围 k 比要排序的数据量 n 大很多，就不适合用计数排序。
 * 计数排序只能给非负整数排序，其他类型需要在不改变相对大小情况下，转换为非负整数。
 * 比如考试成绩需要精确到小数后一位，就需要将所有分数乘以 10，转换为整数。
 * 比如待排序的数字范围为-1000~1000，那么就需要将所有数值加上1000再排序。
 * @param {Array} arr 
 */
function countSort (arr) {
  /**
   * 1. 查找数组中的最大值，确定桶的数量
   * 2. 初始化桶
   * 3. 计算每个数的出现次数
   * 4. 依次累加次数
   * 5. 关键步骤：元素在结果数组的位置等于它保存的次数减一，元素处理后，它保存的次数减一
   */

  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
  }
  // 注意条件
  let bucket = new Array(max + 1)
  for (let i = 0; i <= max; i++) {
    bucket[i] = 0
  }
  for (let i = 0; i < arr.length; i++) {
    bucket[arr[i]]++
  }
  for (let i = 1; i < bucket.length; i++) {
    // 注意运算数
    bucket[i] = bucket[i - 1] + bucket[i]
  }
  let result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    let index = --bucket[arr[i]]
    result[index] = arr[i]
  }
  return result
}


console.log(countSort(list))
