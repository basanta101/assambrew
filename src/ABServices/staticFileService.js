export const getStaticFilePath = (path) => {
    return process.env.isProd ? process.env.ASSETS_CDN + "/public" + path : path;
}