import { storeState, addAbility } from "./state";
import { attack } from "./abilities";

const trollState = storeState({
  name: "troll",
  health: 100,
  strength: 100,
  toughness: 100,
  intelligence: 3
});

export const getTroll = () => {
  const troll = trollState;
  troll(addAbility(attack()));
  return troll;
};