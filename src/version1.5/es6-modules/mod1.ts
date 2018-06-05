export function myFunction(x: number) {
  return x + 1;
}

export function myOtherFunction(x: string) {
  return x + '!';
}

function localName() {
    return 666;
}

export {localName as publicName}