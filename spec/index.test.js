import React from 'react';
import {toEqualJSX, toIncludeJSX} from '../index';

const toEqual = toEqualJSX(jasmine.matchersUtil).compare;
const toInclude = toIncludeJSX(jasmine.matchersUtil).compare;

describe('jasmine-expect-jsx', () => {
  let expected,
      actual,
      diff;

  function expectMessage(lines) {
    expect(diff.message).toEqual(lines.join('\n'));
  }

  function expectIncludeMessage(lines) {
    expect(diff.message).toEqual(lines.join('\n'));
  }

  describe('toEqualJSX', () => {
    it('should succeed if expected equals actual', () => {
      actual = <div />;
      expected = <div />;
      expect(expected).toEqualJSX(actual);
    });
    it('should succeed if negated expectation is true', () => {
      actual = <div />;
      expected = <span />;
      expect(expected).not.toEqualJSX(actual);
    });
    it('correct message on equal', () => {
      actual = <div/>;
      expected = <div/>;

      diff = toEqual(actual, expected);

      expect(diff.pass).toBeTruthy();
      expect(diff.message).toEqual('JSX strings are equal');
    });

    it('diff in one line', () => {
      actual = <div attr="notMatch" />
      expected = <div attr="match" />;

      diff = toEqual(actual, expected);

      expect(diff.pass).toBeFalsy();
      expectMessage([
        '- <div attr="notMatch" />',
        '+ <div attr="match" />'
      ]);
    });

    it('diff multiline', () => {
      actual = <div attr="notMatch" className="actual" />;
      expected = <div attr="match" className="expected" />;

      diff = toEqual(actual, expected);

      expect(diff.pass).toBeFalsy();
      expectMessage([
        '<div',
        '',
        '-   attr="notMatch"',
        '-   className="actual"',
        '',
        '+   attr="match"',
        '+   className="expected"',
        '',
        '/>'
      ]);
    });

    it('diff different numbers of lines', () => {
      actual = (
        <td className="test">
          fail
        </td>
      );
      expected = <td className="test" />;

      diff = toEqual(actual, expected);

      expect(diff.pass).toBeFalsy();
      expectMessage([
        '- <td className="test">',
        '-   fail',
        '- </td>',
        '+ <td className="test" />'
      ]);
    });
  });

  describe('toIncludeJSX', () => {
    it('should succeed if expected JSX is present', () => {
      actual = (
        <td className="test">
          <div id="match" />
        </td>
      );
      expected = <div id="match" /> ;

      expect(actual).toIncludeJSX(expected);
    });
    it('should succeed if negated expectation is true', () => {
      actual = (
        <td className="test">
          <div id="match" />
        </td>
      );
      expected = <div id="match_not_present" /> ;

      expect(actual).not.toIncludeJSX(expected);
    });
    it('should provide no message when expected is in actual', () => {
      actual = <div/>;
      expected = <div/>;

      diff = toInclude(actual, expected);

      expect(diff.pass).toBeTruthy();
      expect(diff.message).toEqual('Actual JSX includes expected JSX');
    });
    it('should generate a diff of lines', () => {
      actual = (
        <td className="test">
          <div id="does_not_match" />
        </td>
      );
      expected = <div id="will_not_match" /> ;

      diff = toInclude(actual, expected);
      expect(diff.pass).toBeFalsy();
      expectIncludeMessage([
        '- <td className="test">',
        '-   <div id="does_not_match" />',
        '- </td>',
        '+ <div id="will_not_match" />'
      ]);
    });
  });
});
