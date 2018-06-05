import {assert} from 'chai'

type StringNumberTuple = [string, number];

describe('tuple types', () => {
  let tuple: [string, number] = ['s', 123];

  it('simple assignment', () => {
    tuple = ['s', 123];
    const s: string = tuple[0];
    const n: number = tuple[1];

    // Since TypeScript 1.4
    // When accessing an element outside the set of known indices, a union type is used instead:
    const overflow: string | number = tuple[1234];
  });

  it('assign to array', () => {
    const array: (string | number)[] = tuple;
  });

  it('invalid assignment', () => {
    // tuple = ['s', 123, 'more'];
    // tuple = ['s'];
  });

  it('inference is stupid', () => {
    let t = ['s', 123]; // inferences (string | number)[]

    // tuple = t;
  });

  it('inference in functions is stupid', () => {
    function returnTuple() : [string, number] {
      let t = ['s', 123] // inferences (string | number)[]

      // return t;

      return ['s', 123];
    }
  });
});