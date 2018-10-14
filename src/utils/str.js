export function getStrByteLength(val) {
  let len = 0
  const str = String(val)
  for (var i = 0; i < str.length; i++) {
    const inc = str.charAt(i).match(/[^\x00-\xff]/ig) ? 2 : 1
    len += inc
  }
  return len
}
