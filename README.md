# jasmine-expect-jsx [![npm](https://img.shields.io/npm/v/jasmine-expect-jsx.svg?maxAge=2592000)](https://www.npmjs.com/package/jasmine-expect-jsx) [![Build Status](https://api.travis-ci.org/smacker/jasmine-expect-jsx.svg)](https://travis-ci.org/smacker/jasmine-expect-jsx)

[![Greenkeeper badge](https://badges.greenkeeper.io/smacker/jasmine-expect-jsx.svg)](https://greenkeeper.io/)

Adds `toEqualJSX` and `toIncludeJSX` methods to jasmine assertions.
Uses Algolia's [react-element-to-jsx-string](https://github.com/algolia/react-element-to-jsx-string) under the hood.

## Installation

```
npm install -D jasmine-expect-jsx
```

## Setup

### Browser

```html
<script src="/path/to/jasmine-expect-jsx.js"></script>
```

### Karma

Integration is easy with the [karma-jasmine-expect-jsx](https://github.com/smacker/karma-jasmine-expect-jsx) plugin and it provides colored output.

Also you can just add `'node_modules/jasmine-expect-jsx/dist/jasmine-expect-jsx.js'` to files section of your config.

### Node.js

```javascript
require('jasmine-expect-jsx');
```

### Jest

1. Add `setupTestFrameworkScriptFile` in `package.json`

```json
{
    ...
    "jest": {
        "setupTestFrameworkScriptFile": "<rootDir>/jestSetup.js"
    }
    ...
}
```

2. Import `jasmine-expect-jsx` in `setupTestFrameworkScriptFile` file

```javascript
// jestSetup.js
require('jasmine-expect-jsx');
```

## Usage

The following tests are all passing:

### Expect

```javascript
class TestComponent extends React.Component {}

// equalJSX
expect(<div />).toEqualJSX(<div />);
expect(<TestComponent />).toEqualJSX(<TestComponent />);

expect(<div />).not.toEqualJSX(<span />);
expect(<TestComponent />).not.toEqualJSX(<span />);

// includeJSX
expect(<div><span>Hello World!</span></div>).toIncludeJSX(<span>Hello World!</span>);
expect(<TestComponent />).toIncludeJSX(<SomeSubComponent />); // assuming <SomeSubComponent /> is rendered by TestComponent's render

expect(<div><span>Hello World!</span></div>).not.toIncludeJSX(<span>Hello World!</span>);
expect(<TestComponent />).not.toIncludeJSX(<SomeSubComponent />); // assuming <SomeSubComponent /> is not rendered by TestComponent's render
```
