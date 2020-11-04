
module.exports = (count, max = 100) => {
  let arr = []
  for (let i = 0; i < count; i++) {
    arr.push(Math.round(Math.random()* max))
  }
  return arr
}