import {assert} from "chai";

// Decorator Factory
function f(arg: string) {
  console.log("f(): evaluated", arg);
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("f(): called");
  }
}

// method decorator
function g(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log("g(): called", {target, propertyKey, descriptor});
}

// class decorator
function sealed(constructor: Function) {
  console.log('sealed', constructor);
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class C {
  @f('arg') @g
  method() {
  }
}

describe('decorators', () => {
  it('can seal', () => {
    assert.throws(() => {
      (C.prototype as any).newProp = 'new prop';
    });
  });

  describe('class', () => {
    function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
      return class extends constructor {
        newProperty = "new property";
        hello = "override";
      }
    }

    @classDecorator
    class Greeter {
      property = "property";
      hello: string;
      constructor(m: string) {
        this.hello = m;
      }
    }

    it('should extend constructor', () => {
      const greeter = new Greeter('marco');
      assert.equal(greeter.hello, 'override');
      assert.equal(greeter.property, 'property');

      // TODO can we get rid of the any somehow?
      assert.equal((greeter as any).newProperty, 'new property');
    });
  })

});