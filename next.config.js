module.exports = {
  // webpack5: true,
  reactStrictMode: true,
  // webpack: (config, options) => {
  //   // console.log("xxx", config.modules);
  //   config.modules.rules.push({
  //     test: /\.(mov|mp4)$/,
  //     use: [
  //       {
  //         loader: "file-loader",
  //         options: {
  //           name: "[name].[ext]",
  //         },
  //       },
  //     ],
  //     test: /\.html$/,
  //     exclude: /node_modules/,
  //     use: [
  //       {
  //         loader: "html-loader",
  //         options: {
  //           sources: {
  //             list: [
  //               {
  //                 tag: "source",
  //                 attribute: "src",
  //                 type: "src",
  //               },
  //             ],
  //           },
  //         },
  //       },
  //     ],
  //   });
  //   return config;
  // },
};
