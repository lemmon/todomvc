export default assert

function assert(t, m) {
  if (!t) throw new Error(m || 'AssertionError')
}

assert.notEqual = function (a, b, m) {
  assert(a != b, m) // eslint-disable-line eqeqeq
}

assert.notOk = function (t, m) {
  assert(!t, m)
}

assert.equal = function (a, b, m) {
  assert(a == b, m) // eslint-disable-line eqeqeq
}

assert.ok = assert
