export const storeState = (initialState = {}) => {
  let currentState = {...initialState};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};
// const character = storeState();
// character(strength(1)) => character gets +1 strength
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

export const addAttribute = (attributeName) => {
  return (attributeValue) => {
    return changeState(attributeName)(attributeValue);
  };
};
//character(addAttribute("strength")(10))

// export const addStrength = (value) => {
//   return changeState("strength")(value);
// };

//character(addStrength(10));
export const addAbility = (ability) => {
  return (state) => { 
    return ({
      ...state,
      ...ability
    });
  };
};