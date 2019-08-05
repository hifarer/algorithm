

let randomArray = require('../utils/random-array')

let arr = randomArray(15)
console.log(arr)

/**
 * 选择排序
 * 思路：
 * 选择排序算法分已排序区间和未排序区间，每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。
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


// 选择排序空间复杂度为 O(1)，是一种原地排序算法

// 选择排序每次都要找剩余未排序元素中的最小值，并和前面的元素交换位置，这样破坏了稳定性（5 8 5 2 9，第一次选出2，2和第一个5交换即破坏了稳定性）。所以选择排序是一种不稳定的排序算法。