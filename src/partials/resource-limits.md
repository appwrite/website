# Resource limits {% #resource-limits %}
Each plan in Appwrite Cloud has a set of resource limits. You can find the details of these resource limits in the in the [pricing page](https://appwrite.io/pricing).

Each resource limit is applied per month and resets at the beginning of each month.

## Reaching resource limits {% #reaching-resource-limits %}
The following limit consequences will persist until the current billing period ends.
{% table %}
* Component
* Consequence
---
* **Bandwidth** {% rowspan=3 %}
* Project creation is disabled.
---
*  Importing projects via migrations disabled.
---
*  Platform creation disabled.
---
* **Active users**
* Auth member creation/team invitations disabled.
---
* **Compute**
* Function executions are disabled.
---
* **Realtime**
* Realtime subscriptions disabled.
---
* **Storage**
* File uploads are disabled. Persists across billing periods.
{% /table %}

## Switching to Starter plan and reaching limits {% #switching-to-starter-plan-reaching-resource-limits %}

When you switch from Pro or Scale plan to Starter plan, you will be able to take advantage of the existing limits until the end of the current billing period. 
After the billing period ends, the Starter plan limits and consequences will apply.

If an organisation has multiple members after the billing period ends, all admins besides the original creator of the organization will be removed.
The following consequences should also apply at the project level if the Starter plan per-project resource limits have been exceeded.

{% table %}
* Component
* Action
---
* **Platforms**
* If more than 3 platforms have been created, disable them in order of date created (oldest ones first).
---
* **Webhooks**
* If more than 2 webhooks have been created, disable them in order of date created (oldest ones first).
---
* **Teams**
* If more than 100 teams have been created, disable them in order of date created (oldest ones first).
---
* **Databases**
* If more than 1 database has been created, disable them in order of date created (oldest ones first).
---
* **Buckets**
* If more than 3 buckets have been created, disable them in order of date created (oldest ones first).
---
* **Functions**
* If more than 5 functions have been created, disable them in order of date created (oldest ones first).
{% /table %}