const basePath = process.env.NODE_ENV === "production" ? "/repo" : "";

module.exports = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath + "/",
};
