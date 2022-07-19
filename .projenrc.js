const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Scott McFarlane',
  authorAddress: 'Scott.Mcfarlane@mondo.com.au',
  defaultReleaseBranch: 'main',
  name: 'Turbo-Projen',
  repositoryUrl: 'git@github.com:scottmondo/Turbo-Projen.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();