/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// SVGs imported from JS get both exports, as gatsby-plugin-svgr used to provide:
//   import iconUrl, { ReactComponent as Icon } from './icon.svg';
exports.onCreateWebpackConfig = ({ getConfig, actions, loaders }) => {
  const config = getConfig();
  const svgTest = /\.svg$/;

  // Stop Gatsby's built-in asset rules from also handling SVGs
  config.module.rules = config.module.rules.map(rule => {
    if (rule.test instanceof RegExp && rule.test.test('file.svg')) {
      const exclude = rule.exclude ? [].concat(rule.exclude, svgTest) : svgTest;
      return { ...rule, exclude };
    }
    return rule;
  });

  config.module.rules.push({
    test: svgTest,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: require.resolve('@svgr/webpack'),
        options: {
          exportType: 'named',
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: { overrides: { removeViewBox: false } },
              },
            ],
          },
        },
      },
      loaders.url(),
    ],
  });

  actions.replaceWebpackConfig(config);
};
