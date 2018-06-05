import {assert} from 'chai'

class Animal {
  run() {
  }
}

class Dog extends Animal {
  woof() {
  }
}

class Cat extends Animal {
  meow() {
  }
}

let union: string | number[] = [];
let animal: Animal = new Dog();

describe('union types and type guards', () => {
  it('valid assignment', () => {
    union = 's';
    union = [1];
  });

  it('access shared properties', () => {
    const s = union.toString();
  });

  it('inference in functions', () => {
    function returnUnion(type: string) {
      return type === 'string' ? 's' : []
    }

    union = returnUnion('string');
  });

  describe('type guards', () => {
    it('typeof', () => {
      if (typeof union === 'string') {
        union.trim()
      } else {
        union.push(1)
      }
    });

    it('instanceof', () => {
      if (union instanceof Array) {
        union.push(12);
      } else {
        union.trim()
      }
    });

    it('instanceof for own classes', () => {
      if (animal instanceof Dog) {
        animal.woof()
      } else if (animal instanceof Cat) {
        animal.meow();
      } else {
        animal.run();
      }
    });

    // Other kind of type guards will come in later typescript versions.
  });
});