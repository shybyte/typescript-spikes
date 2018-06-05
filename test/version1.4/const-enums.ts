import {assert} from 'chai'


export enum NormalEnum {Red, Blue, Green}
export const enum ConstEnum {Red, Blue}

// (completely inlined enums)
describe('const enum', () => {
  it('can not modify enums', () => {
    // NormalEnum.Red = 666; // compile error
    // ConstEnum.Red = 666; // compile error
  });

  it('compiles differently', () => {
    // assert.isUndefined(ConstEnum); // compile error
    assert.isObject(NormalEnum);
  });

  it('is just a number but compiles different', () => {
    // compiles to:
    // var n2 = NormalEnum.Red;
    const n2: number = NormalEnum.Red;
    assert.equal(n2, 0);
    assert.equal(NormalEnum.Blue, 1);

    // compiles to:
    // var n1 = 0 /* Red */;
    const n1: number = ConstEnum.Red;
    assert.equal(n1, 0);
    assert.equal(ConstEnum.Blue, 1);
  });

  it('assignments', () => {
    let enumValue: ConstEnum = ConstEnum.Red;
    enumValue = 123;  // does compile
    // enumValue = NormalEnum.Green; // does not compile
  });

});