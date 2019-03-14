'use strict';
var bodyMain = document.getElementById('bodymain');

var book = [];
var characterName = prompt('What will your heroes name be?');

original-feature-work

// this is the hero object, we will be adding items and 

master
var hero = {
  name: characterName,
  hitPoints: 20,
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
new SceneConstructor('tree2', 'Fast death!', '<img id= \'googlepic\' src=\'https://timedotcom.files.wordpress.com/2019/03/30-years.gif\' onclick="hitPointsDown(5)">Click to quickly kill the hero</img>', 'img/bg1.jpg');

new SceneConstructor('tree1', 'On this page you will have to make some very serious choices', '<img id= \'googlepic\' src=\'https://timedotcom.files.wordpress.com/2019/03/30-years.gif\' onclick="hitPointsDown(2);">Click to slowly kill the hero</img> <button onclick="renderPage(\'tree2\')">Click to go to tree2</button>','img/bg1.jpg');
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

renderPage('tree1');



/////////////////////////////// HUD CONSTRUCTOR ///////////////////////////////

class HealthBar {
  constructor (element, initialValue = 0) {
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
      newvalue = 100;
    }

    this.value = newValue;
    this.update();
  }

  update() {
    const PERCENTAGE = this.value + '%';
    this.fillEl.style.width = PERCENTAGE;
    this.valueEl.textContent = PERCENTAGE;

  }
}

const DMG_LVL_ARRAY = [5, 10, 15, 20];
const HEAL_LVL_ARRAY = [5, 10, 15, 20];
// HBP stands for Health Bar Percentage
const HBP = new HealthBar(document.querySelector('.health-bar'), 100/*hero.hp*/);// turns the new instance into a constant.

function updateHP() {
  HBP.setValue(100 - DMG_LVL_ARRAY[2]/*hero.hp - DMG_LVL_ARRAY[2]*/);
  console.log('check current hero hp: ', /*hero.hp*/HBP);
}

// updateHP() calls the update hit points function which will take the current hero.hp and minus whatever damage is recieved from the damage level array.

// HBP.setValue(hero.hp); will create a new health bar instance and pass hero.hp i.e. objects current hitpoint value.


