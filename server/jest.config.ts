import type {Config} from 'jest'

const config: Config = {
verbose: true,
moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
}

export default config