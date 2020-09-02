/* eslint-disable no-undef */
import { characterCreate, addAttribute } from './../src/character';

describe("character creation", ()=>{
  test("should be able to create a character", ()=>{
    const newCharacter = characterCreate("Sudo");
    expect(newCharacter().name).toBe("Sudo");
  });

  test("should be able to add attributes to a character", ()=>{
    const newCharacter = characterCreate("Sudo");
    newCharacter(addAttribute("strength")(10));
    expect(newCharacter().strength).toBe(10);
  });

  test("should be able to recycle the addAttribute function", ()=>{
    const newCharacter = characterCreate("Sudo");
    newCharacter(addAttribute("strength")(10));
    newCharacter(addAttribute("intelligence")(100000));
    expect(newCharacter().strength).toBe(10);
    expect(newCharacter().intelligence).toBe(100000);
  });

  test("should be able to increase a given attribute", ()=>{
    const newCharacter = characterCreate("Sudo");
    newCharacter(addAttribute("strength")(10));
    newCharacter(addAttribute("strength")(10));
    expect(newCharacter().strength).toBe(20);
  });

  test("should be able to decrese a given attribute", ()=>{
    const newCharacter = characterCreate("Sudo");
    newCharacter(addAttribute("strength")(10));
    newCharacter(addAttribute("strength")(-5));
    expect(newCharacter().strength).toBe(5);
  });
});