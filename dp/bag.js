
let capacity = 5
let values = [3, 4, 5]
let weights = [2, 3, 4]

let table = []

for (let i = 0; i < values.length; i++) {
  table[i] = []
  // 注意是<=
  for (let j = 0; j <= capacity; j++) {
    // 第0行特殊处理（因为下面要用到i-1）
    if (i === 0) {
      if (j < weights[0]) {
        table[i][j] = 0
      } else {
        table[i][j] = values[0]
      }
      continue
    }
    if (j < weights[i]) {
      table[i][j] = table[i-1][j]
    } else {
      table[i][j] = Math.max(table[i-1][j], table[i-1][j-weights[i]] + values[i])
    }
  }
}

// 输出最后一行的最后一列
console.log(table[values.length - 1][capacity])
