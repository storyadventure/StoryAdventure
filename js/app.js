'use strict';
var bodyMain = document.getElementById('bodymain');

var book = [];
var characterName = prompt('What will your heroes name be?');

// this is the hero object, we will be adding items and 
var hero = {
  name: characterName,
  hitPoints: 20,
  items: [],
  scenesVisited: [],
};

// This constructor should be a good starting point for 'scenes' within this story
// Next add for the constructor is for a background image
function SceneConstructor(sceneNumber, text, html) {
  this.sceneNumber = sceneNumber;
  this.text = text;
  this.html = html;
  book.push(this);
}

new SceneConstructor('tree1', 'On this page you will have to make some very serious choices', '<img id= \'googlepic\' src=\'https://timedotcom.files.wordpress.com/2019/03/30-years.gif\' onclick="hitPointsDown(2)">Click to slowly kill the hero</img>');
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
  for (var i = 0; i < book.length; i++) {
    if (book[i].sceneNumber === sceneToRender){
      var pageText = document.createElement('section');
      pageText.textContent = book[i].text;
      bodyMain.appendChild(pageText);
      var pageHtml = document.createElement('div');
      pageHtml.innerHTML = book[i].html;
      bodyMain.appendChild(pageHtml);
      hero.scenesVisited.push(book[i].sceneNumber);
    }
  }
}

renderPage('tree1');

