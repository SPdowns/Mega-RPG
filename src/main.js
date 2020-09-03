import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { characterCreate } from './character';
import { addAttribute } from './state';
import { getRandomEnemy } from './enemies';
import { takeDamage, lifeDetector } from './health';

const updateCharacterDisplay = function(character) {
  $("#character-name").html(character.name);
  $("#health-display").html(character.health);
  $("#strength-display").html(character.strength);
  $("#toughness-display").html(character.toughness);
  $("#intelligence-display").html(character.intelligence);
};

const updateEnemyDisplay = function(enemy) {
  $("#enemy-name").html(enemy.name);
  $("#enemy-health-display").html(enemy.health);
  $("#enemy-strength-display").html(enemy.strength);
  $("#enemy-toughness-display").html(enemy.toughness);
  $("#enemy-intelligence-display").html(enemy.intelligence);
};

const enemyTurn = function(character, enemy) {
  const damageDealt = enemy().attack();
  character(takeDamage(damageDealt));
  $('#enemy-turn-output').html(`<p>${enemy().name} did ${damageDealt} to you!</p>`);
  if (!lifeDetector(character())) {
    alert("YOU LOSE!");
    $("#character-creation").toggle();
    $("#battle-display").toggle();
  }
};

const startBattle = function(character) {
  const enemy = getRandomEnemy();
  updateCharacterDisplay(character);
  updateEnemyDisplay(enemy());
  $('#attack-button').off();
  $('#attack-button').click(function(event) {
    event.preventDefault();
    enemy(takeDamage(character().attack()));
    enemyTurn(character, enemy);
    if (!lifeDetector(enemy())) {
      startBattle(character);
    }
  });
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    const name = $("input#input-name").val();
    const strength = parseInt($("input#input-strength").val());
    const toughness = parseInt($("input#input-toughness").val());
    const intelligence = parseInt($("input#input-intelligence").val());

    const character = characterCreate(name);
    character(addAttribute("strength")(strength));
    character(addAttribute("toughness")(toughness));
    character(addAttribute("intelligence")(intelligence));
    character(addAttribute("health")(toughness));
  
    updateCharacterDisplay(character());
    $("#character-creation").toggle();
    $("#battle-display").toggle();
    startBattle(character);
  });
});