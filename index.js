var reactElementToJSXString = require('react-element-to-jsx-string');
var jsdiff = require('diff');

function toEqualJSX(util, customEqualityTesters) {
    function formatPart(value, prefix) {
        return value.split('\n').map(function (line) {
            if (!line) {
                return line;
            }
            return prefix + ' ' + line;
        }).join('\n');
    }

    return {
        compare: function(actual, expected) {
            var result = {
                pass: false
            };

            actual = reactElementToJSXString(actual);
            expected = reactElementToJSXString(expected);

            result.pass = util.equals(actual, expected, customEqualityTesters);
            if (!result.pass) {
                var message = [];
                var diff = jsdiff.diffLines(actual, expected);

                diff.forEach(function (part) {
                    if (part.added) {
                        message.push(formatPart(part.value, '+'));
                    } else if (part.removed) {
                        message.push(formatPart(part.value, '-'));
                    } else {
                        message.push(part.value);
                    }
                });

                result.message = message.join('\n');
            }

            return result;
        }
    };
}

beforeEach(function() {
    jasmine.addMatchers({
        toEqualJSX: toEqualJSX
    });
});

if (module && module.exports) {
    module.exports = {
        toEqualJSX: toEqualJSX
    };
}
