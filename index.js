const calculator = {
    add: function(a, b) {return a+b},  
    multiply: function(a, b) {return a*b},
    subtract: function(a, b) {return a-b}, 
    divide: function(a, b) {return a/b}
}

function stringLength(str) {
    if((str < 1) || (str > 10)) {
      throw 'String character have to be greather than 0 and less than 10.'
    }
    return str.length;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

class CapitalizeClass {
    name(str) {
      return str;
    }
}
  
function capitalizer(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { calculator, stringLength, reverseString, CapitalizeClass, capitalizer };
