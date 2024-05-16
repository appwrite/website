# Documentation contributing guide

Read this document carefully before making PRs to the Appwrite Website repo.

## Documentation structure

The Appwrite docs is split into sections, each with its intended purpose and content.

Appwrite's navigation increases in complexity from top down. We expect users to view links later in navigation later in their development journey.

Introduction Section:

- [Homes](https://appwrite.io/docs)
- [Quick start](https://appwrite.io/docs/quick-start)
- [Tutorial](https://appwrite.io/docs/tutorial)
- [SDKs](https://appwrite.io/docs/sdks)
- [API references](https://appwrite.io/docs/references)

Products section:

- [Auth](https://appwrite.io/docs/products/auth)
- [Databases](https://appwrite.io/docs/products/databases)
- [Functions](https://appwrite.io/docs/products/functions)
- [Storage](https://appwrite.io/docs/products/storage)
- [Messaging](https://appwrite.io/docs/products/messaging)
- [AI](https://appwrite.io/docs/products/ai)

APIs section:

- [GraphQL](https://appwrite.io/docs/apis/graphql)
- [REST](https://appwrite.io/docs/apis/rest)
- [Realtime](https://appwrite.io/docs/apis/realtime)

Tooling section:

- [Command Line](https://appwrite.io/docs/command-line)
- [Command center](https://appwrite.io/docs/tooling/command-center)
- [Assistant](https://appwrite.io/docs/tooling/assistant)

Advanced section:

- [Platform](https://appwrite.io/docs/advanced/platform)
- [Migrations](https://appwrite.io/docs/advanced/migrations)
- [Self-hosting](https://appwrite.io/docs/advanced/self-hosting)
- [Security](https://appwrite.io/docs/advanced/security)

Here's the intended purpose and structure of each section.

### Introduction

This section is focused on introducing what Appwrite is and giving examples to the user to understand both how to get started and how to perform canned tasks.
Documentation here is focused on a **single flow** which means a single platform/framework + Appwrite.
Content here is not specific to a specific product, but usually covers multiple Appwrite products.

- If your tutorial can be followed in about 15 minutes and fits on one page, write it under quick start
- If you're writing a long piece of documentation that integrates Appwrite with another technology, with lots of details that's opinionated or isn't relevant for all use cases, write it under tutorial. This is similar to "cook book" at other organizations.
- If you have information like helpers and methods that are only on SDKs but not the API, they go under SDK
- API references are generated from source from the appwrite/appwrite repo

### Products

Each page covers an Appwrite product. These pages describe the expected behavior of the product and are **unopinionated** and **technology-agnostic**.
Code examples should cover **all available SDKs**.

Each product page has three main sections

- Introduction
  - Overview - Describes at a high level, why you might need this product
  - Quick start - Shows the most basic and quickest example to make something happen with a product. Keep it really short.
- Concept
  - These pages usually align with sections shown in the product in the Appwrite Console.
  - Focused on describing concepts a user should know, but not actions you might take.
  - Cover all the details
- Journeys
  - These pages focus on common actions and work flows
  - Detailed examples that span many concepts
  - Like cookbook at other organizations' documentation.

### APIs section

Describes consuming APIs, which are a little more advanced, like using REST API directly or GraphQL directly.

### Tooling section

Describes tools that help you work with Appwrite, but are usually non-essential and not end-user facing.

### Advanced section

For information that's not used commonly during the development cycle.

- Platform: covers concepts that apply to the entire Appwrite Cloud platform, like API keys, rate limits, etc.
- Migrations: covers migrations feature of Appwrite that helps you move data around.
- Security: purely information about measures Appwrite use to ensure security of the platform and data.
- Self-hosting: The Appwrite self-hosted platform is meant to behave identically to Cloud after being configured corrrectly. This section focuses on how to configure Appwrite self-hosted such that it behaves like Cloud.

## Documentation sources

The Appwrite docs are compiled from different repositories. Here are the significant touch points you need to know about.

[appwrite/website](https://github.com/appwrite/website):

- Tutorials
- Quick starts
- Product, API, Tooling and Advanced sections

[appwrite/appwrite](https://github.com/appwrite/appwrite):

- [API Reference](https://appwrite.io/docs/references) pages
- API specification
- API description
- API endpoint description
- API request parameters
- API response model

[appwrite/sdk-generator](https://github.com/appwrite/sdk-generator):

- Generated examples

## Markdown Style guidelines

For consistency the Appwrite documentation follows a strict set of style guidelines, so no matter who is writing the documentation,
the tone and voice remains consistent.

### Headings

- All titles, headings, buttons, and labels should be written in **sentence case**. If you're not sure what sentence case should look like, check [APA's style guide](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case) or check with ChatGPT and other LLMs which reliably converts titles to sentence case.
- All headings in a docs page begin with `# Heading` then `## Heading` and `### Heading`. Internally, they're converted to H2 to H4 tags.
- All headings should have an ID label, for example `# Cool heading {% #cool-heading %}` the `#cool-heading` ID will be used to generate the table of contents and add links to the heading.
- Prefer verbs over gerunds, for example, say "Create documents" not "Creating documents".

### Extended Markdoc components

Appwrite's documentation uses extended markdown syntax. You can find all of the available partials types in the [CONTENT.md file](./CONTENT.md).

### Screenshots

- When contributing upload original screenshots. The Appwrite design team will edit the screenshot to be consistent with other screenshots in the docs.
- Screnshots should be taken in a 1400 x 900 view port on 3x DPR in browser developer tools.
- Use generic and sensible organization, project, and resource names. Avoid names like `test`, `demo`, or `sdlkfj`.
- All screenshot should be take from a user named Walter O'Brien. You can change the name of your current user by going to your Appwrite Console and clicking the **top right profile icon** > **Your Account** > **Name**.

### Content consistency

If you're contributing a **new piece of content**, always follow the closest example as an outline. For example, a new web quick start should use one of the existing web quick starts as example, with the same content and pages.

If you can't find a similar piece of content as example, the Appwrite team will request an ourline from you.

It should contain all the pages and headings with in them, maintainers may request clarification on headings.

```md
# page 1
    ## heading a
    ## heading b
    ...
# page 2
    ## heading a
    ## heading b
    ...
# page 3
    ## heading a
    ## heading b
    ...
...
```

### Content splitting

Split content to make them easier to read. Split long sentences and long paragraphs such that key concepts can be obtained even when skimming through only first few words of paragraphs.

Split content such that each piece makes sense without reading dependents or explicitly link pre-requisit material.

## Common workflows

### Release prep

- [ ] Add new version to [src/lib/utils/references.ts](src/lib/utils/references.ts)
- [ ] Point Cloud to new version in [src/routes/docs/references/[version]/[platform]/[service]/+page.server.ts](src/routes/docs/references/[version]/[platform]/[service]/+page.server.ts)
- [ ] Update install command in [/workspaces/website/src/routes/docs/advanced/self-hosting/+page.markdoc](/workspaces/website/src/routes/docs/advanced/self-hosting/+page.markdoc)
- [ ] Update events [src/partials/[product]-events.md](src/partials/)
- [ ] Update response code [src/routes/docs/advanced/platform/response-codes/+page.markdoc](src/routes/docs/advanced/platform/response-codes/+page.markdoc)
- [ ] Bump latest SDK versions in SDKs page, quick start, and tutorials
- [ ] Create new sections for new products
- [ ] Create new concept and journey pages for new features
- [ ] Update docs for breaking changes

### Documenting a new product

TODO

### Documenting a new SDK

TODO
