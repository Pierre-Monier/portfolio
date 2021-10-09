const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

module.exports = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath + "/",
};
