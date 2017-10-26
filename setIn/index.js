const setIn = (path, value) => (state) => {
  const [ currentPath, ...rest ] = path;

  const currentState = state[currentPath];

  if (Array.isArray(state)) {
    const nextState = setIn(rest, value)(currentState);

    if (nextState === currentState) return state;

    return [
      ...state.slice(0, currentPath),
      nextState,
      ...state.slice(currentPath + 1, state.length),
    ];
  }
  else if (typeof state === 'object') {
    const nextState = setIn(rest, value)(currentState);

    if (nextState === currentState) return state;

    return {
      ...state,
      [currentPath]: nextState,
    }
  }
  else {
    return value;
  }
}

export default setIn;
