# jasmine-expect-jsx

Adds `toEqualJSX` method to jasmine assertions. Uses Algolia's [react-element-to-jsx-string](https://github.com/algolia/react-element-to-jsx-string) under the hood.

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

```
