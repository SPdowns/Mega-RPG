import { storeState, setState, addAbility, addAttribute } from "./state";
import { attack } from "./abilities";

// const trollState = storeState({
//   name: "troll",
//   health: 100,
//   strength: 100,
//   toughness: 100,
//   intelligence: 3
// });

export const getTroll = () => {
  const troll = storeState();
  troll(setState("name")("troll"));
  troll(addAttribute("health")(100));
  troll(addAttribute("strength")(100));
  troll(addAttribute("toughness")(100));
  troll(addAttribute("intelligence")(3));
  troll(addAbility(attack()));
  return troll;
};