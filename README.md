# Wickr Bot [Cookiecutter](https://github.com/cookiecutter/cookiecutter)

Cookiecutter template to quickly develop bots (IO integrations) for Wickr.

# Usage

```
cookiecutter gh:WickrInc/cookiecutter-wickr-bot
```

After you've generated your project via Cookiecutter, it will be available in a directory named `wickrio-$botname` by default, unless you set a different `project_slug` on setup. Here's an example:

```
$ cookiecutter gh:WickrInc/cookiecutter-wickr-bot
bot_name [My Bot]: Milk Bot
class_name [MilkBot]:
project_slug [wickrio-milk-bot]:
author_name []: Jeff Jimmerson
git_url []:
Select license:
1 - MIT
2 - BSD-3
3 - GNU GPL v3.0
4 - Apache Software License 2.0
5 - Unlicensed
Choose from 1, 2, 3, 4, 5 [1]: 5

$ tree wickrio-milk-bot/
wickrio-milk-bot/
├── Makefile
├── README.md
├── index.js
├── install.sh
├── lib
│   └── bot.js
├── package.json
├── start.sh
├── stop.sh
└── test
    ├── fakes
    │   └── wickr.js
    └── test-bot.js

3 directories, 10 files
```

 ow you're ready to start developing a WickrIO bot! Following the example above, the entrypoint for your bot is in `./wickrio-milk-bot/index.js`, and most of the bot logic can be found in `./wickrio-milk-bot/lib/bot.js`.

# License

This software is distributed under the [Apache License, version 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)

```
   Copyright 2021 Wickr, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```
