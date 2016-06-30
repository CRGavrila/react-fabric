#!/usr/bin/env node

/* eslint-disable */

require('babel-register')

var hook = require('css-modules-require-hook')
var sass = require('node-sass')
var path = require('path')
var glob = require('glob')

var cwd = path.resolve(__dirname, '..')
var nodeModulesPath = path.resolve(cwd, 'node_modules')

var nodeModulesPlaceholder = /^~/
var args = (function(slice) {
  return slice.length === 0 ? ['src/**/__tests__/*_test.js'] : slice
})(process.argv.slice(2))

hook({
	extensions: ['.scss'],
	generateScopedName: '[local]', // identity

	preprocessCss: (css, filepath) => {
		var result = sass.renderSync({
			file: filepath,
			includePaths: [
				path.resolve(filepath, '..')
			],
			importer: function importer(url) {
				return nodeModulesPlaceholder.test(url) ? {
          file: url.replace(nodeModulesPlaceholder, nodeModulesPath + '/')
				} : null
			}
		})

		return result.css
	}
})

if (process.env['BABEL_ENV'] === 'test') {
  require('../src')
}

args.forEach(function (arg) {
  glob(arg, { cwd: cwd }, function (err, files) {
    if (err) { throw err }

    files.forEach(function (file) {
      require(path.resolve(cwd, file))
    })
  })
})
