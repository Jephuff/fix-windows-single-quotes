module.exports = function (argv) {
  var isOpen = false;

  return argv.reduce(function(args, arg) {
    var startedOpened = isOpen;
    var parts = arg.indexOf(' ') >= 0 ? [arg] : arg.split("'");
    var parsedArg = parts.reduce(function(arg, part, i) {
      if(i > 0) {
        isOpen = !isOpen;
      }

      return arg + part;
    }, '');

    if(startedOpened) {
      args[args.length - 1] += ' ' + parsedArg;
    } else {
      args.push(parsedArg);
    }

    return args;
  }, []);
};
