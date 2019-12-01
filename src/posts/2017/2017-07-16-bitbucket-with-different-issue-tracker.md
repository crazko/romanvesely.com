---
id: 6
title: Connect Bitbucket commit messages with different issue tracker
description: Bitbucket can link issues and commit messages not only in itself alone but also with outside world. Let's have a look how to create connections with a different tool for issue tracking.
sources:
    -
        - "https://confluence.atlassian.com/bitbucket/link-to-a-web-service-283641959.html"
        - "Bitbucket: link to a web service"
    -
        - "https://blog.bitbucket.org/2012/06/18/use-custom-regex-to-link-anywhere-on-bitbucket/ "
        - Use Custom Regex to Link Anywhere On Bitbucket
    -
        - "http://www.regular-expressions.info/brackets.html"
        - Use Parentheses for Grouping and Capturing
    -
        - "https://regex101.com/"
        - Online regex tester
    -
        - "https://blog.trello.com/trello-power-ups-for-jira-bitbucket-confluence-hipchat"
        - New Trello Power Ups blog
---

Oftentimes I like to wander around a program's or an app's settings and try every possible feature to see what can be adjusted. In the [company](http://www.nesskdc.sk/) I work for, we use Bitbucket intensively for projects developed for [non-profit organizations in our region](http://www.nesskdc.sk/en/community-support/ness-kdc-to-kosice/) as well as a place we store our own company-life-supporting applications.

Given that, Bitbucket was not an exception in my seeking for enhancements. After a while, I came around **Link setting** and started digging deeper to see how can it be leveraged in our development process.

## An issue tracker
First I need to say - we do not use Bitbucket to track issues. Developers frequently need to talk about new features or enhancements with our non-technical colleagues from PR or HR section for whom such a tool could be quite too much.

Because of that, we settled with Trello, which is more user-friendly to keep the discussion about all projects' topics among all involved participants. Simply, a card represents an issue for us - the developers.

## Custom links
Bitbucket can link a commit message with an issue in the way a Github can do:

![Bitbucket issues](/assets/posts/bitbucket-with-different-issue-tracker/bitbucket-issues.png "Bitbucket issue tracker")

That's great, however not usable in our workflow with Trello. Though, we can use [Link to a web service]({$sources[0][0]}) setting,  probably not so widely known feature of Bitbucket, and get following results that point directly to Trello's card:

![Bitbucket issues](/assets/posts/bitbucket-with-different-issue-tracker/bitbucket-issues-custom-01.png "link is at the beginning of the message")

![Bitbucket issues](/assets/posts/bitbucket-with-different-issue-tracker/bitbucket-issues-custom-02.png "link can be also somewhere in the middle")

Nice, how to achieve it?

You need to go to the **repository Settings** and find **Links** under **Workflow** section. You can see that there is already one present - Bitbucket issue tracker - which is exactly what it says it is.

To add a new one just click on the **Add new link** in the upper right corner and fill the dialog with the following:

- Link type: Custom
- Link url: `https://trello.com/c/\1`
- Link key: `^(\w+)`

The link key is a regex rule which selects the first word of a message and makes a group of it. Then it is exchanged with the `\1` placeholder in the link url which will make a correct link in a message.

<div class="image-small" markdown="1">
![Bitbucket issues](/assets/posts/bitbucket-with-different-issue-tracker/bitbucket-issues-dialog.png)
</div>

<div class="tip" markdown="1">
[Learn more about regex]({$sources[2][0]}) and how to use parentheses for grouping. You can also [try your regex rules online]({$sources[3][0]}).
</div>

If you want to have card ID somewhere in the message body, you can change Link key to `#(\w+)`. Now every word prefixed with _# symbol_ will contain a link.

Of course, you can use a different symbol. Just be sure you have one, so the ID could be recognizable amongst the other regular words in a message.

You are also allowed to add more concurrent rules.

## In conclusion
Everything's good but it's not elegant enough. I'm a bit disappointed that Trello [deprecated option](https://trello.com/c/sSldoiVf/46-deprecated-mentioning-cards-by-number-e-g-46-creates-hyperlinks) that allowed mentioning (thus linking) cards by their number, which would be surely easier to remember and to write into commit message than to copy-paste entire UUID of a card.

Eventually, we opted for another solution. Every pull request carries whole card's URL in the description, which makes it easy for us to get information about an issue, though, just not in every commit.

Are you in a similar situation? Do you use a different approach? If so, I'd like to hear what's your solution or how do you utilize the custom link option.

## Update 2017-08-23
Recently I noticed interesting addon inside Bitbucket integrations - a power up for Trello that allows you join repositories to boards.

Once you add one (or more) repo, you are able to create links from Trello's cards to commits, branches or pull requests. Even status of PR is visible; you can see directly who gave an approval, for example. We have adopted this feature very quickly. Read more about new possibilities [in their blog]({$sources[4][0]}).
