// test/Rectangle.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle.js');

// give the test suite a label using describe
describe('rectangle', () => {
  // give the test a label using it
  it('is it a square?', () => {
    assert.strictEqual(new Rectangle(4, 4).isSquare(), true);
    assert.strictEqual(new Rectangle(4, 5).isSquare(), false);
  });
  it('Area of the rectangle', () => {
    assert.strictEqual(new Rectangle(13, 7).getArea(), 91);
  });
  it('Perimeter of the rectangle', () => {
    assert.strictEqual(new Rectangle(13, 7).getPerimeter(), 40);
  });
});

/*
// test/capitalizeFirst.test.js
const assert = require('assert');
const capitalizeFirst = require('../capitalizeFirst');

// give the test suite a label using describe
describe('capitalizeFirst', () => {
  // give the test a label using it
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirst, 'function');
    assert.strictEqual(capitalizeFirst.length, 1);
  });

  it('transforms javaScript correctly', () => {
    assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
  });

  it('works with a 1-character string', () => {
    assert.strictEqual(capitalizeFirst('z'), 'Z');
  });

  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirst(''), '');
  });
});
*/