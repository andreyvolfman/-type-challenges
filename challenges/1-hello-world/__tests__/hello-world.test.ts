import type { Equal, Expect, NotAny } from '../../../utils';
import type { HelloWorld } from '../hello-world';

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
