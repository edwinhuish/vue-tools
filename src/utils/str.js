export function byteCount(val) {
  let len = 0
  const str = String(val)
  for (var i = 0; i < str.length; i++) {
    const inc = str.charAt(i).match(/[^\x00-\xff]/ig) ? 2 : 1
    len += inc
  }
  return len
}

export function uniqueWords(str = '', preps = []) {
  const o = {}
  str.split(/\s+/g).forEach(function(word) {
    const key = word.trim().toLowerCase()
    const found = preps.find(function(element) {
      return element === key
    })
    if (found === undefined) {
      o[key] = 1
    }
  })
  return Object.keys(o).join(' ')
}

export function uniqueKeywords(str) {
  const prep = ['or', 'and', 'a', 'of', 'the', 'for', 'with', 'this', 'is', 'am', 'are', 'were']
  return uniqueWords(str, prep)
}

export function flatStr(str = '') {
  return str.replace(/\s+/g, ' ').trim()
}
