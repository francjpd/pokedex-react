export default {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/images-mock.js',
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/css-mock.js",
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

