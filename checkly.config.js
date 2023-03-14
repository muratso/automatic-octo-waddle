import { defineConfig } from '@checkly/cli'

const config = defineConfig({
  projectName: 'Boilerplate Project',
  logicalId: 'boilerplate-project',
  repoUrl: 'https://github.com/checkly/checkly-cli',
  checks: {
    locations: ['us-east-1'],
    tags: ['mac'],
    runtimeId: '2022.10',
    checkMatch: '**/*.check.js',
    browserChecks: {
      testMatch: '**/__checks__/*.spec.js', // this matches any Playwright spec-files and automagically creates a Browser check
    },
  },
  cli: {
    runLocation: 'eu-east-1',
  },
})

export default config
