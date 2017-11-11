# React Workshop @ Facebook Developer Circles - Buenos Aires

### Welcome!

This is the material needed for the React Workshop that will take place at Buenos Aires Facebook Developer Circles 2017.

## Start

First of all, start to install `Git` & `npm` (and optionally `yarn`):

- git https://git-scm.com/downloads
- node https://nodejs.org/en/
- yarn https://yarnpkg.com/en/docs/install

Also it will be useful to install dev-tools for Chrome:

- https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

## Why react?

- Focused mainly on the user interface
- Component based (composition model)
- Virtual DOM
- ```<JSX></JSX>```
- /routing/solution
- React Native
- Facebook stands behind this project 

## Life Cycle

React components and their life cycle:

![](https://raw.githubusercontent.com/Alfafc/react-workshop/master/public/reactjs_component_lifecycle_status.png)


### 1 Hello world

First met with react and hot reload
Understand Virtual DOM and under the hood of JSX
Play around with JSX and non JSX syntax

### 2 Hello message

First met with props and components composition
Play with defaults values and required props
Task: install 
Task: add your profile image to the message

### 3 Hello your name

First met with `react-router-dom`, and another way of receiving props
Play with routes, paths, and "match" object
Look at history changes in react devtools
Task: print current url and add a button to go back and forward in history with match.history.goBack/goForward

### 4 Chat bubble

First met with interval and componentDidMount & componentWillUnmount methods
Clean resources
Use of moment library
Understand Render method calls 
Task: print ticks and see what happen with render method
Task: implement state to become a stateful component

### 5 Chat List


First met with react-perf-tool and react-addons-perf
Task: run react performance

## Performance

https://www.fullstackreact.com/articles/redux-with-mark-erikson/

https://reactjs.org/docs/installation.html

https://pandao.github.io/editor.md/en.html

https://github.com/facebookincubator/create-react-app
## Redux (recommended)


### Creating an app

For your first app, use `create-react-app` tool, it will make your life easier getting all default configurations:

`yarn global add create-react-app`
`create-react-app react-workshop`

Also you can fork this project ;)

## License

MIT 

Feel free to use this if it can help you in any way, and contribute to it too :) 
