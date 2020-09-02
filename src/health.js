import { changeState, setState } from "./state";

export const takeDamage = (damageValue) => {
  return changeState("health")(damageValue * -1);
};

export const healDamage = (healValue) => {
  return changeState("health")(healValue);
};

export const lifeDetector = (state) => {
  if (state.health > 0) {
    return true;
  } else {
    return false;
  }
};

export const maxLifeCheck = (state) => {
  if (state.health > state.toughness) {
    return setState("health")(state.toughness);
  } else {
    return setState("health")(state.health);
  }
};