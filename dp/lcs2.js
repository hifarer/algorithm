let a = 'helloworld'
let b = 'loop'

let rows = a.split('')
rows.unshift('')
let cols = b.split('')
cols.unshift('')

let table = []
let i, j
let max = 0
let index = 0
for (i = 0; i < rows.length; i++) {
  table[i] = []
  for (j = 0; j < cols.length; j++) {
    if (i === 0 || j === 0) {
      table[i][j] = 0
    } else {
      if (rows[i] === cols[j]) {
        table[i][j] = table[i - 1][j - 1] + 1
      } else {
        table[i][j] = 0
      }
    }
    if (max < table[i][j]) {
      max = table[i][j]
      // index赋值的i，那就需要在a中取
      index = i
    }
  }
}

console.log(table)

if (max === 0){
  console.log('')
} else {
  let str = ''
  for (let k = index - max + 1; k <= index; k++) {
    str += rows[k]
  }
  console.log(str)
}
