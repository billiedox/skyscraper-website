const { defineConfig } = require("@vue/cli-service");

const webpack = require("webpack");
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

global.Buffer = global.Buffer || require("buffer/").Buffer;
module.exports = defineConfig({
  devServer: {
    // proxy: process.env.VUE_APP_PROXY
    allowedHosts: "all",
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/fonts.scss";          
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader");
  },
  configureWebpack: {
    resolve: {
      fallback: {
        //       fs: false,
        stream: require.resolve("stream-browserify"),
        // buffer: require.resolve("buffer/"),
        //       // util: require.resolve("util/"),
        assert: require.resolve("assert/"),
        http: require.resolve("stream-http"),
        url: require.resolve("url/"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
      new PreloadWebpackPlugin({
        rel: 'preload',
        as(entry) {
          if (/\.css$/.test(entry)) return 'style';
          if (/\.woff$/.test(entry)) return 'font';
          if (/\.png$/.test(entry)) return 'image';
          if (/\.mp4$/.test(entry)) return 'video';
          return 'script';
        }
      })
    ],
  },
});
