const core = require('@actions/core');
const github = require('@actions/github');
const artillery = require('artillery');
const { promises: fs } = require('fs')

async function run() {
  try {
    const filepath = core.getInput('filepath');
    core.debug(`filepath=${filepath}`);

    core.debug(`GITHUB_WORKSPACE=${process.env.GITHUB_WORKSPACE}`)

    const context = github.context;
    core.debug(`repo=${context.repo}`)

    const content = await fs.readFile(filepath, 'utf8')
    core.debug('content=')
    core.debug(content)

    artillery.run(filepath, {})
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
