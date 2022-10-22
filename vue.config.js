module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue2-svg-icon/" : "/",
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg"); // 找到 svg-loader
    svgRule.uses.clear(); // 清除已有 loader
    svgRule.exclude.add(/node_modules/); // 排除 node_modules 目录
    svgRule // 添加新的 svg loader
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
  },
};
