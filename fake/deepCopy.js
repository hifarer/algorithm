
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]' || Object.prototype.toString.call(obj) === '[object Array]'
}

function deepCopy(source, map = new WeakMap()) {
  if (!isObject(source)) return source
  if (map.has(source)) return map.get(source)
  let result = Array.isArray(source) ? [] : {}
  let keys = Object.keys(source)
  map.set(source, result)
  for (let i = 0; i < keys.length; i++) {
    if (isObject(source[keys[i]])) {
      result[keys[i]] = deepCopy(source[keys[i]], map)
    } else {
      result[keys[i]] = source[keys[i]]
    }
  }
  return result
}

let temp = {
  name:'obj.name',
  un:undefined,
  nu:null,
  sy:Symbol(123),
  say:function(){
    console.log(this.name);
  },
  reg:/\d{6}/g,
  date:new Date(),
  child:{
    name:'child.name'
  }
}

console.log(deepCopy(temp))
