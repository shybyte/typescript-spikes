import {assert} from 'chai'

class Parent {
  protected protected_member: number

  constructor(protected_member: number) {
    this.protected_member = protected_member;
  }
}

class Subclass extends Parent {
  getProtectedMember() {
    return this.protected_member;
  }
}

describe('protected member', () => {
  it('non subclasses can not access protected members', () => {
    const parent = new Parent(123);
    // console.log(parent.getProtectedMember());
  });

  it('subclass can access protected member', () => {
    const subclass = new Subclass(123);
    assert.equal(subclass.getProtectedMember(), 123);
  });
});