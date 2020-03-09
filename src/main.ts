const core = require('@actions/core');
const artillery = require('artillery');
const { promises: fs } = require('fs')

async function run() {
  try {
    const filepath = core.getInput('filepath');
    core.debug(`filepath=${filepath}`);

    const content = await fs.readFile(filepath, 'utf8')
    core.debug('content=')
    core.debug(content)

    artillery.run(filepath, {})
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
