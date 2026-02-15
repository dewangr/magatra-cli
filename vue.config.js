const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin-next");


module.exports = defineConfig({
   parallel: false, 
  configureWebpack: {
    plugins: [
      new (require("webpack").DefinePlugin)({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      }),
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: ["/", "/dekdwi-manik/"],
        renderAfterDocumentEvent: 'render-event',
         customRendererConfig: {
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        },
      }),
    ],
  },
});
