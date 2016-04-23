var reactElementToJSXString = require('react-element-to-jsx-string');
var jsdiff = require('diff');
var collapse = require('collapse-white-space');

function formatPart(value, prefix) {
  return value.split('\n').map(function(line) {
    if (!line) {
      return line;
    }
    return prefix + ' ' + line;
  }).join('\n');
}

function getJSXDiffMessage(actualJSX, expectedJSX) {
  var message = [];
  var diff = jsdiff.diffLines(actualJSX, expectedJSX, {ignoreWhitespace: false, newlineIsToken: false});

  diff.forEach(function(part) {
    if (part.added) {
      message.push(formatPart(part.value, '+'));
    } else if (part.removed) {
      message.push(formatPart(part.value, '-'));
    } else {
      message.push(part.value);
    }
  });
  return message.join('\n');
}

function compare(actual, expected, comparator, customEqualityTesters) {
    var actualJSX = reactElementToJSXString(actual);
    var expectedJSX = reactElementToJSXString(expected);

    var result = {
      pass: comparator(collapse(actualJSX), collapse(expectedJSX), customEqualityTesters)
    };
    if (!result.pass) {
      result.message = getJSXDiffMessage(actualJSX, expectedJSX);
    }
    return result;
}

function not(fn) {
  return function() {
    return !fn.apply(null, arguments);
  }
}

function toIncludeJSX(util, customEqualityTesters) {

  return {
    compare: function(actual, expected) {
      var comparator = util.contains;

      return compare(actual, expected, comparator, customEqualityTesters);
    },

    negativeCompare: function(actual, expected) {
      var comparator = not(util.contains);

      return compare(actual, expected, comparator, customEqualityTesters);
    }
  };
}

function toEqualJSX(util, customEqualityTesters) {
  return {
    compare: function(actual, expected) {
      var comparator = util.equals;

      return compare(actual, expected, comparator, customEqualityTesters);
    },
    negativeCompare: function(actual, expected) {
      var comparator = not(util.equals);

      return compare(actual, expected, comparator, customEqualityTesters);
    }
  };
}

beforeEach(function() {
  jasmine.addMatchers({
    toEqualJSX: toEqualJSX,
    toIncludeJSX: toIncludeJSX
  });
});

if (module && module.exports) {
    module.exports = {
        toEqualJSX: toEqualJSX,
        toIncludeJSX: toIncludeJSX
    };
}
