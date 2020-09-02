import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { characterCreate } from './character';
import { addAttribute } from './state';

const updateCharacterDisplay = function(character) {
  $("span#character-name").text(character.name);
  $("#health-display").html(character.health);
  $("#strength-display").html(character.strength);
  $("#toughness-display").html(character.toughness);
  $("#intelligence-display").html(character.intelligence);
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
  });
});