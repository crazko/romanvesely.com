---
title: Krystal, a TiddlyWiki plugin
publishedDate: 2023-12-24
description: A lightweight plugin for TiddlyWiki that changes its vertical story river to a horizontal one.
label: project
---

A couple of years ago, during the Covid pandemic lockdowns,
I focused more on how to improve my notes and note-taking process in general.

Back then, I was not satisfied with my notes spread across several documents[^docs].
Many times, I could not decide where to put something because I felt it belonged to more than one specific category.
Also, for some reason, I barely came back to look for what I had already noted.
In the end, it felt almost useless to spend time with note-taking at all.

I came across [Anne-Laure Le Cunff](https://anne-laure.net/) and her [blog](https://nesslabs.com/) full of loads of articles about productivity, learning, and journaling.
Thanks to these I have found a great tool [TiddlyWiki](https://tiddlywiki.com/)&mdash;a non-linear personal web notebook&mdash;and a great source of [thoughts on note-taking](https://notes.andymatuschak.org/) by [Andy Matuschak](https://andymatuschak.org/).

I liked the TiddlyWiki philosophy as well as its possibility of having backlinks between different notes.

**So I have built Krystal** - a lightweight plugin for TiddlyWiki that changes its vertical "story river" to a horizontal one to imitate the UI of Andy's notes system[^ui].

<figure>
    <video controls loop src="/assets/krystal01.mp4" type="video/mp4"></video>
    <figcaption>Video showing how the TiddlyWiki UI changes with the Krystal plugin.</figcaption>
</figure>

Since then, I have rewritten my old notes as atomic and interconnected notes.
I put them into this system having a couple of hundreds tiddlers[^tiddler] as of the time of writing.
Along with that, I have also incorporated flashcards (with the [TiddlyRember plugin](https://sobjornstad.github.io/TiddlyRemember/)) that I can export to [Anki](https://apps.ankiweb.net/), a spaced repetition system.

There's a great power when notes and flashcards are being kept in the same place.

> [...] it’s (finally!) a nice minimal and pleasing theme for TiddlyWiki (it even looks great on mobile!).
>
> <footer>&mdash; Tom Critchlow, <cite><a href="https://tomcritchlow.com/2020/05/19/tiddlywiki-krystal/">A Good Looking Tiddly Theme for Digital Gardens</a></cite></footer>

So, let's go ahead and check the Krystal plugin:

- [homepage](https://crazko.github.io/krystal/) and [installation guide](https://crazko.github.io/krystal/#Installation:Krystal%20Installation)
- [source code on GitHub](https://github.com/crazko/krystal)

If you build something on the top of Krystal, share it with others in the [discussion](https://github.com/crazko/krystal/discussions/45), so we can learn from each other.

[^docs]: Not only documents, I also used to use [calendar events for journaling](/journaling). I still keep my training logs in calendar, though.
[^ui]: Andy has [expressed some concerns](https://twitter.com/andy_matuschak/status/1568032775210692609) about the design.
[^tiddler]: In TiddlyWiki, a "tiddler" is one specific note. Or, more broadly, [the fundamental unit of information](https://tiddlywiki.com/#Tiddlers).
