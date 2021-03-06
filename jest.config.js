module.exports = {
  moduleDirectories: [
    "src",
    "tests/mocks",
    "node_modules"
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js': 'babel-jest'    
  },
  transformIgnorePatterns: [  
    '/node_modules/(?!(vuelidate-property-decorators)/)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
  collectCoverage: true,
  reporters: [
    "default",
    "jest-junit"
  ],
  coverageReporters: [
    "html",
    "text-summary",
    "cobertura"
  ],
  collectCoverageFrom: [
    "**/*.ts"
  ]
}
