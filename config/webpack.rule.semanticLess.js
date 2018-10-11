const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = site => {
  return {
    test: /\.less$/i,
    include: /[/\\]node_modules[/\\]@infinitecsolutions[/\\]semantic-ui-less[/\\]/,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      {
        loader: "@infinitecsolutions/semantic-ui-less-module-loader",
        options: {
          defaultFolder: path.resolve(
            __dirname,
            "../node_modules/@infinitecsolutions/semantic-ui-less"
          ),
          siteFolder: path.resolve(__dirname, `../src/semantic/${site}`),
          themesFolder: path.resolve(__dirname, "../src/semantic/themes"),
          themeConfigPath: path.resolve(
            __dirname,
            "../src/semantic/theme.config"
          )
        }
      }
    ]
  };
};
