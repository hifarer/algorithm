
let randomArray = require('./utils/random-array')

let list = randomArray(15)
console.log(list)

/**
 * 快速排序
 * 从数组中随机选一个元素作为基准，比他小的放左边，大的放右边，然后递归调用
 * @param {Array} arr 
 */
function quickSort (arr) {
  if (arr.length <= 1) return arr
  let index = 0
  let pivot = arr[index]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (i === index) continue
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
console.log(quickSort(list))