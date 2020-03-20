module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "ts"],
  moduleNameMapper: {
    "@Src(.*)$": "<rootDir>/src/$1",
    "@Routers(.*)$": "<rootDir>/src/routers/$1"
  },
  transform: {
    "^.+\\.(j|t)s$": "babel-jest"
  }
};