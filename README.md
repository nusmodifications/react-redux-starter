React Redux Starter
==

Yet another minimal non-opinionated starter for modern single-page applications. This starter combines the good parts from the awesome [SurviveJS Webpack Guide](http://survivejs.com/webpack/) and Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app).

## Features

**Build System**
- Webpack, Webpack Dev Middleware, Webpack Hot Middleware

**JavaScript**
- Babel 6
- React v15 with Hot module reloading
- Redux
- React Router

**CSS**
- Bootstrap 4 with [Bulma theme](http://bulma.io/)
- Eslint (Airbnb, React presets)
- Sass
- Postcss (Stylelint, Autoprefixer)

## Getting Started
```
$ npm install
$ npm run build:dll # Do this whenever you update dependencies or change vendor bundle
$ npm start
```

## Build for Deployment
```
$ npm run build
```

## TODO

- Code splitting example
- Webpack DLL plugin
- Add Flow types
- Add testing
  - Enzyme
  - Ava
