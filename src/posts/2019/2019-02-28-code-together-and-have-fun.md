---
id: 12
title: Code together and have fun
description: Some time ago I came upon the term Code in the Dark, an event for true frontend lovers. Probably it was a part of some conference, where visitors became participants and competed together in creating HTML and CSS completely without seeing the results. I thought it could be fun to be part of such a competition. Not very recently this idea popped up into my mind again and I decided to organize a similar event with my colleagues.
---

Here is the [original concept](http://codeinthedark.com/) of the contest:

> Code in the Dark is a front-end (HTML, CSS) competition, originating from Tictail, where each contestant competes to implement a website design given only a screenshot. The catch is that no previews of the results are allowed during the implementation, and no measuring tools can be used. The winner is decided by the audience.

A competitor is also restricted only to use the [web-based editor](http://codeinthedark.com/editor/) and has 15 minutes time cap to complete the task.

## Grab some 🍺 and have fun

So, the idea was to hold an event locally in our office after the working hours. I wanted it to be not so restrictive about the used editor - all of us like to work with something else - and let everyone leverage the strengths of their choice. Yes, I'm talking about [Emmet](https://emmet.io/) and snippets support. I knew that PhpStorm, Sublime Text, and vscode are used among us, but in the end, all of us decided for vscode.

Another difference, in comparison with the original idea, was that the audience (everybody not coding at that moment) could have see the preview of those currently competing. This was very important for me. I'd say it was the main purpose of the event: grab some beer, watch and have fun while others are dying trying and not knowing what they are doing. And here and there it was really a comedy.

![BlindNess coding #0](/assets/posts/code-together-and-have-fun/blindness-coding.jpg)

## Setup and technical aspects

We had two people coding in one round. The rest were watching the preview at projector screen in a real-time. I as a moderator was choosing a design to code, taking care of time and smooth course.

In front of every competitor was a screen with a current task, that was not connected to their computer and could be changed on demand by me/moderator. That way they could care only about the code. The projector screen was split into halves to show the results of both contestants side-by-side.

All of this was easily possible thanks to the Browsersync's feature called [tunneling](https://www.browsersync.io/docs/options#option-tunnel), provided by [localtunnel.me](localtunnel.me). Every coder created a tunnel and shared a URL with me, so I could put it on the screen for the audience. I created a tunnel to show the design for the competitors.

Browsersync watch for changes and refresh the tunneled URL, **real-time updates for all**! Note that changes have to be saved for Browsersync to catch them so enabling auto-saving option is recommended.

<Tip>

I put together a [simple repository with all the settings](https://github.com/crazko/blindness-coding). Feel free to use it (and let me know, what do you think).

</Tip>

## Conclusion

As I already said - it was much more fun than I expected. I really recommend you to try it and spend some informal time with your colleagues (or friends), it could be a part of your team-building activities.

No one would say 15 minutes can pass so quickly. You _shouldn't_ expect any fundamental results after that time, but it is just enough to not let the audience get bored. So be prepared that at the end of the time cap the results might be ... unsatisfying for a proud coder 😀.

Here are [some designs I chose for us](https://drive.google.com/open?id=1bt872tB7ICe_4dz9oZ2omP0_gfAw0C7g), but for the next round, I'm thinking about less sophisticated ones. To design only a logo, or only some part of the site, like navigation, let's say.

Let me know if you have had a similar experience!
