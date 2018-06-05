type Id = string;
type Name = string;
type PrimitiveArray = Array<string|number|boolean>;
type Callback = () => void;

describe('type aliases', () => {
  it('is just an alias', () => {
    const id: Id = 'id';
    const name: Name = id;
    const callback: Callback = () => {};
  });
});