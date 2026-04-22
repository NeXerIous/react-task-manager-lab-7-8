module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(svg|png|jpg|jpeg|gif|webp)$': '<rootDir>/test/fileMock.js',
  },
  collectCoverageFrom: [
    'src/utils/taskUtils.js',
    'src/components/features/TaskItem.jsx',
    'src/components/features/TaskList.jsx',
    'src/components/ui/FilterButtons.jsx',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
}
