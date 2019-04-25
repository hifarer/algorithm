
let randomArray = require('./utils/random-array')

let arr = randomArray(15)
console.log(arr)

/**
 * 插入排序
 * 将数组的一部分视为已排序好，这一部分最开始是数组的第一个元素
 * 将未排序部分的第一个元素取出，和已排序部分倒序比较，找到适合他放置的索引
 */
for (let i = 1; i < arr.length; i++) {
  let j = i - 1 // 排好序部分的最后一个的索引
  let item = arr[i]
  while (arr[j] > item && j >= 0) {
    arr[j + 1] = arr[j]
    j--
  }
  arr[j + 1] = item
}
console.log(arr)

/**
 * 算法复杂度
 * 1 + 2 + ... + n - 2 + n - 1
 * (n - 1 + 1) + (n - 2 + 2)
 * n*n/2
 * n^2/2
 * n^2
 */