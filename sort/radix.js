
let randomArray = require('../utils/random-array')

let list = randomArray(15, 1000)
console.log(list)

/**
 * 基数排序
 * 核心是使用稳定排序从低位逐次排列到高位。
 * 19和18，按个位排，9大于8，因而顺序是18、19。二者十位上的数值相等，如果此时排十位的算法是不稳定的话，会可能出现19在前，18在后这样的情形。
 * 
 * @param {Array} arr
 */
function radixSort (arr) {
  /**
   * 求最大位数并初始化桶
   * 变基
   * 分桶+合桶
   */
  let buckets = []
  let n = 1
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
  }
  let temp
  while (temp = ~~(max / 10)) {
    n++
    max = temp
  }
  for (let i = 0; i < 10; i++) {
    buckets.push([])
  }
  let base = 10
  for (let i = 0; i < n; i++) {
    let unit = Math.pow(base, i)
    for (let j = 0; j < arr.length; j++) {
      // 假设数为627 
      // 个位 627 % 10 = 7 7/1 = 7
      // 十位 627 % 100 = 27 27/10 = 2
      // 百位 627 % 1000 = 627 627/100 = 6
      let x = ~~((arr[j] % (unit * 10)) / unit)
      buckets[x].push(arr[j])
    }
    // console.log(buckets)
    for (let j = 0, k = 0; j < 10; j++) {
      while(buckets[j].length) {
        arr[k++] = buckets[j].shift()
      }
    }
  }
  return arr
}


console.log(radixSort(list))
