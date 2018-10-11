"use strict";

const webpack = require("webpack");
const getWebpackConfig = require("../config/webpack.config.css.js");
const chalk = require("chalk");
const fs = require('fs');
const path = require("path");

function printErrors(summary, errors) {
  console.log(chalk.red(summary));
  console.log();
  errors.forEach(err => {
    console.log(err.message || err);
    console.log();
  });
}

function build(site) {
  webpack(getWebpackConfig(site)).run((err, stats) => {
    if (err) {
      printErrors("Failed to compile. Errors: ", [err]);
      process.exit(1);
    }

    if (stats.compilation.errors.length) {
      printErrors(
        "Failed to compile. Compilation errors: ",
        stats.compilation.errors
      );
      process.exit(1);
    }
  });
}

const themesFolderPath = path.resolve(__dirname, "../src/semantic/");
fs.readdir(themesFolderPath, (err, data) => {
  const arrayOfThemeFolders = data.filter(item => {
    const completePath= path.join(themesFolderPath, item);
     return fs.lstatSync(completePath).isDirectory() && item !== 'themes';
  });
  arrayOfThemeFolders.map(folder =>  build(folder));
});
