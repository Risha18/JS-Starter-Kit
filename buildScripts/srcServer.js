import express from "express";

import path from "path";
import open from "open";

import webpack from "webpack";
import config from "../webpack.config.dev";

// @ts-ignore
const compiler = webpack(config);

const port = 8080;

const app = express();

app.use(
  require("webpack-dev-middleware")(compiler, {
    // @ts-ignore
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.get("/", function(req, res) {
  res.sendfile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err) {
  if (err) {
   
  } else {
    open("http://localhost:" + port);
  }
});
