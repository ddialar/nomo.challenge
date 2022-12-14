# Nomo Code Challenge

## <a id="challenge-description"></a>๐ Challenge description

For this challenge you're going to create a basic React Reddit app, this will give us an idea about your coding skills.

Reddit is a news website in which registered users can submit posts or links to content that other users can vote and comment, the total number of votes determine the position of the post inside the website, each of these posts are grouped into categories known as โsubredditsโ.

Your app should list the posts in the r/pics subreddit.

Create a radio button with four options to get the different sorts:
- New (default): [https://api.reddit.com/r/pics/new.json](https://api.reddit.com/r/pics/new.json)
- Hot: [https://api.reddit.com/r/pics/hot.json](https://api.reddit.com/r/pics/hot.json)
- Controversial: [https://api.reddit.com/r/pics/controversial.json](https://api.reddit.com/r/pics/controversial.json)
- Top: [https://api.reddit.com/r/pics/top.json](https://api.reddit.com/r/pics/top.json)

For more information about the JSON structure see: [https://github.com/reddit-archive/reddit/wiki/json](https://github.com/reddit-archive/reddit/wiki/json)

## ๐ Index

-   [Requirements](#requirements)
-   [What will we evaluate](#evaluation)
-   [Extra points (not required)](#extra-points)
-   [Repository description](#description)
-   [Commands guide](#commands)
    -   [Switch Node version](#commands-switch-node)
    -   [Modules installation process](#commands-installation)
    -   [Run tests](#commands-tests)
    -   [Run Storybook](#commands-storybook)
    -   [Run development mode](#commands-dev-mode)
    -   [Build application](#commands-pro-mode)
    -   [Eject the application code](#commands-eject)

## <a id="requirements"></a>๐ Requirements

1. โ Use a list to display a scrollable list of the latest posts in the r/pics subreddit
2. โ Each post must show the following data: thumbnail image (if present), title, author, total number of votes (score), number of comments and date of creation (in a relative format ( e.g. โ1 day agoโ )
3. โ Once the user taps on a post, open a new tab with the contents of the post URL.
4. โ Ability to refresh the posts list.
5. โ Use redux or Context Api

    This point is not covered due to in order to implement my solution, it was not needed to use Redux or Context API. Instead of that I used [SWR](https://swr.vercel.app/).
6. โ Unit test
7. โ Use the latest release of React or one release before the latest

    The next are the modules used for production:
    - react (version 18.2.0)
    - react-dom (version 18.2.0)
    - react-router-dom (version 6.4.1)
    - styled-components (version 5.3.6)
    - swr (version 1.3.0)

## <a id="evaluation"></a>๐ง What will we evaluate
- Code quality
- Usage of patterns
- Project structure
- React Hooks usage

## <a id="extra-points"></a>๐ฏ Extra points (not required)
- โ Typescript (version 4.8.4)
- โ ESLint and โ Prettier

    Since ESLint provides formating tools I have not used Prettier anymore.
- โ Module resolver or similar (for simplify import paths)

    I've configured the `tsconfig.json` file in order to extend the `tsconfig.paths.json` file which contains all the path aliases used in thte code.

    This configuration is also included into the Jest configuration.

## <a id="description"></a>๐ Repository description

Code designed to accomplish the code challenge proposed for participating in the FullStack open position published by Nomo.

Some tools used on this repository are next:

-   โ๏ธ `Create React App` for application scaffolding.
-   ๐ `Styled Components` as styling framework.
-   ๐จ `SWR` as requests and cache memory management tool.
-   ๐งช `Jest` for testing.
-   ๐ป `Mocked Service Workers (msw)` for REST API request mocking.
-   ๐ถ `Husky` for managing the Git Hooks.
-   ๐ `ESLint` for code linting and formating.
-   โ๏ธ `react-app-rewired` for overwriting native configuration.

Therefore this repository is defined to work with `NodeJS 16.15.0`.

If you are running differente versions of NodeJS in your system, just run `nvm use` and it will be switched to the version defined in the `.nvmrc` file.

## <a id="commands"></a>๐ฅ Commands guide

### <a id="commands-switch-node"></a>โ Switch Node version

```sh
nvm use
```

### <a id="commands-installation"></a>โฌ๏ธ Modules installation process

```sh
npm i
```

### <a id="commands-tests"></a>๐งช Run tests

```sh
# Unit tests
npm test
# Testing suite in watch mode
npm run test:watch
```

### <a id="commands-dev-mode"></a>๐ญ Run application in development mode

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### <a id="commands-pro-mode"></a>๐ Build application

```sh
npm run build
```

### <a id="commands-eject"></a>๐ฅ Eject the application code

```sh
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you canโt go back!**

If you arenโt satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point youโre on your own.

You donโt have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldnโt feel obligated to use this feature. However we understand that this tool wouldnโt be useful if you couldnโt customize it when you are ready for it.
