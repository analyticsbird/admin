const {
  override,
  addBabelPlugin,
} = require("customize-cra");

module.exports = (config, env) => {
  const plugins = [];

  config.plugins.push(
    require('tailwindcss'),
    require('autoprefixer')
  );

  // plugins.push(['import', { libraryName: 'ym-antd', libraryDirectory: 'es', style: 'css' }]);

  return override(
    ...plugins.map((plugin) => addBabelPlugin(plugin))
  )(config, env);
};
