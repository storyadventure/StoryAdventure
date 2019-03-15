'use strict';
var bodyMain = document.getElementById('bodymain');

var book = [];
var characterName = prompt('What will your heroes name be?');

// this is the hero object, we will be adding items and

var hero = {
  name: characterName,
  hitPoints: 100,
  armorHP: 0,
  items: [],
  scenesVisited: [],
};

// This constructor should be a good starting point for 'scenes' within this story
// Next add for the constructor is for a background image
function SceneConstructor(sceneNumber, text, html, background) {
  this.sceneNumber = sceneNumber;
  this.text = text;
  this.html = html;
  this.background = background;
  book.push(this);
}
new SceneConstructor('lee1', 'You walk deep into the jungle. The surroundings are dark and teeming with life. As you look around you see the glint of some large animals eyes.  A large jungle cat slinks into view. You see the glint of gold from a necklace the big cat is wearing. It locks eyes with you and begins to slowly walk away. What do you do?', '<button onclick=\"renderPage(\'lee2\')\">Follow the leopard deeper into the jungle\r\n<\/button>\r\n<button onclick=\"renderPage(\'lee3b\'), doDamage(35)\">\r\n Attack the leopard and try to take the necklace from its cold lifeless body\r\n<\/button>\r\n<button onclick=\"renderPage(\'lee4\')\">\r\n  Search the area for clues\r\n<\/button>', 'img/bg1.jpg');

new SceneConstructor('lee2', 'The big cat continues to walk ahead of you. Occassionally it glances back at you as if to make sure that you are following it. The forest eventually opens into a wide clearing, the sun is breaking through the dark clouds which have followed you from your homelands to this blighted land. You get closer and closer to the big cat until you can hear its soft breathing. It\'s continuing to hold eye contact with you until suddenly the jungle predator tenses and seems about to attack! What do you do?!','<button onclick=\"renderPage(\'lee3a\'), doDamage(35)\">Quickly attack before the animal has a chance to prepare\r\n<\/button>\r\n\r\n<button onclick=\"renderPage(\'lee5\'), giveItem(\'catlove\')\">Wait a moment to see what this dangerous adversary does\r\n<\/button>', 'img/bg1.jpg');

new SceneConstructor('lee3a','The big cat growls and lunges at you before you can bring any weapon to bear. This apex predator could make short work of you but it isn\'t interested in a fight. It swipes you across the chest drawing blood and a grimace from you. You fall to the ground, quickly you spring back to your feet to prepare for another attack but you only see the briefest shadow of the big cat disappearing back into the forest.','<button onclick=\"renderPage(\'lee5\')\"> Collect yourself mentally and continue on your journey into the clearning.\r\n<\/button>\r\n','img/bg1.jpg');

new SceneConstructor('lee3b','The big cat growls and lunges at you before you can bring any weapon to bear. This apex predator could make short work of you but it isn\'t interested in a fight. It swipes you across the chest drawing blood and a grimace from you. You fall to the ground, quickly you spring back to your feet to prepare for another attack but you only see the briefest shadow of the big cat disappearing back into the forest.','<button onclick=\"renderPage(\'lee6\')\"> Collect yourself mentally and continue on your journey into the clearning.\r\n<\/button>\r\n','img/bg1.jpg');


// Uncomment the next line to see every scene in the book that is available to reference
// console.log(book);

function dead(){
  console.log('YOU ARE DEAD ', characterName);
}

// This is function called in the rendered HTML contained in the arguments on line 19
// that is why its safe to ignore the linter in this case
function hitPointsDown(increment){
  hero.hitPoints = hero.hitPoints - increment;
  console.log(hero.hitPoints);
  if (hero.hitPoints <= 0){dead();}
  else{};
};


// this is the secret sauce, that makes the scene objects render
function renderPage(sceneToRender) {
  while (bodyMain.firstChild) {
    bodyMain.removeChild(bodyMain.firstChild);
  }
  for (var i = 0; i < book.length; i++) {
    if (book[i].sceneNumber === sceneToRender){
      var pageText = document.createElement('p');
      pageText.id = 'activeText';
      pageText.textContent = book[i].text;
      bodyMain.appendChild(pageText);
      var pageHtml = document.createElement('div');
      pageHtml.id = 'divId';
      pageHtml.innerHTML = book[i].html;
      bodyMain.appendChild(pageHtml);
      hero.scenesVisited.push(book[i].sceneNumber);
      var backgroundImage = document.createElement('img');
      backgroundImage.src = `${book[i].background}`;
      backgroundImage.id = 'backgroundimage';
      bodyMain.appendChild(backgroundImage);
    }
  }
}




