/* eslint-env node */

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');


module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here

      cssModules: {

        plugins: {
          before: [
            nested
          ],
          after: [
            autoprefixer('last 2 versions')
          ]
        },

        // Emit a combined SCSS file for ember-cli-sass to compile
        intermediateOutputPath: 'app/styles/app.scss',

        // Use .scss as the extension for CSS modules instead of the default .css
        extension: 'scss',

        // Pass a custom parser/stringifyer through to PostCSS for processing modules
        postcssOptions: {
          syntax: require('postcss-scss')
        }

      }

  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
