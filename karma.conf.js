// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['mocha', 'chai', 'chai-as-promised', 'sinon-chai'],

    // list of files / patterns to load in the browser
    files: [
      'common/public/bower_components/jquery/jquery.js',
      'common/public/bower_components/angular/angular.js',
      'common/public/bower_components/angular-loading-bar/build/loading-bar.min.js',
      'common/public/bower_components/angular-resource/angular-resource.min.js',
      'common/public/bower_components/angular-sanitize/angular-sanitize.js',
      'common/public/bower_components/bootstrap/docs/assets/js/bootstrap.js',
      'common/public/bower_components/angular-bootstrap/ui-bootstrap.js',
      'common/public/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'common/public/bower_components/angular-ui-router/release/angular-ui-router.js',
      'common/public/bower_components/angular-ui/build/angular-ui.js',
      'common/public/bower_components/angular-ui-utils/ui-utils.min.js',
      'common/public/bower_components/Angular-At-Directive/src/at.js',
      'common/public/bower_components/Angular-At-Directive/src/caret.js',
      'common/public/bower_components/angular-mocks/angular-mocks.js',
      'common/public/bower_components/angular-bindonce/bindonce.js',
      'common/public/bower_components/ngInfiniteScroll/ng-infinite-scroll.js',
      "common/public/bower_components/select2/select2.js",
      "common/public/bower_components/angular-ui-select2/src/select2.js",
      'common/public/bower_components/marked/lib/marked.js',
      'common/public/bower_components/js-emoji/emoji.js',
      'common/public/bower_components/habitrpg-shared/dist/habitrpg-shared.js',
      'common/public/bower_components/habitrpg-shared/script/userServices.js',
      'common/public/js/*.js',
      'common/public/js/**/*.js',
      'test/mock/**/*.js',
      'test/spec/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
