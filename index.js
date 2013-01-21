var slice = require('sliced')
  , contains = require('contains')

/**
 * Using it for its unique memory location
 */

var PH = {}

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice(arguments, 2);
  
  if (contains(PH, args)) {
    return function(){
      var a = args.slice()
        , b = slice(arguments)
      for (var i = 0, len = args.length; i < len; i++) {
        if (a[i] === PH) a[i] = b.shift()
      }
      return fn.apply(obj, a.concat(b))
    }
  }

  if (!args.length) {
    return function () {
      return fn.apply(obj, arguments)
    }
  } 

  return function () {
    return fn.apply(obj, args.concat(slice(arguments)))
  }
};

module.exports.PH = PH
