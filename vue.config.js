const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin-next");


module.exports = defineConfig({
  parallel: false, 
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new (require("webpack").DefinePlugin)({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      }),
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: ["/", "/dekdwi-manik/", "/ode-saktu/" ],
        renderAfterDocumentEvent: "render-event",
        maxConcurrentRoutes: 1,
        renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
          renderAfterDocumentEvent: "render-event",
          timeout: 10000,
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        }),
      })
    ],
  },
});
