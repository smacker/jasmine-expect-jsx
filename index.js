var reactElementToJSXString = require('react-element-to-jsx-string');
var jsdiff = require('diff');

beforeEach(function(){
    jasmine.addMatchers({
        toEqualJSX: function(util, customEqualityTesters) {
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
                                message.push('+ ' + part.value);
                            } else if (part.removed) {
                                message.push('- ' + part.value);
                            } else {
                                message.push(part.value);
                            }
                        });

                        result.message = message.join('');
                    }

                    return result;
                },
            };
        }
    });
});
