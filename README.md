# Tymeshift Locations

![Github Actions](https://github.com/diogoosorio/tymeshift-locations/workflows/CI/CD/badge.svg)

Live deployment: https://diogoosorio.github.io/tymeshift-locations

This was my submission to the [Tymeshift recruitment challenge](https://github.com/Tymeshift/react-code-test).


## Running the Application

This is pretty much a vanilla create-react-app, so what you're used to with `react-scripts` works:

* `yarn start` - starts the development server
* `yarn test` - runs the test suite
* `yarn build` - creates a production-grade build of the app
* `yarn lint` - runs the linter agains the codebase

Linting and tests are enforced via the CI server (Github Actions).

## Project Structure

Hopefully the approach isn't hard to follow, but I've stick with this structure:

```sh
src/
├── components
│   ├── Header
│   ├── LoadError
│   ├── LocationCard
│   ├── LocationIcons
│   └── LocationModal
├── containers
│   └── ListLocations
├── icons
├── infrastructure
└── services
```

Where:

* `src/components` - this directory contains a set of presentational components, each with an arbitrary level of granularity (the project is small, I saw no reason to overcomplicate things).

* `src/containers` - components with most of the applicational logic/state.

* `src/icons` - I've turned all the icon assets (SVG) into components and grouped them together here (usually this leads to a icon library being refactored out at some point or something like that).

* `src/services` - this'd where most of the actual domain logic of the app lives (validation, persistence, data retrieval, ...)

## Remarks & Next Steps

I don't do this kind of work a lot, so for time sake I stuck with I'm familiar with (the stack I'm more comfortable with):

* [create-react-app](https://create-react-app.dev/) was used as the app boilerplate
* [material-ui](https://material-ui.com/) was used as the foundation for UI
* [styled-components](https://github.com/styled-components/styled-components) to style the components
* [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) to test the components
* [react-router](https://github.com/ReactTraining/react-router) to enable shareable URLs for the locations
* [luxon](https://moment.github.io/luxon/) to deal with the date parsing/formatting

With more time (and in a real World scenario), I'd probably focus on the following things:

* Discuss the number of typography variations for such a small screen with the designer. There's probably a pattern there, but I couldn't even understand using Sketch what each variation of text really was (e.g. `h2` == `line-height: Y`, `font-size: Z`)

* With that information refactor the [theme](./src/theme.ts) in this regard, I've cheated a bit there around typography. :)

* This [query hook](./src/containers/ListLocations/hooks.ts) which was heavily inspired by Apollo's query hooks. There's probably a simpler/better way (or even some known library that does this with axios for me).

* Work on the [app's telemetry](./src/infrastructure/logging.ts) as well as introducing a global unhandled error treatment logic.

* Improve the HTTP client by introducing a retry policy for queries like the one I've built for the challenge.

* I also didn't quite get the time requirement - I assumed it relates to the `createdAt` property returned by the API, but I'm failing to see how just the creation **time** (without the date) would be relevant. I formatted the time according to the design, but seemed an awfuly weird requirement.

* As the app has a single page/container, I also assumed that storing the view counters in the container's state would suffice (which would mean the loss of that state if/when the container gets unmounted). 

  I'm unsure if you peepz were expecting to see that state stored in such a way that it'd be retained if/when the container gets unmounted (e.g. a React context or use a state management library, for example).
