---
title: CSS Nesting Survey
---

One of the most anticipated features in CSS, nesting, is indeed coming to be part of vanilla CSS. There are currently three different options for the syntax and people can choose from them in an [ongoing survey](https://webkit.org/blog/13607/help-choose-from-options-for-css-nesting-syntax/) to help the implementers make the decision. What are the options and what did I vote for?

## Overview

All of the presented options produce the same result:

```css
header {
  color: tomato;
}

header nav {
  display: flex;
}
```

Here are the options and my views on them.

### Option 3

```css
header {
  color: tomato;

  & nav {
    display: flex;
  }
}
```

This option is the most similar to Sass out of all the options. However, it is not the same! The nested selector cannot start with a letter. That's why in the example above, the nested rule _must be_ prefixed with `&` even though it is optional in every other case (and option).

Also, when the parent selector should come after the nested selector, it must be wrapped with, for example, `:is()`[^is], like in this contrived example:

```css
header {
  color: tomato;

  :is(nav) & {
    display: flex;
  }
}
```

I think this exception may cause a lot of errors during development when this option is implemented. The question that arises is why can't the syntax [be exactly like in Sass](https://pinafore.social/statuses/109524822429071401)?

### Option 4

```css
header {
  color: tomato;
}
 {
  nav {
    display: flex;
  }
}
```

Nested selectors and declarations are put in a separate scope. This is what I voted for because I find it the most convenient of all three options.

It may lead to some weird declarations in certain situations, though. When the parent selector does not have any declarations, its scope is empty:

```css
header {
}
 {
  nav {
    display: flex;
  }
}
```

### Option 5

```css
@nest header {
  & {
    color: tomato;
  }

  nav {
    display: flex;
  }
}
```

The `@nest` declaration comes before the parent selector. This reminds many people of media query declarations. For me, it's a bit cumbersome - it forces you to think ahead and write it before nested declarations can be used, or makes you move back in front of the parent selectors and write it afterwards.

## Current results

I was not surprised to see Option 3 having the most votes (as of mid-December 2022):

- Option 3 - 77%
- Option 4 - 9%
- Option 5 - 14%

Although the survey is still ongoing, it's pretty clear that people like the Sass-like syntax the most. Probably because it is the most similar to what many of them have been using in the past few years.
Even though I currently do not consider myself to be a user of the CSS Nesting feature[^why], I'm a bit sad my preferred option is least favored so far.

If you want to shape the future of CSS, [participate in the survey](https://webkit.org/blog/13607/help-choose-from-options-for-css-nesting-syntax/)! The survey is accompanied by lots of examples and comprehensive explanations, so it is beneficial to check it out even when you do not want to vote. If you are interested in more in-depth discussions, take a look at the [Github](https://github.com/w3c/csswg-drafts/issues/7834) [issues](https://github.com/w3c/csswg-drafts/issues/7970) of the CSS working group.

[^is]: It's not about the [`:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) pseudo-class having some special meaning in this particular case, it just starts with a colon, therefore it satisfies the rule "cannot start with a letter".
[^why]: I think that my need (or desire?) to use CSS Nesting in my day-to-day projects has been declining for a couple of years and it is currently almost zero. This blog is probably the last project written with CSS Nesting from scratch so far.
