module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [["snowpack/assets/babel-plugin.js", { addVersion: true }]]
};
