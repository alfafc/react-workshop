# React Workshop @ Facebook Developer Circles - Buenos Aires

### Welcome!

This is the material needed for the React Workshop that will take place at Buenos Aires Facebook Developer Circles 2017.

## Start

First of all, start to install `Git` & `npm` (and optionally `yarn`):

- git https://git-scm.com/downloads
- node https://nodejs.org/en/
- yarn https://yarnpkg.com/en/docs/install

Also it will be useful to install dev-tools and react-perf for Chrome:

- https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
- https://chrome.google.com/webstore/detail/react-perf/hacmcodfllhbnekmghgdlplbdnahmhmm

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

- First met with react and hot reload
- Understand Virtual DOM and under the hood of JSX
- Play around with JSX and non JSX syntax
- Task: create the same component with non JSX and then, as pure component (js function)
- What is better in terms of performance?

### 2 Hello message

- First met with props and components composition
- Play with defaults values and required props
- Task: add your profile image to the message

### 3 Hello your name

- First met with `react-router-dom`, and another way of receiving props
- Play with routes, paths, and "match" object
- Task: Look at history changes in react devtools
- Task: print current url and add a button to go back and forward in history with match.history.goBack/goForward

### 4 Chat bubble

- First met with interval and componentDidMount & componentWillUnmount methods
- Clean resources
- Use of moment library
- Understand Render method calls 
- Task: print ticks and see what happen with render method
- Task: implement state to become a stateful component

### 5 Chat List

- First met with `react-perf-tool` and `react-addons-perf`
- Task: uncomment perf line in App and run react performance tools, check instance and render count with inclusive option selected
- Task: increase chat bubbles to 10k and implement react-infinite

### 6 Anim

- First met with `react-motion`
- Task: implement message fade-in and fade-out with a button 

### 7 Lab

- Just create your first app and start your project with reactjs.
For your first app, use `create-react-app` tool, it will make your life easier getting all default configurations:

`yarn global add create-react-app`
`create-react-app react-workshop`

- Also you can fork this project ;)

### Finishing

- Remember to pull request your results of the workshop, it may help others in the future

## License

MIT 

Feel free to use this if it can help you in any way, and contribute to it too :) 
