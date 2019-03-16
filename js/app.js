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

new SceneConstructor('tree2', 'Fast death!', '<img id= \'googlepic\' src=\'https://timedotcom.files.wordpress.com/2019/03/30-years.gif\' onclick="hitPointsDown(5)">Click to quickly kill the hero</img>', 'img/sunset.jpg');

new SceneConstructor('tree1', 'On this page you will have to make some very serious choices', '<img id= \'googlepic\' src=\'https://timedotcom.files.wordpress.com/2019/03/30-years.gif\' onclick="hitPointsDown(2);"><p id = "textree1">Click to slowly kill the hero</p> <button id = "buttontree1" onclick="renderPage(\'graveyard\')">Click to go to tree2</button>','img/sunset.jpg');

new SceneConstructor('start1', 'Choose Your Own Adventure', '<img onclick=\"renderPage(\'aaron1\')\" src=\'img\/warrior.jpg\' class=\'paths\'><img onclick=\"renderPage(\'lee1\')\" src=\'img\/archer.jpg\' class=\'paths\'><\/img><img onclick=\"renderPage(\'ludwin1\')\" src=\'img\/mage.jpg\' class=\'paths\'><\/img>\r\n<img onclick=\"renderPage(\'ryan1\')\" src=\'img\/rogue.jpg\' class=\'paths\'><\/img>', 'img/startingscreen.jpg');

new SceneConstructor('graveyard', 'You\'re dead.. Sorry! Not sorry!', '<button id = "buttongraveyard" onclick=\"renderPage(\'Start1\')\">\r\nStart Over\r\n<\/button>', 'img/graveyard.jpg');

new SceneConstructor('aaron1', 'Aaron\'s SAMPLE page', '<button onclick=\"renderPage(\'Start1\')\">\r\nStart Over\r\n<\/button>', 'img/slime1.jpg');

new SceneConstructor('ludwin1', 'Ludwin\'s SAMPLE page', '<button onclick=\"renderPage(\'Start1\')\">\r\nStart Over\r\n<\/button>', 'img/slime1.jpg');
new SceneConstructor('ryan1', 'Ryan\'s SAMPLE page', '<button onclick=\"renderPage(\'Start1\')\">\r\nStart Over\r\n<\/button>', 'img/slime1.jpg');
renderPage('start1');





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

/////////////////////////// DAMAGE CONTROL FUNCTIONS ///////////////////////////

function doDamage(damage) {
  // does armor exist? if so apply damage to armor before health
  if (hero.armorHP > 0) {
    return loseArmor(damage);
  }
  HB.setValue(hero.hitPoints - damage);
  hero.hitPoints = hero.hitPoints - damage;
  // if number is greather than 0 reset to 0
  if (hero.hitPoints < 0) {
    hero.hitPoints = 0;
  }
}

function loseArmor(damage) {
  // remaining damage will apply to health once armor is subtracted
  if (damage > hero.armorHP) {
    var damageRemainder = damage - hero.armorHP;
    HB.setValue(hero.hitPoints - damageRemainder);
    hero.hitPoints = hero.hitPoints - damageRemainder;
  }
  AB.setValue(hero.armorHP - damage);
  hero.armorHP = hero.armorHP - damage;
  // if number is less than 0 reset to 0
  if (hero.armorHP < 0) {
    hero.armorHP = 0;
  }
}

// for storyline purpose: if you need to zero-out the armor but you do not want to risk subtracting the HP call this function:
function zeroArmor() {
  AB.setValue(0);
  hero.armorHP = 0;
}

function healDamage(damage) {
  HB.setValue(hero.hitPoints + damage);
  hero.hitPoints = hero.hitPoints + damage;
  // if number is greater than 100 reset to 100
  if (hero.hitPoints > 100) {
    hero.hitPoints = 100;
  }
}


function gainArmor(damage) {
  AB.setValue(hero.armorHP + damage);
  hero.armorHP = hero.armorHP + damage;
  // if number is greater than 100 reset to 100
  if (hero.armorHP > 100) {
    hero.armorHP = 100;
  }
}

///////////////////////////////// ITEMS /////////////////////////////////

var itemAxe = 'Axe';
var itemBook = 'Book';
var itemCat = 'Cat';
var itemHevArmor = 'Heavy Armor';
var itemMedArmor = 'Medium Armor';
var itemShield = 'Shield';
var itemSword = 'Sword';
var itemTools = 'Tools';
var itemWood = 'Wood';
var itemPotion = 'Heal Hit Points';

function giveItem(itemName) {
  hero.items.push(itemName);
  document.getElementById('img-item-potion').setAttribute('style', 'opacity:1');
}
