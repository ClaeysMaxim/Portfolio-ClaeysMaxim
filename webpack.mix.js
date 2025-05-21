// webpack.mix.js

let mix = require("laravel-mix");

mix.js("src/scripts/main.js", "build/app.js").setPublicPath("build");

mix.postCss("src/styles/main.css", "build", [
  require("postcss-for"),
  require("postcss-nested"),
]);
