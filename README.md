# github-actions-artillery

## About

This Action uses [artilleryio/artillery](https://github.com/artilleryio/artillery) for load-testing your web applications.

## Usage

1. Write your own artillery's [scenario test file](https://artillery.io/docs/script-reference/) and commit the file
1. Use [`actions/checkout@master`](https://github.com/actions/checkout) so that github-actions-artillery can read the scenario test file
1. Write your Github Workflow file
    - add `uses: kenju/github-actions-artillery@master`
    - specify your scenario test file via `with.filepath`

Now you will see the load testing result from Actions' logging console as follows:

```
All virtual users finished
Summary report @ 14:57:11(+0000) 2020-03-09
  Scenarios launched:  60
  Scenarios completed: 60
  Requests completed:  60
  RPS sent: 2
  Request latency:
    min: 21.4
    max: 168.3
    median: 41.4
    p95: 128.1
    p99: 167.4
  Scenario counts:
    load test: 60 (100%)
  Codes:
    200: 60
```

### Example

#### Github Workflow file

```yaml
on: [push]

jobs:
  load-test-sample:
    runs-on: ubuntu-latest
    name: A load test sample job
    steps:
    - uses: actions/checkout@master
    - name: Load Test action step
      id: load-test
      uses: kenju/github-actions-artillery@master
      with:
        filepath: load-test.yml
```

#### `load-test.yml`

```yaml
config:
  target: https://kenju.netlify.com
  phases:
    - duration: 30 #sec
      arrivalRate: 2

scenarios:
  - name: load test
    flow:
      - get:
          url: /
```

## Developer Guide

### Logging

Set `ACTIONS_STEP_DEBUG` to `true` from the secret.

https://github.com/actions/toolkit/blob/master/docs/action-debugging.md#how-to-access-step-debug-logs
