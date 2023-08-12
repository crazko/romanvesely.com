---
title: Batch install extensions for Visual Studio Code
publishedDate: 2019-08-29
---

So, you move to another machine (permanently or temporarily) and need your favorite [editor](https://code.visualstudio.com/) to behave the same. How to easily take the installed extensions with you?

When you try to google **vscode synchronization** you are presented with an extension called [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) that can pretty much cover this problem and do even more. In my laziness, I found the set up a bit complex as I only wanted to get all extensions from my old device and install them to the new one. Once and for all. Preferably without any GitHub token fiddling around.

OK, let's make it quick; we can do that just with a few commands. Open your terminal and execute:

```bash
code --list-extensions > extensions.md
```

This will put the list of your VSCode extensions in the `extensions.md` file, one name per line.

_Side note: I use markdown for almost all text-only files currently, but clearly, it can be anything._

Now you need to move this file to your new machine. Use Dropbox, Drive, email, USB stick, whatever suits you most. Finally, execute:

```bash
xargs -n1 code --install-extension < extensions.md
```

`xargs` will execute `code --install-extension` for provided input. More precisely, argument `-n1` means that a command is executed one-by-one for every line of the input file. First item may produce `code --install-extension esbenp.prettier-vscode` to install [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

And that's it! You have successfully installed all your extensions with **only two commands**.

For more info check all VSCode [commands for managing extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_command-line-extension-management). For evidence, here is the list of my extensions:

- [Nette Latte + Neon](https://marketplace.visualstudio.com/items?itemName=Kasik96.latte)
- [Markdown TOC](https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc)
- [Markdown Checkboxes](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-checkbox)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Better TOML](https://marketplace.visualstudio.com/items?itemName=bungcip.better-toml)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [PHP IntelliSense](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense)
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- [Diff Tool](https://marketplace.visualstudio.com/items?itemName=jinsihou.diff-tool)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- [GraphQL for VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode)
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [Apache Conf](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-apache)
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Live Share](https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [GraphQL](https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Nunjucks](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks)
- [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
- [Sort lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
- [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
