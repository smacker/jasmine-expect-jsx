var reactElementToJSXString = require('react-element-to-jsx-string').default;
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

function compare(actual, expected, comparator, passedMessage) {
    var actualJSX = reactElementToJSXString(actual);
    var expectedJSX = reactElementToJSXString(expected);

    var result = {
      pass: comparator(collapse(actualJSX), collapse(expectedJSX))
    };
    if (!result.pass) {
      result.message = getJSXDiffMessage(actualJSX, expectedJSX);
    } else {
      result.message = passedMessage;
    }
    return result;
}

function toIncludeJSX() {
  return {
    compare: function(actual, expected) {
      var comparator = function(actual, expected) {
        return !!actual && actual.indexOf(expected) >= 0;
      }

      return compare(actual, expected, comparator, 'Actual JSX includes expected JSX');
    }
  };
}

function toEqualJSX() {
  return {
    compare: function(actual, expected) {
      var comparator = function(actual, expected) {
        return actual == expected;
      }

      return compare(actual, expected, comparator, 'JSX strings are equal');
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
