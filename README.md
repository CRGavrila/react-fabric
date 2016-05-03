# react-fabric [![npm version](https://badge.fury.io/js/react-fabric.svg)](http://badge.fury.io/js/react-fabric) [![Build Status](https://travis-ci.org/kmees/react-fabric.svg)](https://travis-ci.org/kmees/react-fabric)

react-fabric is a set of [React](http://facebook.github.io/react/) components that wrap the [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric)

**Please note that this module is still in early development!**

## Installation

`react-fabric` can be installed as an npm package

```
$ npm install --save react-fabric
```
Please note that you also have to install all missing peer depencies.


## Usage

Before you start using `react-fabric` it is recommended to setup a basic Webpack workflow with
[babel-loader](https://github.com/babel/babel-loader), [css-loader](https://github.com/webpack/css-loader) 
and [sass-loader](https://github.com/jtangelder/sass-loader). A minimal starter project is 
[React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate).

Once Webpack is set up, yu can just require `react-fabric` and use the components

```jsx
import React from 'react'
import Button from 'react-fabric/lib/Button'

const SaveButton = ({ onClick }) => (
  <Button type="hero" glyph="save" onClick={onClick}>Save</Button> 
)

export default SaveButton
```

The above code creates a custom `SaveButton` component based on the hero button component of fabric ui. Please not
that all the required SASS for the button component is automatically required by the module.


## Fonts & Icons

To load the required fonts from the Office CDN, simply import the fontface declaration 
from the `office-ui-fabric` package in a global stylesheet and require it in your layout

```scss
// globals.scss
@import "~office-ui-fabric/src/sass/Fabric.Typography.Fonts.Output.scss";
@import "~office-ui-fabric/src/sass/Fabric.Icons.Fonts.Output.scss";
```

```jsx
// Layout.js
require('globals.scss')

const Layout = () => {
  // ...
}
```

## Example / Docs
The [docs project](https://github.com/kmees/react-fabric/blob/master/docs) included in 
this repository doubles as the example project. To run the docs project, follow these steps:

```sh
$ npm install
$ cd docs/
$ npm install
$ npm start
$ open 'http://localhost:3030'
```

## Tests
All components are unit tested. To run the tests, follow these steps:

```sh
$ npm install
$ npm test
```

## Customization

TODO...


## License
This project is licensed under the terms of the [MIT License](https://github.com/kmees/react-fabric/blob/master/LICENSE)
