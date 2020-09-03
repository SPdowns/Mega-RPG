/* eslint-disable no-console */
/* eslint-disable no-undef */
import { getTroll, getRandomEnemy } from './../src/enemies';
import { takeDamage, lifeDetector, healDamage } from './../src/health';

describe("enemies", ()=>{
  test("should be able to create a troll", ()=>{
    const newEnemy = getTroll();
    expect(newEnemy().name).toBe("troll");
    expect(newEnemy().strength).toBe(100);
    expect(newEnemy().health).toBe(100);
  });

  test("troll should be able to attack", ()=>{
    const newEnemy = getTroll();
    expect(newEnemy().attack()).toBe(100);
  });

  test("should be able to take damage", ()=>{
    const newEnemy = getTroll();
    newEnemy(takeDamage(50));
    expect(newEnemy().health).toBe(50);
  });

  test("enemy should be able to die", ()=>{
    const newEnemy = getTroll();
    newEnemy(takeDamage(100));
    expect(lifeDetector(newEnemy())).toBe(false);
  });

  test("enemy should be able to heal", ()=>{
    const newEnemy2 = getTroll();
    newEnemy2(takeDamage(99));
    newEnemy2(healDamage(49));
    expect(newEnemy2().health).toBe(50);
  });

  test("should be able to get a random enemy", ()=>{
    const randomEnemy = getRandomEnemy();
    expect(randomEnemy().name).toBeDefined();
    expect(randomEnemy().name.match(/[a-z]/i)).not.toBeNull();
  });
});