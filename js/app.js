'use strict';
var bodyMain = document.getElementById('bodymain');
var book = [];
var hero = {};



// This constructor should be a good starting point for 'scenes' within this story
// Next add for the constructor is for a background image
function SceneConstructor(sceneNumber, text, html, background) {
  this.sceneNumber = sceneNumber;
  this.text = text;
  this.html = html;
  this.background = background;
  book.push(this);
}

// Lee's scenes

function gainCat(){
  hero.items.push('catlove');
  hero.attackPower +=20;
  alert('The cat will join you as an ally')
}
function gainMediumArmor(){
  giveItem('mediumarmor');
  gainArmor(50);
};

function checkIfDead(scene){
  if(hero.hitPoints <= 0){
    alert('you have died');
    resetHero();
  }
  else{renderPage(scene);}
};


new SceneConstructor('lee1', 'You walk deep into the jungle. The surroundings are dark and teeming with life. As you look around you see the glint of some large animals eyes.  A large jungle cat slinks into view. You see the glint of gold from a necklace the big cat is wearing. It locks eyes with you and begins to slowly walk away. What do you do?', '<ul>\r\n<li><button onclick=\"renderPage(\'lee2\')\">Follow the leopard deeper into the jungle\r\n<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'lee3b\'), doDamage(35)\">\r\n Attack the leopard and try to take the necklace from its cold lifeless body\r\n<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'lee4\')\">\r\n  Search the area for clues\r\n<\/button><\/li>\r\n<\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee2', 'The big cat continues to walk ahead of you. Occassionally it glances back at you as if to make sure that you are following it. The forest eventually opens into a wide clearing, the sun is breaking through the dark clouds which have followed you from your homelands to this blighted land. You get closer and closer to the big cat until you can hear its soft breathing. It\'s continuing to hold eye contact with you until suddenly the jungle predator tenses and seems about to attack! What do you do?!', '<ul>\r\n<li><button onclick=\"renderPage(\'lee3a\'), doDamage(35)\">Quickly attack before the animal has a chance to prepare\r\n<\/button><\/li>\r\n\r\n<li><button onclick=\"renderPage(\'lee5\'), gainCat()\">Wait a moment to see what this dangerous adversary does\r\n<\/button><\/li>\r\n<\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee3a', 'The big cat growls and lunges at you before you can bring any weapon to bear. This apex predator could make short work of you but it isn\'t interested in a fight. It swipes you across the chest drawing blood and a grimace from you. You fall to the ground, quickly you spring back to your feet to prepare for another attack but you only see the briefest shadow of the big cat disappearing back into the forest.', '<ul> <li><button onclick=\"renderPage(\'lee5\')\"> Collect yourself mentally and continue on your journey into the clearning.\r\n<\/button>\r\n<\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee3b', 'The big cat growls and lunges at you before you can bring any weapon to bear. This apex predator is ready for a fight. It swipes you across the chest drawing blood and a grimace from you. You fall to the ground, quickly you spring back to your feet to prepare for another attack.', '<ul><li><button onclick=\"renderPage(\'lee6\')\"> Fight the big cat.\r\n<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee3c', 'You have survived your fight with the cat, you are beaten and bruised but alive. Its time to continue this adventure.', '<ul><li><button onclick=\"renderPage(\'lee9\')\"> Move on from the scene of carnage.\r\n<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee4', 'You look around the area and don\'t see anything obviously interesting. However you spend enough time looking around that the sun noticeably lowers. You feel a little drowsy and decide that a well rested hero is a wise hero and you begin to make camp. As you pull your bedroll closed around you, you hear strange music lulling you to sleep.', '<ul><li><button onclick=\"renderPage(\'lee7\')\">Catch your well deserved rest<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee5','You and your allies square up against what looks like an enormous human man. He is in everyway a scaled up version of a normal human. You are struck by a strange thought in the moments before the fight and you wonder if a small animal has ever taken refuge inside of this giants nostril. You are so distracted by this thought that you almost forget to be afraid. ','<ul> <li><button onclick=\"battle(hero, leeGiant), renderPage(\'lee5a\')\ "> Find out if you survive the fight!\r\n<\/button>\r\n<\/li><\/ul>\r\n','img/forestbg.jpg');

