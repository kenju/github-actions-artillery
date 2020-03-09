const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const target = core.getInput('target');
    core.debug(`target=${target}`);

    const duration = core.getInput('duration');
    core.debug(`duration=${duration}`);

    const arrivalRate = core.getInput('arrivalRate');
    core.debug(`arrivalRate=${arrivalRate}`);

    // Get github context data
    const context = github.context;
    console.log(`We can even get context data, like the repo: ${context.repo.repo}`)
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
