// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
  formatters: true,
}, {
  rules: {
    'no-console': 'off',
    'vue/no-export-in-script-setup': 'off',
    'vue/no-unused-refs': 'off',
    'antfu/curly': 'off',
  },
})
