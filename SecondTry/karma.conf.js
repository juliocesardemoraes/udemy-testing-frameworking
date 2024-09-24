module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "jasmine-jquery"],
    preprocessors: {
      "*.js": "coverage",
    },
    files: [
      "./CustomMatcher.js",
      "*.js",
      "*.spec.js",
      "./spec/tests/*.spec.js",
      "./spec/tests/*.spec.mjs",
      "./spec/fixtures/*.html",
      "*.html",
    ],
    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-coverage",
      "@metahub/karma-jasmine-jquery",
    ],
    reporters: ["dots", "coverage"],
    colors: true,
    singleRun: false,
    watched: true,
    served: true,
    included: false,
    browsers: ["Chrome"],
    coverageReporter: {
      type: "html",
      dir: "coverage/",
    },
  });
};
