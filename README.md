# Restate

> A library for helping manage immutable data within Redux

Whenever writing redux reducers, one has the opportunity to write their own
mutations by doing something like this:

```javascript
return {
  ...state,
  [key]: {
    ...state.key,
    [another]: "value",
  }
}
```

which can be cumbersome, or they can use `Immutable.js` to handle the immutable
state for them, which in turn makes reading data cumbersome.

This library allows the user to manage their state by using plain old javascript
objects. It just abstracts the chain of `...` for you. We also put the state
variable as the last parameters, so that you can compose mutations, like so:

```javascript
import { compose } from 'recompose';

return compose(
  setIn(['batman', 'city'], 'Gotham'),
  setIn(['batman', 'tools', 0], 'Utility belt'),
)(state);

```
