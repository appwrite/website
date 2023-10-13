# Contributing

We would ❤️ you to contribute to Appwrite and help make it better! We want contributing to Appwrite to be fun, enjoyable, and educational for anyone and everyone. 

## Code of conduct

Help us keep Appwrite open and inclusive. Please read and follow our [Code of Conduct](https://github.com/appwrite/.github/blob/main/CODE_OF_CONDUCT.md).

## How to start?

1. Read the [README.md](./README.md) and [Code of Conduct](https://github.com/appwrite/.github/blob/main/CODE_OF_CONDUCT.md).
1. Start with an issue. If you see a problem you'd like to address, check to see if there's an open issue. Creating new issues for suggesting new features or reporting bugs is just as helpful as code contributions!
1. Discuss the problem. Get the Appwrite team and community to thoroughly discuss the issue and a proposed solution. 
    1. For code issues, this would usually involve describing current behavior and expected outcome, how you'll implement the changes, and why these changes are beneficial. 
    1. For documentation issues, this would usually involve an outline of proposed changes.
1. Get assigned to the issue.
1. [Fork the repository](https://github.com/appwrite/website/fork).
1. Make the code changes discussed in the issue.
1. [Create a pull request](#submit-a-pull-request-🚀).

## Documentation style
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

## Submit a pull request 🚀

Branch naming convention is as following

`TYPE-ISSUE_ID-DESCRIPTION`

example:

```
doc-548-submit-a-pull-request-section-to-contribution-guide

```

**All PRs must include a commit message with the description of the changes made!**

For the initial start, fork the project and use git clone command to download the repository to your computer. A standard procedure for working on an issue would be to:

1. `git pull`, before creating a new branch, pull the changes from upstream. Your master needs to be up to date.

```
$ git pull

```

1. Create a new branch from `master` like: `doc-548-submit-a-pull-request-section-to-contribution-guide`.<br/>

```
$ git checkout -b [name_of_your_new_branch]

```

1. Work - commit - repeat (make sure you're on the correct branch!)
2. Push changes to GitHub.

```
$ git push origin [name_of_your_new_branch]

```

1. Submit your changes for review. If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.
2. Start a Pull Request. Now submit the pull request and click on `Create pull request`.
3. Get a review approval/reject.
4. After approval, merge your PR.
5. GitHub will automatically delete the branch after the merge is done. (they can still be restored).