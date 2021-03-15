# point-in-polygon

Determine if a point is inside of a polygon.

This module casts a semi-infinite ray from the inquiry point and counts intersections,
based on
[this algorithm](https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html).

If you need a numerically robust solution and are willing to trade some performance for it,
use [robust-point-in-polygon](https://github.com/mikolalysenko/robust-point-in-polygon).

# example

``` js
var inside = require('point-in-polygon');
var polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];

console.dir([
    inside([ 1.5, 1.5 ], polygon),
    inside([ 4.9, 1.2 ], polygon),
    inside([ 1.8, 1.1 ], polygon)
]);
```

output:

```
[ true, false, true ]
```

# methods

``` js
var inside = require('point-in-polygon')
```

## inside(point, polygon)

Return whether `point` is contained in `polygon`.

`point` should be a 2-item array of coordinates.

`polygon` should be an array of 2-item arrays of coordinates.

# install

```
npm install point-in-polygon
```

# license

MIT
