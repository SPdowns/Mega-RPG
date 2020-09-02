import { storeState, changeState } from './state';

export const characterCreate = (name) => { //characterCreate("Sudo")
  let state = {
    name
  }; // state = { name: "Sudo" }
  return storeState(state); 
};

// const character = characterCreate("Sudo");
// character() => return the current state of "Sudo";
// character(strength(1)) => increase "Sudo" strength by 1;
// const character2 = characterCreate("Sean");

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