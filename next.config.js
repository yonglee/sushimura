const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withSass({
    // cssModules: true,
    // target: "serverless",
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty"
      };

      return config;
    }
  })
);

// module.exports = withCSS(withSass());
// module.exports = withSass({
//   cssModules: true
// });
