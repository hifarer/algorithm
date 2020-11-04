
let randomArray = require('../utils/random-array')

let list = randomArray(15)
console.log(list)

/**
 * 桶排序
 * 1. 找到最大值和最小值
 * 2. 根据最小值、最大值、桶的大小，计算得到桶的个数，初始化桶
 * 3. 计算每一个值应该放在哪一个桶中
 * 4. 对每一个桶进行排序
 * 5. 把排序后的桶合并得到结果
 * @param {Array} arr
 */
function bucketSort (arr) {
  let min = arr[0], max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]
    if (arr[i] > max) max = arr[i]
  }
  let bucketSize = 5
  let bucketCount = ~~((max - min) / bucketSize) + 1
  let buckets = new Array(bucketCount)
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < arr.length; i++) {
    let index = ~~((arr[i] - min) / bucketSize)
    buckets[index].push(arr[i])
  }
  let result = []
  for (let i = 0; i < bucketCount; i++) {
    insertSort(buckets[i])
    result.push(...buckets[i])
  }
  return result
}

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (arr[j] > temp) arr[j + 1] = arr[j]
    }
    arr[j] = temp
  }
}

console.log(bucketSort(list))
