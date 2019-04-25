
module.exports = count => {
  let arr = []
  for (let i = 0; i < count; i++) {
    arr.push(Math.round(Math.random()* 100))
  }
  return arr
}