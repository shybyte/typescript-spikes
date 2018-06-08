import {assert} from 'chai'

describe('destructering', () => {
  describe('objects', () => {
    it('destructeres', () => {
      const object = {x: 1, y: 2, z: 3};
      const {x, y} = object;
      assert.equal(x, 1);
      assert.equal(y, 2);
    });

    it('default values', () => {
      const {x, y, z = 3} = {x: 1, y: 2};
      assert.equal(x, 1);
      assert.equal(y, 2);
      assert.equal(z, 3);
    });

    it('renaming', () => {
      const {x, y: newY} = {x: 1, y: 2};
      assert.equal(newY, 2);
    });
  });

  describe('array', () => {
    const array = [0, 1, 2];

    it('default destructeres', () => {
      const [zero, ...tail] = array;
      assert.equal(zero, 0);
      assert.deepEqual(tail, [1, 2])
    });

    it('default values', () => {
      const [x, y, z = 2] = [0, 1];
      assert.equal(x, 0);
      assert.equal(y, 1);
      assert.equal(z, 2);
    });
  });

  it('function parameter declarations', () => {
    function drawText({text = '', position: [x, y] = [0, 0], bold = false}) {
      return {text, position: [x, y], bold};
    }

    assert.deepEqual(drawText({position: [1, 2]}), {text: '', position: [1, 2], bold: false})
  });

  it('assignments', () => {
    let x = 1;
    let y = 2;
    [x, y] = [y, x];
    assert.equal(x, 2);
    assert.equal(y, 1);
  });

});