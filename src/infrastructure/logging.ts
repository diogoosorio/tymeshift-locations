/* eslint-disable no-console */

// TODO: Replace all the console invocations with some kind of
// error monitoring solution (e.g. Bugsnag, Rollbar, ...)
export default {
  error: (error: Error): void => console.error(error),
  info: (message: string): void => console.warn(message),
};
