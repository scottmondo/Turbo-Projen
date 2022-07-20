import {javascript, cdk} from 'projen'

const repository = 'git@github.com:scottmondo/Turbo-Projen.git'

const project = new cdk.JsiiProject({
  projenrcTs: true,
  defaultReleaseBranch: 'main',
  packageManager: javascript.NodePackageManager.NPM,
  name: 'turbo-project',
  author: 'Scott McFarlane',
  description: 'A Projen project for managing a monorepo using Turbo',
  keywords: [
    'turbo',
    'monorepo',
    'projen',
    'typescript',
  ],
  authorAddress: 'Scott.Mcfarlane@mondo.com.au',
  repository,
  repositoryUrl: repository,
  peerDeps: [
    'projen',
  ],
  devDeps: [
    '@types/babel__core',
    '@types/fs-extra',
  ],
  bundledDeps: [
    'commander',
    'fs-extra',
  ],
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  docgen: true,
  tsconfig: {
    compilerOptions: {
      lib: ['es2019'],
    },
  },
  workflowNodeVersion: '14.20.0',
  publishTasks: true,
  autoApproveOptions: {
    allowedUsernames: ['scottmondo'],
  },
  autoApproveUpgrades: true,
})

const additionalRules = {
  'curly': [
    'error',
    'multi',
    'consistent',
  ],
  'semi': [
    'error',
    'never',
  ],
  'object-curly-spacing': 'error',
  'nonblock-statement-body-position': ['error', 'below'],
}

project.eslint?.addRules(additionalRules)

project.synth()