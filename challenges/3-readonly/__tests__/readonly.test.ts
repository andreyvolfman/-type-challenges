import type { Equal, Expect } from '../../../utils';
import type { MyReadonly } from '../readonly';

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
        author: string;
    };
}
