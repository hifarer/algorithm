
let randomArray = require('../utils/random-array')

let list = randomArray(15)
console.log(list)

/**
 * 桶排序
 * 只能用在数据范围不大的场景中，若数据范围 k 比要排序的数据 n 大很多，就不适合用计数排序。
 * 计数排序只能给非负整数排序，其他类型需要在不改变相对大小情况下，转换为非负整数。比如如果考试成绩精确到小数后一位，就需要将所有分数乘以 10，转换为整数。
 * @param {Array} arr 
 */
function bucketSort (arr) {

}


console.log(bucketSort(list))
