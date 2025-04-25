# Content Guidelines

## Table of Contents

### Basics

Here are some essential markdoc syntax elements with code examples:

#### Paragraphs and Line Breaks

To create a new paragraph, simply leave a blank line between lines of text.

```md
This is the first paragraph.

This is the second paragraph.
```

#### Headers

Headers are used to create section titles. Use hashtags (#) for headers, with more hashtags for lower-level headers.

```md
# Header 1

## Header 2

### Header 3
```

Headers can also be given ID's so they can be linked to and are present in the ToC:

```md
# Header with ID {% #header-with-id %}
```

#### Lists

Create ordered (numbered) and unordered (bulleted) lists using 1., \*, or -.

**Ordered List**:

```md
1. First item
2. Second item
3. Third item
```

**Unordered List**:

```md
- Apple
- Banana
- Cherry
```

#### Links

Create hyperlinks to other web pages or sections within your documentation.

```md
[Google](https://www.google.com)
[Link to Section](#section-name)
```

#### Images

Embed images using the `![alt text](image URL)` syntax.

```md
![Logo](https://example.com/logo.png)
```

In most cases, we need images in both light and dark mode such as:

```md
{% only_dark %}
![Project settings screen](/images/docs/platform/dark/create-api-key.png)
{% /only_dark %}
{% only_light %}
![Project settings screen](/images/docs/platform/create-api-key.png)
{% /only_light %}
```

#### Code Blocks

Format code blocks using triple backticks (```).

<pre>
```python
def hello_world():
    print("Hello, World!")
```
</pre>

Remember to use a specific language label if the code is using an Appwrite SDK. Find the [list of available labels here](https://github.com/appwrite/website/blob/41bb6c71a8647016c88393003d3cf6c4edba1f76/src/lib/utils/references.ts#L26).

#### Inline Code

Highlight inline code with backticks (`) around the code snippet.

```md
Use the `print()` function to display text.
```

#### Emphasis and Strong Text

Use asterisks (\*) or underscores (\_) for emphasis and double asterisks or underscores for strong text.

**We use bold for representing text as seen on UI**. For example: "Click the button **Create new document**."

```md
_Italic Text_ or _Italic Text_
**Bold Text** or **Bold Text**
```

#### Tables

Tables allow you to display structured data in your documentation. Use pipes (|) to separate columns and hyphens (-) to define the table header.

```md
| Header 1     | Header 2     | Header 3     |
| ------------ | ------------ | ------------ |
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |
```

Alternatively, use markdoc tables.

```md
{% table %}

- Heading 1
- Heading 2

---

- Row 1 Cell 1
- Row 1 Cell 2

---

- Row 2 Cell 1
- Row 2 cell 2

{% /table %}
```

#### Block Quotes

Block quotes are used to emphasize or highlight text. To create a block quote, use the > symbol at the beginning of the quoted text.

```md
> This is a block quote.
> It can span multiple lines.
```

These are the fundamental Markdown syntax elements you'll need to create well-structured and formatted documentation.

### Components

#### Tabs

```md
{% tabs %}
{% tabsitem #js title="Javascript" %}
Lorem ipsum dolor sit amet consectetur.
{% /tabsitem %}

{% tabsitem #flutter title="Flutter" %}
Lorem ipsum dolor sit amet consectetur.
{% /tabsitem %}
{% /tabs %}
```

#### Multicode Examples

<pre>
{% multicode %}
```js
console.log('test');
```

```php
echo 'test';
```

```dart
print('test');
```
{% /multicode %}
</pre>

#### Sections

Use sections when there is a clear step-by-step format to a page. This is used mainly in journey pages and tutorials.

```md
{% section #featured-products-1 step=1 title="Title" %}
Lorem ipsum dolor sit amet consectetur.
{% /section %}

{% section #featured-products-2 step=2 title="Title" %}
Lorem ipsum dolor sit amet consectetur.
{% /section %}

{% section #featured-products-3 step=3 title="Title" %}
Lorem ipsum dolor sit amet consectetur.
{% /section %}
```

#### Info

```
{% info title="Public Service Announcement" %}
Lorem ipsum dolor sit amet consectetur.
{% /info %}
```

#### Icon

Available sizes are `s`, `m`, `l` and `xl`. Default: `s`.

```
{% icon icon="github" /%}
{% icon icon="github" size="m" /%}
{% icon icon="github" size="l" /%}
{% icon icon="github" size="xl" /%}
```

#### Icon Image

Available sizes are `s`, `m`, `l` and `xl`. Default: `s`.

```
{% icon_image src="/icon.png" alt="Icon" /%}
{% icon_image src="/icon.png" alt="Icon" size="m" /%}
{% icon_image src="/icon.png" alt="Icon" size="l" /%}
{% icon_image src="/icon.png" alt="Icon" size="xl" /%}
```

#### Only Light/Dark Theme

```
{% only_dark %}
![Project settings screen](/images/docs/platform/dark/create-api-key.png)
{% /only_dark %}
{% only_light %}
![Project settings screen](/images/docs/platform/create-api-key.png)
{% /only_light %}
```

#### Cards

We use cards when we reference a list of links for navigation

```
{% cards %}

{% cards_item href="/docs/quick-starts/react" title="React" %}
Get started with Appwrite and React
{% /cards_item %}

{% cards_item href="/docs/quick-starts/vue" title="Vue.js" %}
Get started with Appwrite and Vue.js
{% /cards_item %}

{% cards_item href="/docs/quick-starts/nuxt" title="Nuxt" %}
Get started with Appwrite and Nuxt
{% /cards_item %}

{% cards_item href="/docs/quick-starts/sveltekit" title="SvelteKit" %}
Get started with Appwrite and SvelteKit
{% /cards_item %}

{% /cards %}
```

#### Cards with icons

We use cards when we reference a list of links for navigation, this variation has icons for extra hints visually.

```
{% cards %}

{% cards_item href="/docs/products/messaging/apns" title="APNS" icon="icon-apple" %}
Configure APNs for push notification to Apple devices.
{% /cards_item %}

{% cards_item href="/docs/products/messaging/fcm" title="FCM" icon="web-icon-firebase" %}
Configure FCM for push notification to Android and Apple devices.
{% /cards_item %}

{% /cards %}
```

#### Accordions

Use accordions to reduce page size and collapse information that's not important when a reader is scrolling the page.

```
{% accordion %}
{% accordion_item title="Team ID" %}
{% /accordion_item %}

{% accordion_item title="Bundle ID" %}
{% /accordion_item %}
{% /accordion %}
```
