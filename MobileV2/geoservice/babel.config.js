module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver',
        {
          'root': ['./src'],
          alias: {
            '@pages': './src/pages',
            '@hooks': './src/hooks',
            '@components': './src/components',
            '@assets': './src/assets',
            '@utils': './src/utils',
          }
        }
      ],
      ['react-native-reanimated/plugin']
    ]
  };
};
