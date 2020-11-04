
let randomArray = require('../utils/random-array')

let list = randomArray(15)
// let list = [6, 8, 7, 6, 3, 5, 9, 4]
console.log(JSON.stringify(list))

/**
 * 快速排序
 * 从数组中随机选一个元素作为基准，比他小的放左边，大的放右边，然后递归调用
 * @param {Array} arr 
 */
// function quickSort(arr) {
//   if (arr.length <= 1) return arr
//   let index = 0
//   let pivot = arr[index]    // 基准元素
//   let left = []
//   let right = []
//   for (let i = 0; i < arr.length; i++) {
//     if (i === index) continue
//     if (arr[i] < pivot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   return quickSort(left).concat([pivot], quickSort(right))
// }
// console.log(quickSort(list))

// 两边扫描
// function partition(arr, l, r) {
//   let pivot = arr[l]
//   while (l < r) {
//     // 注意要判断 *** l < r ***
//     // 注意相等不需要移位
//     // 从右边开始往左找到第一个小于pivot的元素，循环条件是大于等于就继续循环
//     while(l < r && arr[r] >= pivot) r--
//     // 移动到空出来的位置
//     arr[l] = arr[r]
//     // 从左边开始往右找到第一个大于pivot的元素，循环条件是小于等于就继续循环
//     while(l < r && arr[l] <= pivot) l++
//     arr[r] = arr[l]
//   }
//   // pivot放到最终位置上
//   arr[l] = pivot
//   return l
// }

// 一边扫
function partition(arr, l, r) {
  let pivot = arr[r]
  let i = l, j = l    // j相当于已处理部分的最后一个
  for (; i < r; i++) {
    // 小于pivot 交换到前面去 大于pivot的保留在后面 最终会把pivot插到这两个部分的中间
    if (arr[i] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      j++
    }
  }
  arr[r] = arr[j]
  arr[j] = pivot
  return j
}

function quickSort(arr, l, r) {
  if (l < r) {
    // pos为中间位置
    let pos = partition(arr, l, r)
    quickSort(arr, l, pos - 1)
    quickSort(arr, pos + 1, r)
  }
}

quickSort(list, 0, list.length - 1)
console.log(list)