module.exports = {
    stories: [
        '../src/**/*.stories.js', 
        '../src/**/*.stories.jsx'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links'
    ],
    webpackFinal: async (config) => {
        config.resolve.plugins = [
            ...(config.resolve.plugins || []),
        ];
        return config;
    },
};
