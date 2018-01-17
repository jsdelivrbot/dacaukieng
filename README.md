### Travis

- [![Build Status](https://travis-ci.org/lovedota/dacaukieng.svg?branch=master)](https://travis-ci.org/lovedota/dacaukieng)

### Description

- This Repo is for building a Lazy Load Template for SPA
- This Repo is using React, Redux, React-Router, Redux-Saga, TypeScript
- This Repo builds a NYTimes News Feeds App which has: InfiniteScroll, BootStrap

### Architecture

- We use `TypeScript` because it is easy to setup and the IDE run very well.
- We use AsyncComponent to lazy load the feature-modules.
- We use RootStore to `combineReducers` then `replaceReducer`.
- We use RootSaga to `combineSagas`

- ![alt text](https://0ye4ag-bn1305.files.1drv.com/y4mhQDeMCWWGrYPJOPklQI14GpXbi5yswtJw4BiVM6BeZvuxIf1FWIbHaGXWywFrGi3-7z8xrn1sPsomgRIBEveVRWPns1WeQnjI2tmvBwWybZ921lez2za5hEcEt5os3N2EYiUhkoTN4--LL1g1aax-z-KwWd8KV99_vYiJN9oaQ-FBXee5iAaOZyfHFLLCz6wC3vpk767y4AYZ8cNZsT3sA/React-Redux-Lazy-Load.png?psid=1 "Logo Title Text 1")


### How to run

- npm install
- npm install -g cross-env
- npm install -g ts-lint
- npm install -g typescript
- npm run dev - For Dev Environment
- npm run prod - For Production Environment

### Contributors

- lovedota21@gmail.com

### Reference

- https://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application
- https://stackoverflow.com/questions/14125175/setup-heroku-and-godaddy