/////////////////////////////// HUD CONSTRUCTOR ///////////////////////////////
/*
  const HP_DMG_ARRAY = [5, 10, 15, 20];
  const ARMOR_DMG_ARRAY = [15, 25, 35, 50]; // still thinking if I want to have 2 constants in 2 arrays or have 8 seperate constants.  Depends on how I scale the armor/health ratios and how and when they are depleted.  There may need to be some kind of check function that checks the hero object for and item, if so what item, and also what powers that item has.  those will affect whether a player can increase their hp or armor.  In those sections the math will be simple, but it will depend on whether we want to use different constants to easily identify the numbers, or if we cram them all into the 2 arrays and reference their index for math purposes.
  */
const HP_DMG_LVL_ONE = 5;
const HP_DMG_LVL_TWO = 10;
const HP_DMG_LVL_THREE = 15;
const HP_DMG_LVL_FOUR = 20;
const ARMOR_DMG_LVL_ONE = 15;
const ARMOR_DMG_LVL_TWO = 25;
const ARMOR_DMG_LVL_THREE = 35;
const ARMOR_DMG_LVL_FOUR = 50;

/* TEMP NOTE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
Explanation of what a class function is */

class HealthBar {
  constructor (element, initialValue = hero.hitPoints) {
    this.valueEl = element.querySelector('.health-bar-value');
    this.fillEl = element.querySelector('.health-bar-fill');
    this.setValue(initialValue);

    // console.log('check valueEl: ', this.valueEl);
    // console.log('check fillEl: ', this.fillEl);
  }

  setValue(newValue) {
    if (newValue < 0) {//check and/or convert to 0 if value is less than 0.
      newValue = 0;
    }
    if (newValue > 100) {//check and/or convert to 100 if value is greater than 100.
      newValue = 100;
    }

    this.value = newValue;
    this.update();
  }

  update() {
    var percentage = this.value + '%';
    this.fillEl.style.width = percentage;
    this.valueEl.textContent = percentage;

  }
}
// HB stands for Health Bar
const HB = new HealthBar(document.querySelector('.health-bar'), hero.hitPoints);// turns the new instance into a constant with an initial value of 100.
HB.setValue(hero.hitPoints); // will create a new health bar instance and pass hero.hp i.e. objects current hitpoint value.


class ArmorBar {
  constructor (element, initialValue = hero.armorHP) {
    this.valueEl = element.querySelector('.armor-bar-value');
    this.fillEl = element.querySelector('.armor-bar-fill');
    this.setValue(initialValue);

    // console.log('check valueEl: ', this.valueEl);
    // console.log('check fillEl: ', this.fillEl);
  }

  setValue(newValue) {
    if (newValue < 0) {//check and/or convert to 0 if value is less than 0.
      newValue = 0;
    }
    if (newValue > 100) {//check and/or convert to 100 if value is greater than 100.
      newValue = 100;
    }

    this.value = newValue;
    this.update();
  }

  update() {
    var percentage = this.value + '%';
    this.fillEl.style.width = percentage;
    this.valueEl.textContent = percentage;

  }
}
const AB = new ArmorBar(document.querySelector('.armor-bar'), hero.armorHP);// turns the new instance into a constant with an initial value of 0.
AB.setValue(hero.armorHP); // will create a new health bar instance and pass hero.hp i.e. objects current hitpoint value.


function doDamage(damage){
  HB.setValue(hero.hitPoints - damage);
  hero.hitPoints = hero.hitPoints - damage;
  if(hero.hitPoints < 0){hero.hitPoints = 0;}
}



function healDamage(damage){
  HB.setValue(hero.hitPoints + damage);
  hero.hitPoints = hero.hitPoints + damage;
  if(hero.hitPoints > 100){hero.hitPoints = 100;}
}

function loseArmor(value){
  AB.setValue(hero.armorHP - value);
  hero.armorHP = hero.armorHP - value;
  if(hero.armorHP < 0){hero.armorHP = 0;}
}

function gainArmor(value){
  AB.setValue(hero.armorHP + value);
  hero.armorHP = hero.armorHP + value;
  if(hero.armorHP > 100){hero.armorHP = 100;}
}

function giveItem(itemName){
  hero.items.push(itemName);
}