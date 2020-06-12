let a = 'helloworld'
let b = 'loop'

let rows = a.split('')
rows.unshift('')
let cols = b.split('')
cols.unshift('')

let table = []
let i, j
for (i = 0; i < rows.length; i++) {
  table[i] = []
  for (j = 0; j < cols.length; j++) {
    if (i === 0 || j === 0) {
      table[i][j] = 0
    } else {
      if (rows[i] === cols[j]) {
        table[i][j] = table[i - 1][j - 1] + 1
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1])
      }
    }
  }
}

let result = []
i--
j--

while (i > 0 && j > 0) {
  // 这里不要去a b中取！！！
  if (rows[i] === cols[j]) {
    result.unshift(rows[i])
    i--
    j--
  } else {
    // 如果上边的大于左边的，向上即i--
    if (table[i-1][j] > table[i][j-1]) {
      i--
    } else {
      j--
    }
  }
}

console.log(result.join(''))
