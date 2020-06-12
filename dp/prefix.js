
function longestCommonPrefix(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return ''
  }
  let prefix = list[0]
  for (let i = 1; i < list.length; i++) {
    let j = 0;
    for (; j < prefix.length && j < list[i].length; j++) {
      if (prefix[j] !== list[i][j]) {
        break
      }
    }
    prefix = prefix.substring(0, j)
    if (prefix === '') return ''
  }
  return prefix
}


console.log(longestCommonPrefix(["flower", "flow", "flight"]))