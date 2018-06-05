import DefaultModGreeter from './default-mod';
import {greet} from './default-mod';
import {myFunction, myOtherFunction as renamedOtherFunction, publicName} from './mod1';
import * as mod1 from './mod1';
import {function1, renamedFunction} from './re-export';
import './side-effects'; // bare import

export function useIt() {
  const greeter = new DefaultModGreeter();
  greeter.sayHello();

  greet();

  myFunction(4);
  renamedOtherFunction('Yeah');
  publicName();

  mod1.myFunction(4);
  mod1.myOtherFunction('Yeah');
  mod1.publicName();

  function1();
  renamedFunction('Great');

  console.log(('sideeffect' as any).monkey());  // Banana!
}

