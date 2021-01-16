---
title: Useful search engine shortcuts for browsers
---

Most of the modern web browsers today contain functionality to set multiple search engines that can reduce your day-to-day time spent on finding the best results. Some time ago I [tweeted](https://twitter.com/rmnvsl/status/1027533760387002368) about adding GitHub to the browser's search engines list. My list has grown in size since then and I think you may find it useful.

My default browser is [Vivaldi](https://vivaldi.com/), but you can find the same setting in all of the following: Firefox, Chrome, Opera or Brave. I currently don't have access to IE/Edge and haven't found it in Safari; sometimes it's really old-fashioned in comparison with others...

This is how the usage of a custom search engine looks like in the wild:

![Search with custom search engine](/assets/posts/browser-search/search-engine-browser.gif)

Where to look for? Use the following addresses:

- [vivaldi://settings/search/](vivaldi://settings/search/) in Vivaldi, under Search Engines
- [about:preferences#search](about:preferences#search) in Firefox, under One-Click Search Engines
- [chrome://settings/searchEngines](chrome://settings/searchEngines) in Chrome, Opera and Brave, as all of them will redirect you to correct address

You have to add engine name, keyword or nickname which is the shortcut you use in the address bar and search URL containing `%s` which is a placeholder for the phrase you are looking for. So in the case of Stack Overflow, the settings are as follows:

- name: Stack Overflow
- nickname/keyword: `so`
- URL: `https://stackoverflow.com/search?q=%s`

It's a bit different in Firefox where you add custom engines as add-ons, so you have to search them up in their [add-ons portal](https://addons.mozilla.org/en-US/firefox/search/?sort=rating&type=search). You can set a custom keyword afterward.

## My current settings

<div style="overflow-x:auto;" markdown="1">

| name           | keyword | url                                                      |
| -------------- | ------- | -------------------------------------------------------- |
| DuckDuckGo     | `d`     | `https://duckduckgo.com/?q=%s`                           |
| Wikipedia      | `w`     | `https://en.wikipedia.org/wiki/Special:Search?search=%s` |
| Google         | `g`     | `https://www.google.com/search?q=%s`                     |
| GitHub         | `gh`    | `https://github.com/search?q=%s`                         |
| Can I use...   | `c`     | `https://caniuse.com/#search=%s`                         |
| npm            | `npm`   | `https://www.npmjs.com/search?q=%s`                      |
| Stack Overflow | `so`    | `https://stackoverflow.com/search?q=%s`                  |
| YouTube        | `yt`    | `https://www.youtube.com/results?search_query=%s`        |
| MDN            | `mdn`   | `https://developer.mozilla.org/en-US/search?q=%s`        |
| PHP            | `php`   | `https://www.php.net/manual-lookup.php?pattern=%s`       |

</div>

You can [edit this page](https://github.com/crazko/romanvesely.com/blob/master/site/_posts/2019/2019-05-06-browser-search.md) and add more useful search engines!

![List of search engines](/assets/posts/browser-search/vivaldi-search-engine-settings.png)

## Pitfall

Let's say I want to know more about npm console options.

In a hurry, I type `npm cli options` in the address bar and get ["0 packages found"](https://www.npmjs.com/search?q=cli%20options) as a result. Huh? That's because I set `npm` keyword to search in the npm package database. To overcome this behavior I need to use `g npm cli options` to tell the browser to use Google as a search engine.

That's definitely not the end of the world, but it can be confusing sometimes. It may be solved by choosing different keywords, it's up to your preferences!

<Tip>

Do you have any other interesting use cases?

</Tip>
