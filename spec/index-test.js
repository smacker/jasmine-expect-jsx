import React from 'react';
import {toEqualJSX} from '../index';

const compare = toEqualJSX(jasmine.matchersUtil).compare;

describe('describe', () => {
  let expected,
      actual,
      diff;

  function expectMessage(lines) {
    expect(diff.message).toEqual(lines.join('\n'));
  }

  it('no message on equal', () => {
    actual = <div/>;
    expected = <div/>;

    diff = compare(actual, expected);

    expect(diff.pass).toBeTruthy();
    expect(diff.message).toBeUndefined();
  });

  it('diff in one line', () => {
    actual = <div attr="notMatch" />
    expected = <div attr="match" />;

    diff = compare(actual, expected);

    expect(diff.pass).toBeFalsy();
    expectMessage([
      '- <div attr="notMatch" />',
      '+ <div attr="match" />'
    ]);
  });

  it('diff multiline', () => {
    actual = <div attr="notMatch" className="actual" />;
    expected = <div attr="match" className="expected" />;

    diff = compare(actual, expected);

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

    diff = compare(actual, expected);

    expect(diff.pass).toBeFalsy();
    expectMessage([
      '- <td className="test">',
      '-   fail',
      '- </td>',
      '+ <td className="test" />'
    ]);
  });
});
