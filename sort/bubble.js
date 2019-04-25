

let randomArray = require('./utils/random-array')

let arr = randomArray(15)
console.log(arr)
/**
 * 冒泡排序
 * 特点：
 * 外循环运行N次，数组的后N个数就是按从小到大的顺序排列的
 * 循环总次数为1+2+3+4+...+N N为数组的长度减一
 * 
 * 假设有一个数组[99, 95, 90, 78, 72, 71, 54, 36, 14, 3]
 * i原本的取值范围是0~arr.length - 1，但是元素本身就在数组中，因此最多移动arr.length - 1次，所以i的取值范围是0~(arr.length - 1) - 1 
 * 
 * j原本的取值范围是0~arr.length - 1，由于自己不用和自己比较，所以内循环j的取值范围是0~(arr.length - 1) - 1 - i，i为已排序的元素个数，即外循环的i
 */
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j + 1] < arr[j]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
}
console.log(arr)

/**
 * 算法复杂度
 * n - 1 + n - 2 + ... + 2 + 1
 * (n - 1 + 1) + (n - 2 + 2)...
 * n*n/2
 * n^2/2
 * n^2
 */