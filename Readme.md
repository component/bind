
# bind

  Function binding utiliy.

## API

   - [bind(obj, fn)](#bindobj-fn)
   - [bind(obj, fn, ...)](#bindobj-fn-)
   - [bind(obj, name)](#bindobj-name)
<a name="" />
 
<a name="bindobj-fn" />
### bind(obj, fn)
should bind the function to the given object.

```js
var tobi = { name: 'tobi' };

function name() {
  return this.name;
}

var fn = bind(tobi, name);
fn().should.equal('tobi');
```

<a name="bindobj-fn-" />
### bind(obj, fn, ...)
should curry the remaining arguments.

```js
function add(a, b) {
  return a + b;
}

bind(null, add)(1, 2).should.equal(3);
bind(null, add, 1)(2).should.equal(3);
bind(null, add, 1, 2)().should.equal(3);
```

<a name="bindobj-name" />
### bind(obj, name)
should bind the method of the given name.

```js
var tobi = { name: 'tobi' };

tobi.getName = function() {
  return this.name;
};

var fn = bind(tobi, 'getName');
fn().should.equal('tobi');
```

## License 

(The MIT License)

Copyright (c) 2012 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.