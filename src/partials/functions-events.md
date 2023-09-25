## Functions events {% #functions-events %}

| Name                                        | Payload                          | Description                               |
| ------------------------------------------- | --------------------------------- | ----------------------------------------- |
| `functions.*`                               | [Function Object](/docs/references/cloud/models/function)     | This event triggers on any functions event. |
| `functions.*.create`                        | [Function Object](/docs/references/cloud/models/function)     | This event triggers when a function is created. |
| `functions.*.delete`                        | [Function Object](/docs/references/cloud/models/function)     | This event triggers when a function is deleted. |
| `functions.*.deployments.*`                | [Deployment Object](/docs/references/cloud/models/deployment) | This event triggers on any deployments event. |
| `functions.*.deployments.*.create`         | [Deployment Object](/docs/references/cloud/models/deployment) | This event triggers when a deployment is created. |
| `functions.*.deployments.*.delete`         | [Deployment Object](/docs/references/cloud/models/deployment) | This event triggers when a deployment is deleted. |
| `functions.*.deployments.*.update`         | [Deployment Object](/docs/references/cloud/models/deployment) | This event triggers when a deployment is updated. |
| `functions.*.executions.*`                | [Execution Object](/docs/references/cloud/models/execution)   | This event triggers on any executions event. |
| `functions.*.executions.*.create`         | [Execution Object](/docs/references/cloud/models/execution)   | This event triggers when an execution is created. |
| `functions.*.executions.*.delete`         | [Execution Object](/docs/references/cloud/models/execution)   | This event triggers when an execution is deleted. |
| `functions.*.executions.*.update`         | [Execution Object](/docs/references/cloud/models/execution)   | This event triggers when an execution is updated. |
| `functions.*.update`                      | [Function Object](/docs/references/cloud/models/function)     | This event triggers when a function is updated. |