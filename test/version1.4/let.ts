import {assert} from 'chai'


describe('var', () => {
  it('scopes to functions', () => {
    var a = 1;
    for (var a = 1; a < 10; a++) {
    }
    assert.equal(a, 10);
  });

  it('hoisting', () => {
    var a = 'outer';

    (function () {
      a = 'inner';
      var a;
      assert.equal(a, 'inner')
    })();

    assert.equal(a, 'outer');
  });

});

describe('let', () => {
  it('scopes to code blocks', () => {
    let a = 1;
    for (let a = 1; a < 10; a++) {
    }
    assert.equal(a, 1);
  });

  it('no hoisting', () => {
    // a = 'inner'; // compile error
    let a;
  });

  // Uninitialized variables work around strictNullChecks
  // https://github.com/Microsoft/TypeScript/issues/13884
  // https://github.com/Microsoft/TypeScript/issues/23305
  it('compiler does not find all uninitialized lets', () => {
    let a: string;

    // a.trim(); // compile error

    function useA() {
      a.trim(); // does compile
    }

    assert.throw(useA);

  });

});