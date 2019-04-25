

let randomArray = require('./utils/random-array')

let arr = randomArray(15)
console.log(arr)

/**
 * 选择排序
 * 每次找出未排序部分最小值的索引，和未排序部分第一个元素交换位置
 */
for (let i = 0; i < arr.length; i++) {
  let minIndex = i   // 未排序部分的第一个
  for (let j = i; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j
    }
  }
  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
}
console.log(arr)

/**
 * 算法复杂度
 * n + n - 1 + ... + 2 + 1
 * (n + 1)*n/2
 * n^2/2 + n/2
 * n^2/2
 * n^2 
 */