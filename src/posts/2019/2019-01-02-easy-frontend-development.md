---
id: 11
title: Easy frontend development
description: Create, store, present and distribute HTML templates painlessly with the current offer of the tools that are ready to help you. And completely for free!
---

## Background

At the beginning of my developer's career and throughout the years, I was tinkering mainly with the frontend, specifically, I was converting website designs created in Photoshop to templates using HTML and CSS, with a little help of JavaScript (jQuery to the rescue!). Those templates were later implemented together with some CMS by client's backend programmer. Although technologies, processes, and use cases from that time have changed, sometimes radically, we always get back to the roots - plain `*.html` files.

Back then, _a lot_ of work was repetitive (or maybe I just didn't know the better way of doing things): copy-pasting common parts of the design to every template, like a header or a footer. Imagine a dozen different subpages - templates for the main page, article, product, cart, etc., and a moment you realize you forgot to add a site's logo to some part of the footer. You'd had to open every template and add it to the place. Of course, PHP later helped me to generate resulting templates, but I found it a bit cumbersome.

Now, when I was done I had to share my work, let it be checked if everything's OK. It meant to create a ZIP with all the files, send it via email and wait for the response. An error found? Designer realized he wants to change something, even a small piece? The whole process began again.

With free hostings available, in the FTP era, it was a bit easier, but with continual changes in design still very error-prone and laborious.

## What I was looking for/look for now?

Not that much:

- **share common parts** of the templates - no more copy-pasting same thing to several places
- have some **updated preview** for a designer or a client - so they can react immediately upon changes (or when they have time for that)
- a simple **possibility of updates** - to get rid of another copy-pasting over FTP
- a better way of **distribution of the final solution** - ZIP files, really?
- faster **feedback handling** - email or chat communication can get messy really fast, and one can overlook important things easily
- have some **space for documentation** - not only for final backend implementer but also for my future self

## Today's possibilities

Like I described at the beginning of the article, everything's always changing, but after several tries and failures my current tech-stack consists of:

- [Nunjucks](https://mozilla.github.io/nunjucks/) - JavaScript templating language
- [Gulp](https://gulpjs.com/) - handles repetitive tasks
- [Browsersync](https://www.browsersync.io/) - offers live reloading, really beneficial through the development phase
- [Bitbucket](https://bitbucket.org/) - provides (private) storage for your files
- [Netlify](https://www.netlify.com/) - hosts your preview

### Nunjucks

Nunjucks as a templating language provides everything I was looking for, it comes with support for variables, template inheritance, which is great for defining global layouts, macros, which means custom functions, filters, that modify output and much more. It allows you to split parts of the templates to multiple files to preserve DRY principle.

```js
{% extends "base.html" %}

{% block header %}
<h1>{{ title }}</h1>
{% endblock %}

{% block content %}
<ul>
  {% for name, item in items %}
  <li>{{ name }}: {{ item }}</li>
  {% endfor %}
</ul>
{% endblock %}
```

Here comes the question - why not just use any of these [static site generators](https://www.staticgen.com/)? Or maybe React, which is component based by default? I think it would be unnecessary overkill to create dummy templates with those. I have to keep in mind I don't know who is going to use my work, either its output or the source code, so I try to make things as simple as possible for the end user, let it be anyone. Recently I also came upon the [Embedded JavaScript templating](https://ejs.co/) that seems like a good alternative.

### Gulp & Browsersync

Widely known task automation manager gulp still has its place in today's web development even though we have powerful Webpack now. Tasks configured via plain JavaScript functions are understandable for a broad audience. Browsersync speeds up your development process with automatic synchronizing of your changes that are reflected in the browser, or multiple browsers, or even mobile devices, at the same moment. It saves a lot of time.

Here is an [example](https://gist.github.com/crazko/d59053a5f3c236a20d27eacbb8a5e920) how a `gulpfile.js` could look like. It's a bit simplified because no project has the same settings.

### Bitbucket

Bitbucket is Git code management, it stores your code, which you can share with the others when you add them as contributors. It offers unlimited private repositories, which is simply great. With a repository for every project you can keep simple documentation in `README.md` file or use embedded wiki pages for more sophisticated help.

But what is actually valuable is the issue tracker. You can lead a discussion for every bug or a new feature separately in specific tickets and mark them as done when you are done. You are no more lost in countless email chains. This is very powerful.

### Netlify

Finally, Netlify is a static hosting. You cannot run PHP or other languages on the backend, which is fine since all we want is to present dummy HTML pages. It connects to your Bitbucket's repository and can run the specific task(s) on every change (every commit).

Do you remember gulp?

When you connect everything together, Netlify can run gulp task that builds your templates written in Nunjucks (or any other templating language) and host them for free on a custom subdomain, such as https://metropole-33b4eb.netlify.com/. And it will do that on every change in your source files that you push to the repository.

Now you just have to share a domain name with your client and at any time he or she will see the most updated version of your work. Automation is strong.

## Summary

Every project is different, so I didn't specify any CSS preprocessors or JavaScript libraries that may be used in the process. Possibilities are probably countless. My current setting consisting of aforementioned Nunjucks+Gulp+Browsersync+Bitbucket+Netlify works for me now but might change in the future.

Just keep in mind, not everyone is used to work with things like issue tracker or gulp tasks/npm scripts. But it really pays off to teach your clients or coworkers to use them properly. For both sides.

<Tip>

Find it useful? Great! But I can imagine you have a different approach. What does it look like?

</Tip>
