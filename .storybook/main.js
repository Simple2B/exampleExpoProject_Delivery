module.exports = {
  stories: [
    // '../app/details/components/**/*.stories.?(ts|tsx|js|jsx)',
    // '../app/**/*.stories.?(ts|tsx|js|jsx)',
    "../app/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-ondevice-controls', 
    '@storybook/addon-ondevice-actions'
  ],
};
