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

export const getOrc = () => {
  const orc = storeState();
  orc(setState("name")("orc"));
  orc(setState("health")(50));
  orc(setState("strength")(50));
  orc(setState("toughness")(50));
  orc(setState("intelligence")(30));
  orc(addAbility(attack()));
  return orc;
};

export const getRandomEnemy = () => {
  const enemyFunctionArray = [getOrc(), getTroll()];
  const enemyIndex = Math.floor(Math.random() * (enemyFunctionArray.length));
  return enemyFunctionArray[enemyIndex];
};

//const enemy = getRandomEnemy();