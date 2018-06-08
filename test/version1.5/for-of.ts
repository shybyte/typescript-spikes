import {assert} from 'chai'


describe('for of', () => {
  it('iterates over arrays', () => {
    const array = [0, 1, 2];
    const result = [];
    for (const el of array) {
      result.push(el);
    }
    assert.deepEqual(result, array);
  });

  it('iterates over strings', () => {
    const result = [];
    for (const el of '123') {
      result.push(el);
    }
    assert.deepEqual(result, ['1', '2', '3']);
  });

  it('iterates over generator if "target": "es6"', () => {
    function* generate() {
      yield 1
      yield 2
      yield 3
    }

    const result = [];
    for (const el of generate()) {
      result.push(el);
    }
    assert.deepEqual(result, [1, 2, 3]);
  });
});