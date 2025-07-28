# Documentation contributing guide

Read this document carefully before making PRs to the Appwrite Website repo.

## What goes in docs?

The Appwrite documentation is meant to provide general guidance that's:

- Unopinionated
- Focused on the correct use of Appwrite product
- Includes examples for all relevant and applicable SDKs
- Agnostic to the user's implementation and stack.

Examples of things not fit for docs, and better as a blog or video:

- General programming advice
- Opinionated implementation patterns like MVVM, factory methods, etc.
- Examples that only include a select subset of Appwrite SDKs.
- Examples that do not work for all developers using Appwrite, but specific to Appwrite + technology.

Note that the tutorials and blogs available on the Appwrite blog and docs are meant for these types of information.

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

- [CLI](https://appwrite.io/docs/command-line)
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
- Prefer verbs to gerunds, for example, say "Create documents" not "Creating documents".

### Extended Markdoc components

Appwrite's documentation uses extended Markdown syntax. You can find all the available partials types in the [CONTENT.md file](./CONTENT.md).

### Screenshots

- When contributing upload original screenshots. The Appwrite design team will edit the screenshot to be consistent with other screenshots in the docs.
- Screenshots must be 16:9
- Screenshots should be taken in a 1400 x 900 view port on 3x DPR in browser developer tools.
- Use generic and sensible organization, project, and resource names. Avoid names like `test`, `demo`, or `sdlkfj`.
- All screenshot should be taken from a user named Walter O'Brien. You can change the name of your current user by going to your Appwrite Console and clicking the **top right profile icon** > **Your Account** > **Name**.
- Screenshots are stored in the `/images/docs/` folder, in a parent folder that is consistent with the path of the docs that reference the image.
- All screenshots must be both dark and light mode, with `/path/` holding the light-mode version and `/path/dark/` holding the dark mode version.
- Screenshots should be uploaded as un-edited original. Request help from the Appwrite design team to help you edit and refine your photos according to our guidelines.

```md
{% only_dark %}
![Project settings screen](/images/docs/platform/dark/create-api-key.png)
{% /only_dark %}
{% only_light %}
![Project settings screen](/images/docs/platform/create-api-key.png)
{% /only_light %}
```

### Content consistency

If you're contributing a **new piece of content**, always follow the closest example as an outline. For example, a new web quick start should use one of the existing web quick starts as example, with the same content and pages.

If you can't find a similar piece of content as example, the Appwrite team will request an outline from you.

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

### Documenting a new API

- Add a new .md file describing the new API here: <https://github.com/appwrite/appwrite/tree/main/docs/references>
- Add descriptions for methods and parameters in the controller code: <https://github.com/appwrite/appwrite/tree/main/app/controllers/api>
- Check new response models have meaningful descriptions

### Adding a new quickstart

- Copy a quick start from the [src/routes/docs/quick-starts](src/routes/docs/quick-starts) folder.
- Add a new entry and logo to [src/routes/docs/quick-starts/+page.svelte](src/routes/docs/quick-starts/+page.svelte)
- If you need a new logo, contact the Appwrite team to add one to Pink design.
- Update the content of your tutorial. Remember to update the front matter!
- Try to be consistent in both the quickstart's content and format when compared to existing quick starts
- Add the quick start to the footer and front page of Appwrite
- Use sections for steps on your page

### Adding a new tutorial

- Copy a tutorial from the [src/routes/docs/tutorials](src/routes/docs/tutorials) folder.
- Update the `+page.ts`'s redirect, for example, the Android tutorial has this: [src/routes/docs/tutorials/android/+page.ts](src/routes/docs/tutorials/android/+page.ts)
- Update [src/routes/docs/tutorials/+page.svelte](src/routes/docs/tutorials/+page.svelte) and add your new tutorial
- Update [src/routes/docs/tutorials/android/+layout.ts](src/routes/docs/tutorials/android/+layout.ts) and add your new tutorial
- Add the content of your tutorial. Keep pages short, separated by a different distinct feature for each step.
- If you need a new logo, contact the Appwrite team to add one to Pink design.
- Add the tutorial to the footer and front page of Appwrite

## Language and diction

### Headings

Navigation labels should be short (ideally, one word) and not have verbs or a directive to keep labels concise. Also make sure not to repeat a term if already under certain context

- ✅ User verification
- ✅ Release (under a Policies section)
- ❌ Verify user
- ❌ Release policies (under a Policies section)

For content headings, prefer simple nouns and root form verbs.

- ✅ Create screen (root verb, noun)
- ✅ Authentication (noun)
- ❌ Authenticating (present participle verb)
- ❌ Create a new screen (too wordy)

Try your best to stick to simple headings, if it's not possible, don't worry and write a full heading if need be.

### Links

Avoid unclear [links](https://www.youtube.com/watch?v=dQw4w9WgXcQ) such as learn more [here](https://www.youtube.com/watch?v=dQw4w9WgXcQ).
Readers will be unsure where a link may take them. Those using a screen reader will find it especially difficult.

- ✅ [Learn more about authentication](https://appwrite.io/docs/products/auth/email-password#login)
- ❌ Learn more about authentication [here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

### Sentences

Use a directive that's straight to the point when providing an action a developer must perform.
The action and verb always comes first, the explanation after.

- ✅ Create a new database.
- ✅ Update a document so its permissions include your new users.
- ❌ To allow access, update your permissions.
- ❌ You can create a new database for each tenant.
- ❌ Creating a new bucket lets you set different permissions for images uploaded by users.

The action always comes first and is in the beginning of the sentence, which makes important steps easier to follow.

If a step is more of a suggestion or is optional, you can intentially use another form to make it easier for users
to skip and scan a document.

### Paragraphs

Like sentences, important information always comes first.
This makes it easier to scan through the page.

- ✅ Clear, important information such as actions come first

> Store secrets as environment variables in vaults by navigating to **settings** > **security** > **vault**. Your secrets should never be shared. You must ensure data privacy, sharing secrets can compromise security during development.

- ❌ Unclear, important information is in the middle of the paragraph

> Security is important in development. That's why you should take care to protect secrets. Secrets should be safely stored as a environment variable in a vault. You can find vaults under **settings** > **security** > **vault**. Don't share this with anyone!

If there are multiple important actions or pieces of information, **break up the paragraph**.
Even if your paragraph is just one or two sentences, shorter paragraphs are easier to scan.

### Diction

Avoid using possession as it is less welcoming.

- ✅ read the documentation
- ✅ the API
- ❌ read on our documentation
- ❌ our API

If you're unsure about which word to use to describe a concept, you shuold look for precedence in the following order.

1. Appwrite docs
2. Appwrite Console
3. Appwrite API specs
4. Existing blogs
5. Follow other products when possible.
6. If all other avenues are explored, propose a new term. Clearly outline in your PR and come to agreement with the Appwrite team.

### Page structure

Quick starts, tutorials, product docs, and other pages should stick very close to existing examples.
This applies to tone, structure, and content. Unless no exisitng examples of a page type exist,
or a page needs to be sufficiently different from existing pages, follow exisitng examples.

If you are proposing a new type of page, discuss an outline in your PR and ask for the Appwrite team's review.

### Placeholders

Whenever there's a need for a placeholder such as for an ID, use angle brackets (<>) over square brackets ([]) because square brackets can be confused for an array.

- ✅ `client.setEndpoint("https://<REGION>.cloud.appwrite.io")`
- ❌ `client.setEndpoint("https://<REGION>.cloud.appwrite.io")`

## Code snippets

For quick starts and tutorials, a developer must be able to follow code examples from beginning to end
easily, and the code example is expected to be runnable and complete.

This means, you need to include imports, dependencies, and all parts needed to arrive at a functional example.

For concept and journey product pages, still try your best to have complete examples, unless:

1. The example will become opinionated. We avoid opinionated implementation and choices in product pages. Keep them in blogs, quick starts, and tutorials.
2. The example cannot be given in a complete form cleanly. For example, many of the Messaging services's examples cannot be given in complete form because the boiler plate and set up is complex and documented in Android/Swift documentation.