new SceneConstructor('lee5a','You loot the giants corpse and find a set of armor which will help you on your journey.','<ul> <li><button onclick=\"gainMediumArmor(),renderPage(\'lee9\')\"> Don the armor and continue towards the sound of rushing water.\r\n<\/button>\r\n<\/li><\/ul>','img/forestbg.jpg');

new SceneConstructor('lee6', 'You have chosen to fight a wild animal! You are a crazy person but you lunge back and forth with this mighty beast. The game of life and death has begun! As you battle back and forth you feel impending terror! You aren\'t sure if you will beat this animal.', '<ul><li><button onclick=\"renderPage(\'lee3c\'), battle(hero,leeJungleCat)\">See if you survive!<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee7', 'You wake slowly, the weight of sleep heavy on your eyelids and immediately realize you are bound! You hear the high pitched giggles of fairyfolk, you have become the victim of one of their pranks. \"If you want to get free you must tell us the secret to riddles three\" they sing in chorus.  \"Wait no we did that last time and it wasn\'t even that much fun, lets ask them one instead.\" \"Okay one riddle, and you better get it right or we are leaving you here to die\" \"I babble, but never speak. I run, but never walk. I have a bed, but never sleep. What am I?\"', '<ul>\r\n<li><button onclick=\"renderPage(\'lee8\')\">\"a river\"<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'leeDead\')\">\"a house\"<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'leeDead\')\">\"a person\"<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'leeDead\')\">\"a cat\"<\/button><\/li>\r\n<\/ul>', 'img/forestbg.jpg');

new SceneConstructor('leeDead', 'You have died.\r\n\r\nYou body is eaten by progressively smaller creatures. The first bite that\'s taken from your flesh is by a large jungle cat. Your final return back to nature is sheparded through the short simple intestines of a common maggot. You are one with the earth, you know no peace: Only silence at long last.', '<ul><li><button onclick=\"resetHero()\">Try again<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee8', 'You have answered the fairys riddle correctly!\r\n\r\n\"Aw this one got it right\" one fairy bemoaned to the others. \"I guess we have to let it go\". \"What a shame Belethazud was so hungry, I guess Bele might still find this little adventurer snack later\".\r\n\r\nYou are shaken but alive, you continue your journey heading towards the sound of fast rushing water.', '<ul><li><button onclick=\"renderPage(\'lee9\')\">Follow the sound of water<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee9', 'A coursing waterfall! As you leave the last identifiable part of the woods you see a large river spilling over the edge of a sheer cliff face. The sound is almost deafening and you are totally absorbed in the experience of seeing this mighty body of water rushing past you, over the edge of this ridgeline and then crashing into the mist below. \r\n\r\nYou have no idea how you will get down, but there is no other way since this ridge extends as far as you can see in either direction. If you had a boat you can at least try to ride down the waterfall but without a boat you will be jumping and hoping for the best.', '<ul>\r\n<li><button onclick=\"doDamage(80), checkIfDead(\'lee10\') \">Jump for it!', 'img/waterfallbg.jpg');

new SceneConstructor('lee10','You plunge into the water with a violent slam against your whole body. Your clothing and armor blunt some of the impact but you are in a great deal of pain. Spluttering and nearly drowning you finally find the surface of the water and gasp for air. You doggy paddle to the shore and painfully pull yourself up. As you survey the waterfall now that you are at the bottom of it you take stock of how you feel. Your body, clothing, and mood absolutely ruined, the mist from the falls freezing you to the bone, a path leads away from the waterfall and towards a small cottage. You hope the owner of that cottage is friendly because you feel like you are on your last leg.','<ul> <li><button onclick=\"renderPage(\'lee11\')\"> the cottage\r\n<\/button>\r\n<\/li><\/ul>', 'img/waterfallbg.jpg');

new SceneConstructor('lee11','You walk closer to the cottage, it\'s a small place that looks like everything will be inside a single largish room. As you approach the door you look around and admire the clearing the cottage sits in. Even through the pain wracking your body you can appreciate the tidyness of the garden and the overall kempt nature of the place you are standing outside. You raise your hand and knock upon the door. You wait a respectful time and feel your strength starting to fade, you will only be able to make another one more attempt at this. Do you','<ul> <li><button onclick=\"renderPage(\'lee12\')\"> knock again\r\n<\/button>\r\n<\/li>\r\n  <li><button onclick=\"renderPage(\'lee13\')\"> break in through a window\r\n<\/button>\r\n<\/li>\r\n  \r\n<\/ul>\r\n','img/cottagebg.jpg');

