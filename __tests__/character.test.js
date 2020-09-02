/* eslint-disable no-undef */
import { characterCreate } from './../src/character';
import { addAttribute, addAbility } from './../src/state';
import { attack, fireball } from './../src/abilities';
import { takeDamage, lifeDetector } from '../src/health';

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

  test("should be able to attach abilities to a character", ()=>{
    const newCharacter = characterCreate("Sudo");
    newCharacter(addAttribute("strength")(10));
    newCharacter(addAbility(attack()));
    expect(newCharacter().strength).toBe(10);
    expect(newCharacter().attack()).toBe(10);
  });

  test("should be able to attach several abilities to a character", ()=>{
    const newCharacter = characterCreate("Sudo");
    newCharacter(addAttribute("strength")(10));
    newCharacter(addAttribute("intelligence")(20));
    newCharacter(addAbility(attack()));
    newCharacter(addAbility(fireball()));
    expect(newCharacter().attack()).toBe(10);
    expect(newCharacter().fireball()).toBe(20);
  });

  test("should be able to attach hitpoints to a character", ()=>{
    const newCharacter = characterCreate("Sudo");
    newCharacter(addAttribute("toughness")(10));
    newCharacter(addAttribute("health")(newCharacter().toughness));
    expect(newCharacter().health).toBe(10);
  });

  test("should be able to deal damage to a character", ()=>{
    const newCharacter = characterCreate("Sudo");
    newCharacter(addAttribute("toughness")(10));
    newCharacter(addAttribute("health")(newCharacter().toughness));
    newCharacter(takeDamage(5));
    expect(newCharacter().health).toBe(5);
  });

  test("should be able to kill a character", ()=>{
    const newCharacter = characterCreate("Sudo");
    newCharacter(addAttribute("toughness")(10));
    newCharacter(addAttribute("health")(newCharacter().toughness));
    newCharacter(takeDamage(10));
    expect(lifeDetector(newCharacter())).toBe(false);
  });

  test('should not kill a living character', ()=>{
    const newCharacter = characterCreate("Sudo");
    newCharacter(addAttribute("toughness")(10));
    newCharacter(addAttribute("health")(newCharacter().toughness));
    newCharacter(takeDamage(9));
    expect(lifeDetector(newCharacter())).toBe(true);
  });

  test('should not be able to kill something that isnt alive', () => {
    const wall = characterCreate("wall");
    expect(lifeDetector(wall())).toBe(false);
  });
});