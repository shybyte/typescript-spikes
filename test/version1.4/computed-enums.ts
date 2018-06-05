import {assert} from 'chai'

const enum ConstEnum {
  Red = 1,
  Blue = 2,
  Green = 4,
  White = Red | Blue | Green
}

describe('computed enum values', () => {
  it('are computed', () => {
    assert.equal(ConstEnum.White, 7);
  });
});