new SceneConstructor('lee12','You knock piteously upon the cottage door croaking out a pathetic \"Is someone home?\" You hear movement from the inside, a shuffling of cloth, and finally the bolt on the door slides open and you are greeted by a friendly older woman who starts in a cheery voice \"Oh hello there, what brings you to my..... oh you poor thing I can see you\'ve had a rough go of it, did you actually fight the giant? Kids these days, don\'t you know there are easier ways to make it in the world? Come in come in I\'ll get you right as rain in no time.\"\r\n','<ul> <li><button onclick=\"renderPage(\'lee12a\')\"> Enter the cabin\r\n<\/button>\r\n<\/li>  \r\n<\/ul>','img/cottagebg.jpg');

new SceneConstructor('lee12a','The healer anoints you with herbs and tinictures, your sore body starting to feel first like truly hammered shit. Eventually as time goes by you reach the level of lightly hammered shit and the healer tells you that it is time for you to go back out into the world. You gather your things and leave the cottage.','<ul> <li><button onclick=\"renderPage(\'lee14\'), healDamage(80)\"> Venture forth\r\n<\/button>\r\n<\/li>  \r\n<\/ul>\r\n','img/cottagebg.jpg');

new SceneConstructor('lee13','You crash in through a window and lock eyes with an old woman who has dangerous magics circling around her. \"INTRUDER!\" She bellows in an other worldly voice \"YOU SHALL REGRET THIS TRESPASS\" The dark old magics carry your battered body out the door and dump you outside. Your body feels even worse than it did before if that is even possible. ','<ul> <li><button onclick=\"renderPage(\'lee14\')\"> Cry in terror\r\n<\/button>\r\n<\/li>  \r\n<\/ul>\r\n','img/cottagebg.jpg');

new SceneConstructor('lee14','The bright sunlight hurts your eyes after the time you spent in the dark cottage. You step away from the cottage and you see three paths ahead of you. A path down through a valley, a rocky path through the mountains, a dangerous looking swamp.','<ul> <li><button onclick=\"renderPage(\'lee15\')\"> Valley\r\n<\/button>\r\n<\/li> \r\n  \r\n  <li><button onclick=\"renderPage(\'lee16\')\"> Mountain\r\n<\/button>\r\n<\/li> \r\n  \r\n  <li><button onclick=\"renderPage(\'lee17\')\"> Swamp\r\n<\/button>\r\n<\/li> \r\n<\/ul>\r\n','img/forkbg.jpg');

new SceneConstructor('start1', 'Choose Your Own Adventure', '<ul><li><img onclick=\"renderPage(\'aaron1\')\" src=\'img\/warrior.jpg\' class=\'paths\'></li> <li><img onclick=\"renderPage(\'lee1\')\" src=\'img\/archer.jpg\' class=\'paths\'></li> <li><img onclick=\"renderPage(\'ludwinmain\')\" src=\'img\/mage.jpg\' class=\'paths\'><\/img>\r\n</li> <li><img onclick=\"renderPage(\'ryan1\')\" src=\'img\/rogue.jpg\' class=\'paths\'><\/img></li></ul>', 'img/startingscreen.jpg');

new SceneConstructor('graveyard', 'You\'re dead.. Sorry! Not sorry!', '<button id = "buttongraveyard" onclick=\"renderPage(\'start1\')\">\r\nStart Over\r\n<\/button>', 'img/graveyard.jpg');

new SceneConstructor('aaron1', 'Aaron\'s SAMPLE page', '<button onclick=\"renderPage(\'start1\')\">\r\nStart Over\r\n<\/button>', 'img/slime1.jpg');


new SceneConstructor('ludwin1', 'Ludwin\'s SAMPLE page', '<button onclick=\"renderPage(\'start1\')\">\r\nStart Over\r\n<\/button>', 'img/slime1.jpg');
new SceneConstructor('ryan1', 'Ryan\'s SAMPLE page', '<button onclick=\"renderPage(\'start1\')\">\r\nStart Over\r\n<\/button>', 'img/slime1.jpg');


