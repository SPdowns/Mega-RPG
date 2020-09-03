/* eslint-disable no-undef */
import { getTroll } from './../src/enemies';
import { takeDamage } from './../src/health';

describe("enemies", ()=>{
  test("should be able to create a troll", ()=>{
    const newEnemy = getTroll();
    expect(newEnemy().name).toBe("troll");
    expect(newEnemy().strength).toBe(100);
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
});