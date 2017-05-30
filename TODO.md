# React prototype replacement for `my`

## Goal: replace existing Ember interface

Goals:

- must be able to integrate into existing Ember project
- remove complexity including NPM packages
- things `ember-cli` does for us now:
  - Builds project -> webpack
  - Deploys -> need custom solution
  - Dev server -> webpack watch + ember
  - Runs tests -> Jest

## Production build

- Include `my-react` as an NPM dependency
- Import the JS and CSS via `ember-cli-node-assets`

## Dev server

To work effectively we need to see updates instantly in two areas: tests and the main app. Tests work fine with Jest,
but live updating the Ember app will be problematic.

### Live updating with Ember container

When only the Ember application is changing it is sufficient to import the React app's JS and CSS as static assets from
the `node_modules` directory. However, when we need to work on the React side of things we need to see our changes live
in a running browser.

Two possible approaches:

1. Use webpack in watch mode instead of `webpack-dev-server`; optionally run both in parallel
2. Work in something like `react-storybook` where we can control the environment
  - `react-storybook` is not compatible with `create-react-app` and in general seems like too far off our desired
    direction with webpack

## Prototype

Plan:

  - Set up build system for local development and production
  - Replace campaign/new:
    - Dependencies:
      - Material components
      - Custom Material theme overrides
    - Must either implement:
      - Http service with http client
      - Validation handling?
      - Redirection / function call on success
    - Or accept as input:
      - formData including errors
      - onSave function
