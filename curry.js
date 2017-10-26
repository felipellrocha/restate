// from https://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/

export default function(fx) {
  var arity = fx.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx.apply(null, args);
    }
    else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2)); 
      }
    }
  };
}
