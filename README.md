# `inf`

`inf` is a function that creates an "infinite" Javascript object by abusing
property getters.

Here's an example

```
const a = inf('a');

console.log(a.b.c.d.e.f.g.h.i.j.k.l);
// { letter: l, get m: function () }

console.log(JSON.stringify(a));
// RangeError: Maximum call stack size exceeded
// in chrome, anyway -- other browsers might not try to traverse the 
// whole thing.

// The properties wrap around z -> a
console.log(inf('z').a.b.c);
```

## Usage

```
import inf from './inf';

const a = inf('a');

// Each inf level has a letter property
console.log(a.letter === 'a'); // true
console.log(a.b.letter === 'b'); // true

// inf levels from different inf instances aren't strictly equal
console.log(a.b.c === inf('c')); // false
console.log(a.b.c.letter === inf('c').letter); // true
```

