module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    // and webpack starts bundling
    output: {
        filename: 'index1.[contenthash].js', // string (default)
         }
};