//ludwin's scene constructor
new SceneConstructor ('ludwinmain','It is a nice day in the little town of Oldtown, our Hero is wandering around town trying to find clues of how to get to the forest. It seems that nobody has any idea how to get to the forest, there are a few trails that you can take, choose carefully! nobody knows what kind of dangers this trails hide. there is a reason why the townspeople do not live the safety of their town.','<ul> <li><button onclick = "renderPage(\'ludwinscene1\')">Trail1</button></li> <li><button onclick = "renderPage(\'ludwinscene2\')"> ludwinscene2 </button></li> <li><button onclick = "renderPage(\'ludwinscene3\')"> ludwinscene3 </button></li> <li><button onclick = "renderPage(\'ludwinscene4\')"> ludwinscene4 </button><li> </ul>','img/sunset.jpg');

new SceneConstructor ('ludwinscene1','Get ready for some hiking. The trail is covered in snow and you have no equipment, but some hiker a long time ago left some help. Choose carefully.','<ul> <li><button>clicks1</button></li> <li><button> clicks2 </button></li> <li><button> clicks3 </button></li> <li><button> clicks4 </button></li> </ul>','img/sunset.jpg' );

new SceneConstructor ('ludwinscene2','Hello world','<ul> <li><button>clicksa1</button></li> <li><button> clicksa2 </button></li> <li><button> clicksa3 </button></li> <li><button> clicksa4 </button></li> </ul>','img/sunset.jpg' );

new SceneConstructor ('ludwinscene3','Hello world','<ul> <li><button>clicksb1</button></li> <li><button> clicksb2 </button></li> <li><button> clicksb3 </button></li> <li><button> clicksb4 </button></li> </ul>','img/sunset.jpg' );

new SceneConstructor ('ludwinscene4','Hello world','<ul> <li><button>clicksb1</button></li> <li><button> clicksb2 </button></li> <li><button> clicksb3 </button></li> <li><button> clicksb4 </button></li> </ul>','img/sunset.jpg' );


// Uncomment the next line to see every scene in the book that is available to reference
// console.log(book);

function dead() {
  console.log('YOU ARE DEAD ', characterName);
}

// This is function called in the rendered HTML contained in the arguments on line 19
// that is why its safe to ignore the linter in this case
function hitPointsDown(increment) {
  hero.hitPoints = hero.hitPoints - increment;
  console.log(hero.hitPoints);
  if (hero.hitPoints <= 0) { dead(); }
  else { };
};


// this is the secret sauce, that makes the scene objects render
function renderPage(sceneToRender) {
  saveHero();
  while (bodyMain.firstChild) {
    bodyMain.removeChild(bodyMain.firstChild);
  }
  for (var i = 0; i < book.length; i++) {
    if (book[i].sceneNumber === sceneToRender) {
      var pageText = document.createElement('p');
      pageText.id = 'activeText';
      pageText.textContent = book[i].text;
      bodyMain.appendChild(pageText);
      var pageHtml = document.createElement('div');
      pageHtml.id = 'divId';
      pageHtml.innerHTML = book[i].html;
      bodyMain.appendChild(pageHtml);
      hero.scenesVisited.push(book[i].sceneNumber);
      hero.currentScene = book[i].sceneNumber;
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
  constructor(element, initialValue = hero.hitPoints) {
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
  constructor(element, initialValue = hero.armorHP) {
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
};


function battle(hero, enemy) {
  while ((enemy.hitPoints > 0) && (hero.hitPoints > 0)) {
    doDamage(enemy.attackPower);
    enemy.hitPoints = enemy.hitPoints - hero.attackPower;
  }

}

var dragon = {
  hitPoints: 100,
  attackPower: 20,
};

var leeJungleCat = {
  hitPoints: 50,
  attackPower: 5,
};

var leeGiant = {
  hitPoints: 100,
  attackPower: 15,
}


function saveHero() {
  localStorage.hero = JSON.stringify(hero);
};

function loadHero() {
  hero = JSON.parse(localStorage.hero);
};

function manualSaveHero() {
  localStorage.hero = JSON.stringify(hero);
};

function manualLoadHero() {
  hero = JSON.parse(localStorage.hero);
};

function resetHero(){
  hero.name = prompt('What is the new heroes name?');
  hero.hitPoints = 100;
  hero.armorHP = 0;
  hero.items = [];
  hero.scenesVisited = [];
  hero.attackPower = 10;
  HB.setValue(100);
  AB.setValue(0);
  renderPage('start1');
}


if (localStorage.hero) {
  loadHero();
  renderPage(hero.currentScene);
  alert('welcome back ' + hero.name);
  HB.setValue(hero.hitPoints);
  AB.setValue(hero.armorHP);
}
else{
  resetHero();
};

