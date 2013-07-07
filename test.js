var cells = require('./')
var test = require('tape')

function sorter(a, b) {
  a = a.join(',')
  b = b.join(',')
  return a > b ? -1 : a < b ? 1 : 0
}

test('Moore 2D, 1 range', function(t) {
  t.deepEqual(cells([-1, -1], [1, 1]).sort(sorter), [
    [-1,-1], [ 0,-1], [ 1,-1],
    [-1, 0], [ 0, 0], [ 1, 0],
    [-1, 1], [ 0, 1], [ 1, 1]
  ].sort(sorter))
  t.end()
})

test('Moore 2D, 2 range', function(t) {
  t.deepEqual(cells([-2, -2], [2, 2]).sort(sorter), [
    [-2,-2], [-1,-2], [ 0,-2], [ 1,-2], [ 2,-2],
    [-2,-1], [-1,-1], [ 0,-1], [ 1,-1], [ 2,-1],
    [-2, 0], [-1, 0], [ 0, 0], [ 1, 0], [ 2, 0],
    [-2, 1], [-1, 1], [ 0, 1], [ 1, 1], [ 2, 1],
    [-2, 2], [-1, 2], [ 0, 2], [ 1, 2], [ 2, 2]
  ].sort(sorter))
  t.end()
})

test('Arbitrary 2D', function(t) {
  t.deepEqual(cells([50, 50], [52, 52]).sort(sorter), [
    [50, 50], [50, 51], [50, 52],
    [51, 50], [51, 51], [51, 52],
    [52, 50], [52, 51], [52, 52]
  ].sort(sorter))
  t.end()
})

test('Moore 3D, 1 range', function(t) {
  t.deepEqual(cells([-1, -1, -1], [1, 1, 1]).sort(sorter), [
    [-1,-1,-1], [ 0,-1,-1], [ 1,-1,-1],
    [-1, 0,-1], [ 0, 0,-1], [ 1, 0,-1],
    [-1, 1,-1], [ 0, 1,-1], [ 1, 1,-1],

    [-1,-1, 0], [ 0,-1, 0], [ 1,-1, 0],
    [-1, 0, 0], [ 0, 0, 0], [ 1, 0, 0],
    [-1, 1, 0], [ 0, 1, 0], [ 1, 1, 0],

    [-1,-1, 1], [ 0,-1, 1], [ 1,-1, 1],
    [-1, 0, 1], [ 0, 0, 1], [ 1, 0, 1],
    [-1, 1, 1], [ 0, 1, 1], [ 1, 1, 1]
  ].sort(sorter))
  t.end()
})

test('Binary 4D', function(t) {
  t.deepEqual(cells([0, 0, 0, 0], [1, 1, 1, 1]).sort(sorter), [
    [1, 0, 0, 1], [1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0],
    [1, 0, 1, 1], [1, 0, 1, 0], [1, 1, 1, 1], [1, 1, 1, 0],
    [0, 0, 0, 1], [0, 0, 0, 0], [0, 1, 0, 1], [0, 1, 0, 0],
    [0, 0, 1, 1], [0, 0, 1, 0], [0, 1, 1, 1], [0, 1, 1, 0]
  ].sort(sorter))
  t.end()
})
