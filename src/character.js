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
export const addAbility = (ability) => {
  return (state) => { 
    return ({
      ...state,
      ...ability
    });
  };
};

// character(addAbility(attack()))
// character().attack() => returns damage amount

export const attack = () => {
  const obj = {
    attack: function() {
      return (this.strength || 0);
    }
  };
  return obj;
};

export const fireball = () => {
  const obj = {
    fireball: function() {
      return (this.intelligence || 0);
    }
  };
  return obj;
};