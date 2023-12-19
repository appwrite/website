## Check resource usage {% #check-resource-usage %}

You can check your organization's resource usage by navigating to your organization, under the **Usage** tab, you can check the current billing cycle's usage stats.


## Reaching resource limits {% #reaching-resource-limits %}
Reaching your organization's resource limits will have the following effects until the current billing period ends.
{% table %}
* Component
* Consequence
---
* **Bandwidth** {% rowspan=3 %}
*  More bandwidth will be purchased automatically until organization reaches budget cap. If the organization uses a Starter plan or the budget cap is reached, API access will be denied until your organization's plan is upgraded or your budget cap is increased.
---
*  Importing projects via migrations disabled, but you can still export your projects.
---
*  Platform creation disabled.
---
* **Users**
* Creating new accounts and team invitations disabled.
---
* **Compute**
* Function executions are disabled.
---
* **Realtime**
* Realtime subscriptions disabled.
---
* **Storage**
* File uploads are disabled. Persists across billing periods until storage is .
{% /table %}

## Switching to Starter plan and reaching limits {% #switching-to-starter-plan-reaching-resource-limits %}

When an orgnization switches from Pro or Scale plan to Starter plan, the organization's projects will be able to take advantage of the existing limits until the end of the current billing period. 
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