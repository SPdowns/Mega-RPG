/* eslint-disable no-undef */
import { characterCreate } from './../src/character';

describe("character creation", ()=>{
  test("should be able to create a character", ()=>{
    const newCharacter = characterCreate("Sudo");
    expect(newCharacter().name).toBe("Sudo");
  });
});