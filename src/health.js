import { changeState } from "./state";

export const takeDamage = (damageValue) => {
  return changeState("health")(damageValue * -1);
};

export const lifeDetector = (state) => {
  if (state.health > 0) {
    return true;
  } else {
    return false;
  }
};