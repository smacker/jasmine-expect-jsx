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

function prepare(actual, expected) {
  const actualJSX = reactElementToJSXString(actual);
  const expectedJSX = reactElementToJSXString(expected);
  return {
    actualJSX,
    expectedJSX,
    actualJSXc: collapse(actualJSX),
    expectedJSXc: collapse(expectedJSX)
  };
}

function toIncludeJSX(util, customEqualityTesters) {

  return {
    compare: function(actual, expected) {
      const {actualJSX, expectedJSX, actualJSXc, expectedJSXc} = prepare(actual, expected);

      const result = {
        pass: util.contains(actualJSXc, expectedJSXc, customEqualityTesters)
      };
      if (!result.pass) {
        result.message = getJSXDiffMessage(actualJSX, expectedJSX);
      }
      return result;
    },

    negativeCompare: function(actual, expected) {
      const {actualJSX, expectedJSX, actualJSXc, expectedJSXc} = prepare(actual, expected);

      const result = {
        pass: ! util.contains(actualJSXc, expectedJSXc, customEqualityTesters)
      };
      if (!result.pass) {
        result.message = getJSXDiffMessage(actualJSX, expectedJSX);
      }
      return result;
    }
  };
}

function toEqualJSX(util, customEqualityTesters) {
  return {
    compare: function(actual, expected) {
      const {actualJSX, expectedJSX, actualJSXc, expectedJSXc} = prepare(actual, expected);

      const result = {
        pass: util.equals(actualJSXc, expectedJSXc, customEqualityTesters)
      };
      if (!result.pass) {
        result.message = getJSXDiffMessage(actualJSX, expectedJSX);
      }

      return result;
    },
    negativeCompare: function(actual, expected) {
      const {actualJSX, expectedJSX, actualJSXc, expectedJSXc} = prepare(actual, expected);

      const result = {
        pass: ! util.equals(actualJSXc, expectedJSXc, customEqualityTesters)
      };
      if (!result.pass) {
        result.message = getJSXDiffMessage(actualJSX, expectedJSX);
      }

      return result;
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
