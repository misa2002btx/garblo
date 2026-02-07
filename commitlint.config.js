module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'footer-must-have-by-line': (parsed, when, value) => {
          const footer = parsed.footer
          if (!footer) {
            return [false, 'Commit footer is missing.']
          }
          const codeName = require('child_process')
            .execSync('git config user.name')
            .toString()
            .trim()
          const expectedEnd = `by ${codeName}`
          if (!footer.endsWith(expectedEnd)) {
            return [false, `Commit footer must end with \"${expectedEnd}\"`]
          }
          return [true, '']
        },
      },
    },
  ],
  rules: {
    'footer-must-have-by-line': [2, 'always'],
  },
}
