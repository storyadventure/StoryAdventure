'use strict';
var bodyMain = document.getElementById('bodymain');
var book = [];
var hero = {};
var allScroll = document.getElementById('scroll');

// This constructor should be a good starting point for 'scenes' within this story
// Next add for the constructor is for a background image
function SceneConstructor(sceneNumber, text, html, background) {
  this.sceneNumber = sceneNumber;
  this.text = text;
  this.html = html;
  this.background = background;
  book.push(this);
}


var pain1 = new Audio('sounds/FX_pain1.mp3');
var pain2 = new Audio('sounds/FX_pain2.mp3');
var pain3 = new Audio('sounds/FX_pain3.mp3');
var pain4 = new Audio('sounds/FX_pain4.mp3');
var death = new Audio('sounds/FX_death.mp3');
var heartbeatsound = new Audio('sounds/FX_heartbeat_breath.mp3');
var swordfightsound = new Audio('sounds/FX_swordfight.mp3');

function play(sound){
  sound.play();
};

/*------------------------------------START, DEAD SCENES-----------------------------------------*/

new SceneConstructor('graveyard', 'You\'re dead.. Sorry! Not sorry!', '<button id = "buttongraveyard" onclick=\"renderPage(\'start1\')\">\r\nStart Over\r\n<\/button>', 'img/graveyard.jpg');

/*------------------------------------------------------------------------------------------------*/



/*------------------------------------RYAN's SCENES START-----------------------------------------*/

new SceneConstructor('You wake up in a cave..', 'You wake up with a huge headache.. You look around and you\'re in a cave. \"Is anyone there?\" All you hear is echo of your own voice.. You try to remember what happened but all you feel are the poundings in your head.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You explore South..\')\">\r\n  Look around for anything useful\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You explore the cave more..\')\">\r\n  Explore East\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You reach an ocean..\')\">\r\n  Explore West\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You explore South..\')\">\r\n  Explore South\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave1.jpg');



new SceneConstructor('You explore South..', 'There\'s nothing around you but rocks. You follow the sound of water trickling thinking it would lead you to an exit. You come to a room with water reaching up to your knees. You notice a pile of garbage and an exit leading outside at the top. You also see something shiny in the middle of the pile.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You injure yourself climbing the rubble..\'), doDamage(10)\">\r\n  Climb to the top\r\<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"giveItem(swordOBJ), renderPage(\'You reach for the shiny object..\')\">\r\n  Retrieve shiny object\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You explore the cave more..\')\">\r\n  Ignore the pile\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave2.jpg');

new SceneConstructor('You reach for the shiny object..', 'You find a rugged sword. It\'s old, but still useful in case of a battle.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You injure yourself climbing the rubble..\'), doDamage(10)\">\r\n  Continue to search pile\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You injure yourself climbing the rubble..\'), doDamage(10)\">\r\n  Try to climb to the top\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You explore the cave more..\')\">\r\n  Ignore the pile\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave2.jpg');

new SceneConstructor('You injure yourself climbing the rubble..', 'You cut yourself on a debri while climbing around the pile. Maybe this isn\'t a good idea..', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You explore the cave more..\')\">\r\n  Explore cave\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You reach an ocean..\')\">\r\n  Look for an exit\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You hear others in the cave..\')\">\r\n  Scream for help\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave2.jpg');



new SceneConstructor('You explore the cave more..', 'You stumble upon a chamber in the cave..', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You explore another part of the cave..\')\">\r\n  Continue on\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You reach an ocean..\')\">\r\n  Ignore the chamber\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You explore another part of the cave..\')\">\r\n Yell for help\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave3.jpg');

new SceneConstructor('You explore another part of the cave..', 'You walk into the chamber and hear nothing but your own echos.. Then you notice a skeleton in the corner with a leather vest on. ', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You reach an ocean..\')\">\r\n  Ignore and look for an exit\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"giveItem(medArmorOBJ), renderPage(\'You take the vest!\')\">\r\n  Take the vest\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"giveItem(medArmorOBJ), renderPage(\'You take the vest!\')\">\r\n  Tap the skeleton before taking the vest\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave3.jpg');

new SceneConstructor('You take the vest!', 'You reach out slowly... expecting the skeleton to jump up. Your palms get sweaty as you grab the vest. \"ofcourse it can\'t be alive.. I was scared for nothing..\"', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You reach an ocean..\')\">\r\n  Look for an exit\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You reach an ocean..\')\">\r\n  Explore cave\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You hear others in the cave..\')\">\r\n  scream for help\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave3.jpg');



new SceneConstructor('You reach an ocean..', 'You continue on and feel a cold breeze.. You follow the breeze and reach an exit but there is nothing but ocean. You notice something floating in the water.', '<ul>\r\n<li>\r\n  <button onclick=\"giveItem(potionOBJ), renderPage(\'You reach into the water for the object..\')\">\r\n  Reach for the object\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You hear others in the cave..\')\">\r\n  Ignore it.\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You hear others in the cave..\')\">\r\n  Look for an exit\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave4.jpg');

new SceneConstructor('You reach into the water for the object..', 'You reach down and pick up a health potion. \"This will be useful later..\" You put it in your pocket and turn around.. you hear a faint cawing in the distance. You quickly turn around to see a crow flying towards your direction.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You are attacked by a crow!\'), battle(hero,ryanSingleCrow)\">\r\n  Watch the crow\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You are attacked by a crow!\'), battle(hero,ryanSingleCrow)\">\r\n Throw a rock\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You hear others in the cave..\')\">\r\n  Trun around and run\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave4.jpg');

new SceneConstructor('You are attacked by a crow!', 'As the crow flies closer, you notice that something isn\'t right. Its eyes are hazy and it seems to be flying directly towards you. You swing at it and misses and it scratches at your face. Your next swing is a direct hit and the bird hits the floor with a thud. \"Is it blind..? Why was it so angry?\" You wonder as you take a closer look. You examine the body and you turn pale from fear. The flesh looks decayed and you can see maggots crawling out of the crow\'s eyes.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You hear others in the cave..\')\">\r\n  You hear others in the cave.. \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave4.jpg');



new SceneConstructor('You hear others in the cave..', 'As you continue on, you hear other voices in the cave calling out. You can\'t exactly make out the words but there seems to be more than one. You cautiously walk towards the noise and find a group of people.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You run towards the group!\')\">\r\n  Greet the group\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You run towards the group!\')\">\r\n  Attack the group\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You avoid the group.. and walk in the opposite direction.\')\">\r\n  Walk in the opposite direction\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/Ryancave5.jpg');

new SceneConstructor('You run towards the group!', 'You run towards them and they spot you right away. The guy in the blue waves his hand, \"Wow another one! Did you wake up in the cave as well?\" I lower my guard and ask, \"Yeah, you guys as well?\" \"Yeah we all seem to have woke in this cave with no idea how we got here.. Want to look look for an exit with us?\"', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You travel with the group..\')\">\r\n  Join the group\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You see a light in the distance!\')\">\r\n  Refuse and look for an exit\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave5.jpg');

new SceneConstructor('You travel with the group..', 'After some talking, you realize that every one of them woke up in the cave with a headache and no memories just like you. One of them mentions something about crows but you pay no attention. You\'re just dying to get out of the cave. You and the group struggle for another 30 minutes until you decide to split to look for an exit.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You see a light in the distance!\')\">\r\n  Continue\r\n<\/button>\r\n  <\/li><\/ul>', 'img/ryancave5.jpg');



new SceneConstructor('You avoid the group.. and walk in the opposite direction.', 'You continue on for another 15 minutes and see a light in the distance. You walks towards it. Fresh air hits your face as soon as you approach the exit. You scream out in joy and run outside.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You travel South\')\">\r\n  Travel South \r\n<\/button>\r\n  <\/li>\r\n<li>\r\n  <button onclick=\"renderPage(\'You travel North\')\">\r\n  Travel North \r\n<\/button>\r\n  <\/li><\/ul>', 'img/ryancaveexit1.jpg');

new SceneConstructor('You see a light in the distance!', 'You continue on for another 15 minutes and see a light in the distance. You walks towards it. Fresh air hits your face as soon as you approach the exit. You scream out in joy and run outside.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You leave the group behind..\')\">\r\n  Don\'t bother going back for the group.\r\n<\/button>\r\n  <\/li>\r\n<li>\r\n  <button onclick=\"giveItem(book1OBJ), renderPage(\'You receive a green book..\')\">\r\n  Go back and let the others know \r\n<\/button>\r\n  <\/li><\/ul>', 'img/ryancaveexit1.jpg');

new SceneConstructor('You receive a green book..', 'You do the right thing and lead everyone outside. They all yell in joy and one of them comes up to you. \"We found this while we were in the cave, I would like you to have it!\" It\'s an old green book with a picture of a crow. \"Uh.. thanks.. \" You\'re not sure what this is but take it anyway. The group splits from here and goes their own way', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You travel South\')\">\r\n  Travel South\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You travel North\')\">\r\n  Travel North\r\n<\/button>\r\n  <\/li><\/ul>', 'img/ryanwoods1.jpg');



new SceneConstructor('You travel South', 'You hear birds chirping as you travel down the trail. You feel hungry and tired.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You continue down South..\')\">\r\n  Continue on\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You fell asleep!\')\">\r\n  Take a rest\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods2.jpg');



new SceneConstructor('You continue down South..', 'You stumble across the rough trail and hear a faint cawing in the back. You continue on faster hoping to make it out of the woods before dark. You find some berries on the way. You are exhuasted.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You start hearing crows..\'), healDamage(30)\">\r\n  Eat the berries and continue\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You start hearing crows..\')\">\r\n  Don\'t eat the berries and continue\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You are attacked by a murder of crows!\'), battle(hero,ryanMurderOfCrows)\">\r\n  Take a break \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods2.jpg');

new SceneConstructor('You start hearing crows..', 'You start to hear cawing in the back. As if it\'s following you.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You hear screaming.. You start to run!\')\">\r\n  Ignore it and continue\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'Herd of crows attack you!\'), battle(hero,ryanMurderofCrows)\">\r\n  Turn around to investigate\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods2.jpg');

new SceneConstructor('You hear screaming.. You start to run!', 'You hear a faint screaming in the back and more cawing. You don\'t care to go back and start to run', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You approach a church building..1\')\">\r\n  RUN! \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods2.jpg');



new SceneConstructor('You fell asleep!', 'You wake up to the sounds of wings flapping and realized you\'ve fallen asleep. You see fog in the distance. The flapping gets louder. You wonder if the birds are flying away from the fog.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You start hearing crows..\')\">\r\n  Start running away in panic \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You are attacked by a murder of crows!\'), battle(hero,ryanMurderOfCrows)\">\r\n You don\'t want to rush. Take your time \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods4.jpg');

new SceneConstructor('You are attacked by a murder of crows!', 'You\'re sitting on a rock slowly gathering yourself.. The fog creeps down the woods towards your location. Suddenly you are attacked by a flock of crows. You swing at one and it hits the ground.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You hear screaming.. You start to run!\')\">\r\n  RUN! \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'Herd of crows attack you!\'), battle(hero,ryanMurderOfCrows)\">\r\n  Swing at the brids again \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods4.jpg');

new SceneConstructor('Herd of crows attack you!', 'The fog quickly envelopes you as birds attack you from every direction. You catch a glimpse of one of them and their eyes are white and bodies resemble decayed flesh. You swing around blindly and you hear a few of them hit the ground. There\'s way too many.. You can\'t fight them all.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You approach a church building..\')\">\r\n  RUN! \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods4.jpg');



new SceneConstructor('You travel North', 'You walk North and notice a broken small sign next to the trail. You can barely make out the words and it seems to say \"Turn back\". You wonder if you should turn back...', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You continue North..\')\">\r\n  Continue on\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You travel South\')\">\r\n  Turn back and go South\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods3.jpg');



new SceneConstructor('You continue North..', 'Slight fog seems to be forming around you. It\'s getting late and too late to turn back. You focus on getting out of the woods.', '<ul>\r\n<li>\r\n<button onclick=\"renderPage(\'You walk faster.. \')\">\r\n  Pick up the pace and walk faster \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You hit your head on a tree!\'), doDamage(10)\">\r\n  Search for food as you walk \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods3.jpg');

new SceneConstructor('You walk faster.. ', 'You walk as fast as you can but the fog catches up to you. You hear wings flapping and they start to get louder.. You look up to find a flock of bird flying towards your direction. \"That can\'t be good..\"', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You battle a murder of crows!\'), battle(hero,ryanMurderOfCrows)\">\r\n  Try to outrun the birds \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You hide in a bush and eat some berries!\'), healDamage(30)\">\r\n  Find a bush to hide in \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods3.jpg');

new SceneConstructor('You battle a murder of crows!', 'You run as fast as you can but you\'re unable to out run the birds. They attack you from behind as you do your best to protect your head. You manage to knock away a few but that\'s not enough.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You run out of the woods!\')\">\r\n  RUN! \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods3.jpg');



new SceneConstructor('You leave the group behind..', 'You continue your journey North. You\'re feeling a bit guilty about leaving the group behind and fails to notice a sign next to the trail. The fog gets thicker around you as you go deeper into the woods. You feel an eerie vibe but it might just be the cold air...', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You hit your head on a tree!\'), doDamage(10)\">\r\n  Continue\r\n<\/button>\r\n  <\/li>\r\n\<\/ul>', 'img/ryanwoods5.jpg');

new SceneConstructor('You hit your head on a tree!', 'The fog gets heavy as you walk down the path.. \"CAWWWWW\" The loud caw surprises you and you look up. You can\'t see any birds but just from the amount of flapping, you can tell there\'s around 50 of them. You go into a full sprint down the hill. Flapping gets louder behind you as you run. You trip on a rock while running and hit your head(damage 10) on a tree. You\'re a bit dazed and there\'s no way you can out run the birds...', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You hide in a bush and eat some berries!\'), healDamage(30)\">\r\n  Hide in a bush \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You battle a murder of crows!\'), battle(hero,ryanMurderOfCrows)\">\r\n  Keep Running \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods5.jpg');

new SceneConstructor('You hide in a bush and eat some berries!', 'You find a nearby bush to hide. You hear the flapping and cawing in the skies and they seem to have flown past you. You sigh with relif. You wait in the bush until they are all gone. You eat some berries in the bush while you wait. You feel nourished.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You run out of the woods!\')\">\r\n Run out of the woods! \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods5.jpg');



new SceneConstructor('You run out of the woods!', 'You run until you can\'t feel your legs anymore. You seem to have put some distance between you and the fog. You sigh with relief. You walk along the path and notice a white building to your left..', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You continue down the path..\')\">\r\n  Keep walking \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'You approach a church building..\')\">\r\n  Take shelter in the white building \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoodsexit1.jpg');

new SceneConstructor('You approach a church building..', 'You approach the white building and realize it\'s a church. The door makes a loud creak as you open the door. There\'s dust everywhere and it looks like no one has entered this building for ages.. You notice a glimpse of something shining in the center of the podium. You start to hear crows outside again.', '<ul>\r\n<li>\r\n  <button onclick=\"giveItem(shieldOBJ), renderPage(\'You pick up the shield!\')\">\r\n  Approach the podium\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n  <button onclick=\"renderPage(\'You continue down the path..\')\">\r\n  Walk away \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanchurch1.jpg');

new SceneConstructor('You pick up the shield!', 'You pick up a round shield. It\'s old and dusty but very sturdy. \"This will come in handy later.. \"', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'You continue down the path..\')\">\r\n  Continue down the path\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoodsexit1.jpg');

new SceneConstructor('You continue down the path..', 'You continue down the path out of the woods.. You look back. You see the whole forest covered in fog and in the distance.. You hear another faint scream.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanvillagepath1\')\">\r\n  ryanvillagepath1\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanfog1.jpg');

new SceneConstructor('ryanvillagepath1', 'ryanvillagepath1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanleftvillage1\')\">\r\n  ryanleftvillage1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanrightvillage2\')\">\r\n  ryanrightvillage2\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanvillagepath1.jpg');




/*------------------------------------RYAN's SCENES END-----------------------------------------*/


/*------------------------------------RYAN's EXTENDED SCENES START-----------------------------------------*/



// new SceneConstructor('ryanleftvillage1', 'ryanleftvillage1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanleftvillage2\')\">\r\n  ryanleftvillage2\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanleftvillage3\')\">\r\n  ryanleftvillage3\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanleftvillage1.jpg');

// new SceneConstructor('ryanleftvillage2', 'ryanleftvillage2', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanleftvillage4\')\">\r\n  ryanleftvillage4\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanleftvillage3\')\">\r\n  ryanleftvillage3\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanleftvillage1.jpg');

// new SceneConstructor('ryanleftvillage3', 'ryanleftvillage3', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanleftvillage4\')\">\r\n  ryanleftvillage4\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanleftvillage4\')\">\r\n  ryanleftvillage4\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanleftvillage1.jpg');

// new SceneConstructor('ryanleftvillage4', 'ryanleftvillage4', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancrows1\')\">\r\n  ryancrows1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanvillageexit\')\">\r\n  ryanvillageexit\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanleftvillage1.jpg');



// new SceneConstructor('ryanrightvillage1', 'ryanrightvillage1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanrightvillage2\')\">\r\n  ryanrightvillage2\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanrightvillage3\')\">\r\n  ryanrightvillage3\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanrightvillage1.jpg');

// new SceneConstructor('ryanrightvillage2', 'ryanrightvillage2', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanrightvillage4\')\">\r\n  ryanrightvillage4\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanrightvillage4\')\">\r\n  ryanrightvillage4\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanrightvillage1.jpg');

// new SceneConstructor('ryanrightvillage3', 'ryanrightvillage3', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanrightvillage2\')\">\r\n  ryanrightvillage2\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanrightvillage4\')\">\r\n  ryanrightvillage4\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanrightvillage1.jpg');

// new SceneConstructor('ryanrightvillage4', 'ryanrightvillage4', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancrows1\')\">\r\n  ryancrows1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanvillageexit\')\">\r\n  ryanvillageexit\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanrightvillage1.jpg');



// new SceneConstructor('ryanvillageexit', 'ryanvillageexit', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanvillagedeath2\')\">\r\n  ryanvillagedeath2\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanvillageexit.jpg');

// new SceneConstructor('ryanvillagedeath2', 'ryanvillagedeath2', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancrows2\')\">\r\n  ryancrows2\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanvillagedeath.jpg');

// new SceneConstructor('ryancrows2', 'ryancrows2', '', 'img/ryancrows2.jpg');

// new SceneConstructor('ryancrows1', 'ryancrows1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanvillagedeath1\')\">\r\n  ryanvillagedeath1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanvillagedeath1\')\">\r\n  ryanvillagedeath1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanvillagedeath2\')\">\r\n  ryanvillagedeath2\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancrows1.jpg');

// new SceneConstructor('ryanvillagedeath1', 'ryanvillagedeath1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanroad1\')\">\r\n  ryanroad1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanboat1\')\">\r\n  ryanboat1\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanvillagedeath.jpg');

// new SceneConstructor('ryancrows3', 'ryancrows3', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanroad1\')\">\r\n  ryanroad1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanboat1\')\">\r\n  ryanboat1\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancrows2.jpg');



// new SceneConstructor('ryanboat1', 'ryanboat1', '', 'img/ryanboat1.jpg');

// new SceneConstructor('ryanroad1', 'ryanroad1', '', 'img/ryanroad1.jpg');





// new SceneConstructor('ryanboat2', 'ryanboat2', '', 'img/ryanboat1.jpg');

// new SceneConstructor('ryanboat3', 'ryanboat3', '', 'img/ryanboat1.jpg');



// new SceneConstructor('ryanboat3', 'ryanboat3', '', 'img/ryanboat2.jpg');

// new SceneConstructor('ryanboat3', 'ryanboat3', '', 'img/ryanboat2.jpg');

// new SceneConstructor('ryanboat3', 'ryanboat3', '', 'img/ryanboat2.jpg');

// new SceneConstructor('ryanboat3', 'ryanboat3', '', 'img/ryanboat2.jpg');



// new SceneConstructor('ryanboatcrash1', 'ryanboatcrash1', '', 'img/ryanboatcrash1.jpg');

// new SceneConstructor('ryandirtroad1', 'ryandirtroad1', '', 'img/ryandirtroad1.jpg');





// new SceneConstructor('ryanroad2', 'ryanroad2', '', 'img/ryanroad1.jpg');



// new SceneConstructor('ryanroad3', 'ryanroad3', '', 'img/ryanroad1.jpg');

// new SceneConstructor('ryanleopard1', 'ryanleopard1', '', 'img/ryanleopard1.jpg');

// new SceneConstructor('ryanleopard2', 'ryanleopard2', '', 'img/ryanleopard1.jpg');

// new SceneConstructor('ryanleopard3', 'ryanleopard3', '', 'img/ryanleopard1.jpg');

// new SceneConstructor('ryanroad6', 'ryanroad6', '', 'img/ryanroad2.jpg');



// new SceneConstructor('ryanroad4', 'ryanroad4', '', 'img/ryanroad2.jpg');

// new SceneConstructor('ryanroad5', 'ryanroad5', '', 'img/ryanroad2.jpg');

// new SceneConstructor('ryanlioness1', 'ryanlioness1', '', 'img/lioness1.jpg');

// new SceneConstructor('ryanlioness2', 'ryanlioness2', '', 'img/lioness1.jpg');



// new SceneConstructor('ryanlongroad1', 'ryanlongroad1', '', 'img/longroad1.jpg');




/*------------------------------------RYAN's EXTENDED SCENES END-----------------------------------------*/



// =======
// Lee's scenes
/*
function gainCat() {
  hero.items.push('catlove');
  hero.attackPower += 20;
  alert('The cat will join you as an ally');
}
*/
// function gainMediumArmor() {
//   giveItem(hevArmorOBJ);
//   gainArmor(50);
// };

function checkIfDead(scene) {
  if (hero.hitPoints <= 0) {
    alert('you have died');
    resetHero();
  }
  else { renderPage(scene); }
};

// Lee's scenes
//centered buttons
new SceneConstructor('You enter a forest', 'You walk deep into the jungle. The surroundings are dark and teeming with life. As you look around you see the glint of some large animals eyes.  A large jungle cat slinks into view. You see the glint of gold from a necklace the big cat is wearing. It locks eyes with you and begins to slowly walk away. What do you do?', '<ul id = "lee1button">\r\n<li><button onclick=\"renderPage(\'You follow the leopard\')\">Follow the leopard deeper into the jungle\r\n<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'You attack the leopard!\'), doDamage(35)\">\r\n Attack the leopard and try to take the necklace from its cold lifeless body\r\n<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'You decide to search this area\')\">\r\n  Search the area for clues\r\n<\/button><\/li>\r\n<\/ul>', 'img/forestbg.jpg');

//centered buttons
new SceneConstructor('You follow the leopard', 'The big cat continues to walk ahead of you. Occassionally it glances back at you as if to make sure that you are following it. The forest eventually opens into a wide clearing, the sun is breaking through the dark clouds which have followed you from your homelands to this blighted land. You get closer and closer to the big cat until you can hear its soft breathing. It\'s continuing to hold eye contact with you until suddenly the jungle predator tenses and seems about to attack! What do you do?!', '<ul id = "lee2button">\r\n<li><button onclick=\"renderPage(\'You try to get the drop on the panther\'), doDamage(35)\">Quickly attack before the animal has a chance to prepare\r\n<\/button><\/li>\r\n\r\n<li><button onclick=\"renderPage(\'You befriend a panther\'), giveItem(catOBJ)\">Wait a moment to see what this dangerous adversary does\r\n<\/button><\/li>\r\n<\/ul>', 'img/forestbg.jpg');

//centered buttons
new SceneConstructor('You try to get the drop on the panther', 'The big cat growls and lunges at you before you can bring any weapon to bear. This apex predator could make short work of you but it isn\'t interested in a fight. It swipes you across the chest drawing blood and a grimace from you. You fall to the ground, quickly you spring back to your feet to prepare for another attack but you only see the briefest shadow of the big cat disappearing back into the forest.', '<ul id = "lee3abutton"> <li><button onclick=\"renderPage(\'You befriend a panther\')\"> Collect yourself mentally and continue on your journey into the clearning.\r\n<\/button>\r\n<\/li><\/ul>', 'img/forestbg.jpg');
//centered buttons
new SceneConstructor('You attack the leopard!', 'The big cat growls and lunges at you before you can bring any weapon to bear. This apex predator is ready for a fight. It swipes you across the chest drawing blood and a grimace from you. You fall to the ground, quickly you spring back to your feet to prepare for another attack.', '<ul id = "lee3bbutton"><li><button onclick=\"renderPage(\'You fight a panther\')\"> Fight the big cat.\r\n<\/button><\/li><\/ul>', 'img/forestbg.jpg');
//centered buttons
new SceneConstructor('The panther mauls you', 'You have survived your fight with the cat, you are beaten and bruised but alive. Its time to continue this adventure.', '<ul id = "lee3cbutton"><li><button onclick=\"renderPage(\'You approach the waterfall\')\"> Move on from the scene of carnage.\r\n<\/button><\/li><\/ul>', 'img/forestbg.jpg');
//centered buttons
new SceneConstructor('You decide to search this area', 'You look around the area and don\'t see anything obviously interesting. However you spend enough time looking around that the sun noticeably lowers. You feel a little drowsy and decide that a well rested hero is a wise hero and you begin to make camp. As you pull your bedroll closed around you, you hear strange music lulling you to sleep.', '<ul id = "lee4button"><li><button onclick=\"renderPage(\'You needed a little nap\')\">Catch your well deserved rest<\/button><\/li><\/ul>', 'img/forestbg.jpg');
//centered buttons
new SceneConstructor('You befriend a panther', 'You and your allies square up against what looks like an enormous human man. He is in everyway a scaled up version of a normal human. You are struck by a strange thought in the moments before the fight and you wonder if a small animal has ever taken refuge inside of this giants nostril. You are so distracted by this thought that you almost forget to be afraid. ', '<ul id = "lee5button"> <li><button onclick=\"battle(hero, leeGiant), renderPage(\'You fight a fricken giant\')\ "> Find out if you survive the fight!\r\n<\/button>\r\n<\/li><\/ul>\r\n', 'img/forestbg.jpg');
//centered buttons
new SceneConstructor('You fight a fricken giant', 'You loot the giants corpse and find a set of armor which will help you on your journey.', '<ul id = "lee5abutton"> <li><button onclick=\"giveItem(hevArmorOBJ),renderPage(\'You approach the waterfall\')\"> Don the armor and continue towards the sound of rushing water.\r\n<\/button>\r\n<\/li><\/ul>', 'img/forestbg.jpg');
//centered buttons
new SceneConstructor('You fight a panther', 'You have chosen to fight a wild animal! You are a crazy person but you lunge back and forth with this mighty beast. The game of life and death has begun! As you battle back and forth you feel impending terror! You aren\'t sure if you will beat this animal.', '<ul id = "lee6button"><li><button onclick=\"renderPage(\'The panther mauls you\'), battle(hero,leeJungleCat)\">See if you survive!<\/button><\/li><\/ul>', 'img/forestbg.jpg');
//centered buttons
new SceneConstructor('You needed a little nap', 'You wake slowly, the weight of sleep heavy on your eyelids and immediately realize you are bound! You hear the high pitched giggles of fairyfolk, you have become the victim of one of their pranks. \"If you want to get free you must tell us the secret to riddles three\" they sing in chorus.  \"Wait no we did that last time and it wasn\'t even that much fun, lets ask them one instead.\" \"Okay one riddle, and you better get it right or we are leaving you here to die\" \"I babble, but never speak. I run, but never walk. I have a bed, but never sleep. What am I?\"', '<ul id = "lee7button">\r\n<li><button onclick=\"renderPage(\'You answered the fairies riddle!\')\">\"a river\"<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'leeDead\')\">\"a house\"<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'leeDead\')\">\"a person\"<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'leeDead\')\">\"a cat\"<\/button><\/li>\r\n<\/ul>', 'img/forestbg.jpg');
//centered buttons
new SceneConstructor('leeDead', 'You have died.\r\n\r\nYou body is eaten by progressively smaller creatures. The first bite that\'s taken from your flesh is by a large jungle cat. Your final return back to nature is sheparded through the short simple intestines of a common maggot. You are one with the earth, you know no peace: Only silence at long last.', '<ul id ="leedeadbutton"><li><button onclick=\"resetHero()\">Try again<\/button><\/li><\/ul>', 'img/forestbg.jpg');
//centered buttons
new SceneConstructor('You answered the fairies riddle!', 'You have answered the fairys riddle correctly!\r\n\r\n\"Aw this one got it right\" one fairy bemoaned to the others. \"I guess we have to let it go\". \"What a shame Belethazud was so hungry, I guess Bele might still find this little adventurer snack later\".\r\n\r\nYou are shaken but alive, you continue your journey heading towards the sound of fast rushing water.', '<ul id = "lee8button"><li><button onclick=\"renderPage(\'You approach the waterfall\')\">Follow the sound of water<\/button><\/li><\/ul>', 'img/forestbg.jpg');
//centered buttons
new SceneConstructor('You approach the waterfall', 'A coursing waterfall! As you leave the last identifiable part of the woods you see a large river spilling over the edge of a sheer cliff face. The sound is almost deafening and you are totally absorbed in the experience of seeing this mighty body of water rushing past you, over the edge of this ridgeline and then crashing into the mist below. \r\n\r\nYou have no idea how you will get down, but there is no other way since this ridge extends as far as you can see in either direction. If you had a boat you can at least try to ride down the waterfall but without a boat you will be jumping and hoping for the best.', '<ul id = "lee9button">\r\n<li><button onclick=\"doDamage(80), checkIfDead(\'You.. jumped off a waterfall? did you even see that picture?\') \">Jump for it!', 'img/waterfallbg.jpg');
//centered buttons
new SceneConstructor('You.. jumped off a waterfall? did you even see that picture?', 'You plunge into the water with a violent slam against your whole body. Your clothing and armor blunt some of the impact but you are in a great deal of pain. Spluttering and nearly drowning you finally find the surface of the water and gasp for air. You doggy paddle to the shore and painfully pull yourself up. As you survey the waterfall now that you are at the bottom of it you take stock of how you feel. Your body, clothing, and mood absolutely ruined, the mist from the falls freezing you to the bone, a path leads away from the waterfall and towards a small cottage. You hope the owner of that cottage is friendly because you feel like you are on your last leg.', '<ul id = "lee10button"> <li><button onclick=\"renderPage(\'You step towards the cottage\')\"> the cottage\r\n<\/button>\r\n<\/li><\/ul>', 'img/waterfallbg.jpg');
//centered buttons
new SceneConstructor('You step towards the cottage', 'You walk closer to the cottage, it\'s a small place that looks like everything will be inside a single largish room. As you approach the door you look around and admire the clearing the cottage sits in. Even through the pain wracking your body you can appreciate the tidyness of the garden and the overall kempt nature of the place you are standing outside. You raise your hand and knock upon the door. You wait a respectful time and feel your strength starting to fade, you will only be able to make another one more attempt at this. Do you', '<ul id = "lee11button"> <li><button onclick=\"renderPage(\'Knock knock knock\')\"> knock again\r\n<\/button>\r\n<\/li>\r\n  <li><button onclick=\"renderPage(\'lee13\')\"> break in through a window\r\n<\/button>\r\n<\/li>\r\n  \r\n<\/ul>\r\n', 'img/cottagebg.jpg');
//centered buttons
new SceneConstructor('Knock knock knock', 'You knock piteously upon the cottage door croaking out a pathetic \"Is someone home?\" You hear movement from the inside, a shuffling of cloth, and finally the bolt on the door slides open and you are greeted by a friendly older woman who starts in a cheery voice \"Oh hello there, what brings you to my..... oh you poor thing I can see you\'ve had a rough go of it, did you actually fight the giant? Kids these days, don\'t you know there are easier ways to make it in the world? Come in come in I\'ll get you right as rain in no time.\"\r\n', '<ul id ="lee12button"> <li><button onclick=\"renderPage(\'You step inside the cottage\')\"> Enter the cabin\r\n<\/button>\r\n<\/li>  \r\n<\/ul>', 'img/cottagebg.jpg');




new SceneConstructor('start1', 'Choose Your Own Adventure', '<ul id = "mainbuttons"><li><img onclick=\"renderPage(\'A Drink of Water\')\" src=\'img\/character_warrior.png\' class=\'paths\'></li> <li><img onclick=\"renderPage(\'You enter a forest\')\" src=\'img\/character_archer.png\' class=\'paths\'></li> <li><img onclick=\"renderPage(\'ludwinmain\')\" src=\'img\/character_mage.png\' class=\'paths\'><\/img>\r\n</li> <li><img onclick=\"renderPage(\'You wake up in a cave..\')\" src=\'img\/character_rogue.png\' class=\'paths\'><\/img></li></ul>', 'img/startingscreen.jpg');


//centered buttons
new SceneConstructor('You step inside the cottage', 'The healer anoints you with herbs and tinictures, your sore body starting to feel first like truly hammered shit. Eventually as time goes by you reach the level of lightly hammered shit and the healer tells you that it is time for you to go back out into the world. You gather your things and leave the cottage.', '<ul id ="lee12abutton"> <li><button onclick=\"renderPage(\'You leave the cottage, hopefully for something better\'), healDamage(80)\"> Venture forth\r\n<\/button>\r\n<\/li>  \r\n<\/ul>\r\n', 'img/cottagebg.jpg');

//centered buttons
new SceneConstructor('lee13', 'You crash in through a window and lock eyes with an old woman who has dangerous magics circling around her. \"INTRUDER!\" She bellows in an other worldly voice \"YOU SHALL REGRET THIS TRESPASS\" The dark old magics carry your battered body out the door and dump you outside. Your body feels even worse than it did before if that is even possible. ', '<ul id = "lee13button"> <li><button onclick=\"renderPage(\'You leave the cottage, hopefully for something better\')\"> Cry in terror\r\n<\/button>\r\n<\/li>  \r\n<\/ul>\r\n', 'img/cottagebg.jpg');
//centered buttons
new SceneConstructor('You leave the cottage, hopefully for something better', 'The bright sunlight hurts your eyes after the time you spent in the dark cottage. You step away from the cottage and you see three paths ahead of you. A path down through a valley, a rocky path through the mountains, a dangerous looking swamp.', '<ul id = "lee14button"> <li><button onclick=\"renderPage(\'You wake up in a cave..\')\"> cave \r\n<\/button>\r\n<\/li> \r\n  \r\n  <li><button onclick=\"renderPage(\'You wake up in a cave..\')\"> cave \r\n<\/button>\r\n<\/li> \r\n  \r\n  <li><button onclick=\"renderPage(\'You wake up in a cave..\')\"> cave \r\n<\/button>\r\n<\/li> \r\n<\/ul>\r\n', 'img/forkbg.jpg');

new SceneConstructor('ludwin1', 'Ludwin\'s SAMPLE page', '<button onclick=\"renderPage(\'start1\')\">\r\nStart Over\r\n<\/button>', 'img/slime1.jpg');


//ludwin's scene constructor

new SceneConstructor ('ludwinmain','Your plane crashes on a remote island in the pacific ocean. You walk around trying to find a sign of life but you find no one. You decide to explore close to shore and discover remnants of a small camp. Do you want to make camp or venture deep into the island to find more clues about who made this camp? ','<ul> <li><button onclick = "renderPage(\'makecamp\')">Make camp?</button></li> <li><button onclick = "renderPage(\'exploremore\')"> Explore more? </button></li> </ul>','img/island.jpg');

new SceneConstructor ('makecamp','You find helpful items to build a survival camp. You feel safe and decide to close your eyes for the night. Suddenly you hear a weird noise that you can\'t make out and it\'s getting louder and louder. You need to find out where the noise is coming from but you also don\'t want to leave the safety of your shelter.','<ul> <li><button onclick = "renderPage(\'explore\')">Explore.</button></li> <li><button onclick = "renderPage(\'waititout\')"> Wait it out.</button></li> </ul>','img/camp1.png' );

new SceneConstructor ('exploremore','You have been walking for a few hours through the dense jungle on the island and have found no more clues of more inhabitants. It is getting dark and you have not eaten for quite a while. Suddenly you run into a wild boar that is small enough that you think you can hunt it with your knife. Do you want to try to hunt it or find something easier to eat.','<ul> <li><button onclick = "renderPage(\'hunt\'), doDamage(40)"> Hunt. </button></li> <li><button onclick = "renderPage(\'forage\')"> Forage </button></li> </ul>','img/island1.jpg' );

new SceneConstructor ('explore','You have been following the noise for quite a while and it is disappearing in the distance. The sun is about to come out and there is more light. You stumble upon a little cabin and there is smoke coming out of the chimeney, but you have the feeling that something is not right. Do you want to go and check the cabin or wait to see who lives there.','<ul> <li><button onclick = "renderPage(\'checkcabin\')"> Check the cabin. </button></li> <li><button onclick = "renderPage(\'stakecabin\')" > Stake out the cabin. </button></li> </ul>','img/trailforest.jpg' );

new SceneConstructor ('waititout','The noise is getting louder and louder until it comes to a sudden stop. It\'s hard to sleep because you are on high alert, but you are very tired and eventually fall sleep. A loud roar wakes you up and you realize that is a big cat. The cat is destroying your shelter and attacks you. You are too weak to fight. ','<ul> <li><button onclick = "renderPage(\'start1\')"> Start again.</button></li> </ul>','img/ludcat.jpg' );

new SceneConstructor('checkcabin','You check the windows and see nobody inside, check the door and is open. You enter, "Hello!", no answer. Fire still going and in the table you notice a toolbox. Maybe you can fix your airplane and leave the island.','<ul> <li><button onclick = "renderPage(\'toolbox\')">Take the toolbox</button></li>','img/cabin2.jpg');

new SceneConstructor('stakecabin','You have been staking out the cabin for a while and you and haven\'t noticed any movement. Suddenly out of nowhere you get attacked by a man he pins you down to the floor. He seems very nervous about you been there. He wants your knife. You have the skills to fight back but you need help to get out of the island.', '<ul> <li><button>Fight.</button></li> <li><button>Negotiate.</button></li> </ul>','img/cabin2.jpg' );

new SceneConstructor('hunt','You try to hit the boar with a rock to no effect. The boar starts to run and you chase it. Luckily you corner the boar and it can\'t escape. You attack the boar with your knife. Though you are successfull, you got injured in the process. You need to carry the boar back to the beach and try to tend to your injuries, but you are too weak to carry it.','<ul> <li><button onclick = "renderPage(\'makeshelter\')" > Make shelter</button></li> <li><button onclick = "renderPage(\'backwithoutboar\')"> Go back to camp without the boar.</button></li> <ul>','img/wildboar2.jpg');

new SceneConstructor('forage','You find some fruits and feel relieved that you didn\'t have to hunt a boar. But is getting dark and you haven\'t find any signs of people on the island. You gather as much fruit as you can carrie and you hear a weird noise. Who is making this noise.','<ul> <li><button onclick = "renderPage(\'explore\')"> Follow the noise. </button></li> <li><button onclick = "renderPage(\'headbackshore\')"> Head back to shore. </button></li> <ul>','img/fruits.jpg');

new SceneConstructor('makeshelter','You have food and shelter and you have been tendind your injuries, but the smell of delicious grill boar has atracted an unwanted visitor. A man attacks you. He wants your food and your knife. You are afraid but you need your knife and help to get out of the island. You can fight him or you can try to negotiate with him to gain an ally.','<ul> <li><button onclick = " renderPage(\'fight\')">Fight.</button></li> <li><button>Negotiate.</button></li> </ul>','img/islandman.jpg')

new SceneConstructor('backwithoutboar','You are getting weaker and the injuries are getting worse you are about to lose conciusness. You see a siluette in the distance. It is a person and you need help, maybe he can help you.','<ul> <li><button onclick = "renderPage(\'cryforhelp\')">Cry for help.</button></li> <li><button onclick = "renderPage(\'hide\')">Hide.</button></li> </ul>','img/islandman.jpg');

new SceneConstructor('headbackshore','Back on the shore you wonder what was that noise? Is it posible that there is people in the island? You fall sleep. The light of the sun wakes you up and find the boar that you tried to hunt next to you and is eating the food you gathered. You chase it and stumble upon a cave. You explore and find a chest with tools on it.','<ul> <li><button onclick = "renderPage(\'toolbox\')"> Fix your plane. </button></li> </ul>','img/toolbox.jpg');

new SceneConstructor('hide','You are not thinking clear. He was your only way out of the island. ','<ul> <li><button onclick = "renderPage(\'start1\')">Start again</button></li> </ul>','img/enemy.jpg');

new SceneConstructor('toolbox','Now that you have a toolbox you can fix the plane and get out of the island.','<ul> <li><button onclick = "renderPage(\'start1\')"> Start </button></li> </ul>', 'img/toolbox.jpg');

new SceneConstructor('cryforhelp','You cried for help and the man has helped you. He carried you to the cabin where you wake up. He is a nice man that has been in the island for a long time. He is actually a mechanic and has agreed to help you to fix your plane. You are able to leave the island.','<ul> <button onclick = "renderPage(\'start1\')"> Start  </button></li> </ul>','img/light.jpg');

new SceneConstructor('fight','You fight him and barely survived it. You have made a strong enemy.','<ul> <li><button> button </button></li> </ul>','img/enemy1.jpg');

new SceneConstructor('negotiate','You talk to the man and he has calmed down. You explain your situation and he is happy to help you. He takes his tool box and goes with you to fix your plane.','<ul> <li><button>button</button></li> </ul>','img/sunrise.jpg')



/////////////////////// AARONS SCENES

// Quest: A Drink of Water
new SceneConstructor ('A Drink of Water', 'One day while on a journey, you stopped at a river to get a drink of water.  A wizard approaches you and asks for a favor:', '<ul>\r\n  <li><button onclick=\"renderPage(\'start1\');\">Sorry, I\'m busy.<\/button><\/li><li><button onclick=\"renderPage(\'Time Is Not Free\');\">My time isn\'t free.<\/button><\/li><li><button onclick=\"renderPage(\'Charity Work\');\">Always willing to help the elderly.<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_river.jpeg');

new SceneConstructor ('Time Is Not Free', 'The Wizard offers a great reward.  In return you must travel to the Frozen Dungeon of Castle Block, and retrieve the Tome of Ancient Tome\s.  Be careful\, there are many spells and traps along the way that guard the sacred dungeon.  The Wizard wishes you luck on your journey.', '<ul>\r\n  <li><button onclick=\"renderPage(\'Proceed To Castle Block\');\">Consider it done.<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_wizard.jpg');

new SceneConstructor ('Charity Work', 'The Wizard starts telling stories of ancient times, back when the sorcerers of the olden times were the new mages on the block.  It didn\'t take long to realize the old guy would not stop rambling on about this ancient book of his, the \"Tome of Ancient Tomes\". You interrupt and suggest that you can help the wizard retrieve the lost book.  The Wizard shows you a map of a Frozen Dungeon named Castle Block.  \"Be careful\,\" the Scorcerer warns\, \"There are many spells and traps along the way that guard the sacred dungeon.\"  The Wizard wishes you luck on your journey.', '<ul>\r\n  <li><button onclick=\"renderPage(\'Proceed To Castle Block\');\">Consider it done.<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_wizard.jpg');

new SceneConstructor ('Proceed To Castle Block', 'As you approach Castle Block, you feel the engery radiate from the massive door at the front of the Frozen Castle.  The hair on the back of your neck stands up as you remember the Wizard\s warning about the obsticals inside the dungeon.', '<ul>\r\n  <li><button onclick=\"renderPage(\'The Inner Dungeon\');\">Enter Castle Block<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_dungeonoutside.jpg');

new SceneConstructor ('The Inner Dungeon', 'The halls are dark and long, they never seem to end.  So far you have managed to avoid the Scorpion Pit, the Bowling-Boulder Ball, and the Breath of Fire.  You decide to rest and notice somthing in the rubble that looks like a backpack.', '<ul>\r\n  <li><button onclick=\"giveItem(ropeOBJ); giveItem(flashlightOBJ); renderPage(\'The Crossing\');\">What\'s this? I think I\'ll have a look.<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_innerdungeon.jpg');

new SceneConstructor ('The Crossing', 'At the end of the dark dangerous corridor you enter an open room that looks like the ruins of a minecraft dungeon...What used to be a bridge is now broken from what seems to be the activation of some hidden trap.  There are pieces of body parts from previous tomb raiders below, oddly in the shape of blocks.  You think to yourself maybe that\'s why they call this Castle Block?  You use the rope you found in the backpack to swing across the trecherous gap.  Once you make it to the other side you notice there is only one way to go.  Danger creeps through your bones.', '<ul>\r\n  <li><button onclick=\"doDamage(35); play(pain2); loseItem(ropeOBJ); renderPage(\'The Spike Pit\');\">Continue Quest<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_dungeon_gap.jpg');

new SceneConstructor ('The Spike Pit', 'You misread the clues and fell into a spike pit.  Luckily you have rope to climb out.  Unfortunately in order to stop the bleeding you had to cut up your rope to make tourniquets for your arms and legs.', '<ul>\r\n  <li><button onclick=\"renderPage(\'The Puzzel Door Riddle One\');\">Continue Quest<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_trap.jpg');

new SceneConstructor ('The Puzzel Door Riddle One', 'Answer the riddles correctly to open the door:  David\'s Father has three sons: Snap, Crackle, and ______.', '<ul>\r\n  <li><button onclick=\"renderPage(\'The Puzzel Door Riddle Two\');\">David<\/button><\/li><li><button onclick=\"doDamage(10); play(pain1);\">Pop<\/button><\/li><li><button onclick=\"doDamage(10); play(pain3);\">Popcorn<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_dungeondoor.jpg');

new SceneConstructor ('The Puzzel Door Riddle Two', 'Well done! The next riddle is: What comes once in a minute, twice in a moment, and never in a thousand years?', '<ul>\r\n  <li><button onclick=\"doDamage(10); play(pain1);\">60 Light Years<\/button><\/li><li><button onclick=\"doDamage(10); play(pain3);\">Millenium<\/button><\/li><li><button onclick=\"renderPage(\'The Puzzel Door Riddle Three\');\">the letter \"m\"<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_dungeondoor.jpg');

new SceneConstructor ('The Puzzel Door Riddle Three', 'Last one: You live in a one story house made \"entierly out of red wood.\"  What color would the stairs be?', '<ul>\r\n  <li><button onclick=\"doDamage(10); play(pain2);\">Red<\/button><\/li><li><button onclick=\"doDamage(10); play(pain1);\">Wood<\/button><\/li><li><button onclick=\"renderPage(\'The Treasure Room\');\">None<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_dungeondoor.jpg');

new SceneConstructor ('The Treasure Room', 'Inside the treasure room you see a treasure chest.  Eventhough you are bleeding and tired, you came all this way to get a stupid book for a \"Great reward\" you may as well keep going.', '<ul>\r\n  <li><button onclick=\"renderPage(\'Open The Treasure\');\">Open The Treasure Chest<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_treasureroom.jpg');

new SceneConstructor ('Open The Treasure', 'As soon as you open the treasure chest, a bright light fills the room.  Trapped inside was the Warrior Angel Goddess: Athena.  You have helped her escape and in return she gives you her magical sword.', '<ul>\r\n  <li><button onclick=\"giveItem(swordOBJ);\">Take Athena\'s Sword<\/button><\/li><li><button onclick=\"giveItem(potionOBJ);\">Take Health Potion<\/button><\/li><li><button onclick=\"giveItem(book2OBJ);\">Take: Tome of Ancient Tomes<\/button><\/li><li><button onclick=\"renderPage(\'Return To The Wizard\');\">Exit Castle Block<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_presentsword.jpg');

new SceneConstructor ('Return To The Wizard', 'The Wizard is pleased you were able to return with the Tome of Ancient Tomes safely.  He offers to reward you for your troubles and says that if you go down to his Alchemy Chamber you can find a health potion on the shelf.', '<ul>\r\n  <li><button onclick=\"renderPage(\'Alchemy Chamber\');\">Go to the Alchemy Chamber<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_questvillage.jpg');

new SceneConstructor ('Alchemy Chamber', 'Grab a health potion from the wall and meet the Wizard upstairs', '<ul>\r\n  <li><button onclick=\"giveItem(potionOBJ);\">Take Health Potion<\/button><\/li><li><button onclick=\"loseItem(book2OBJ); renderPage(\'Meet The Wizard\');\">Meet with the Wizard<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_alchemychamber.jpg');

new SceneConstructor ('Meet The Wizard', 'The Wizard says, \"Thank you for returning my Tome.  Here is a token of my appreciation.\"  The Wizard conjures a brand new set of Heavy Armor and asks if you will accept his gift.', '<ul>\r\n  <li><button onclick=\"giveItem(hevArmorOBJ);\">Take Heavy Armor<\/button><\/li><li><button onclick=\"renderPage(\'You wake up in a cave..\');\">Finish Quest<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_wizard.jpg');


////////////////////////////////////

///////////////////////////////// ITEM CONSTRUCTOR ///////////////////////////////////
function ItemOBJ (name, id) {
  this.name = name;
  this.id = id;
}
var axeOBJ = new ItemOBJ('Axe', 'img-item-axe');
var book1OBJ = new ItemOBJ('Green Book', 'img-item-book1');
var book2OBJ = new ItemOBJ('Blue Book', 'img-item-book2');
var catOBJ = new ItemOBJ('Cat', 'img-item-cat');
var warriorCatOBJ = new ItemOBJ('Warrior Cat', 'img-item-warrior-cat');
var flashlightOBJ = new ItemOBJ('Flashlight', 'img-item-flashlight');
var hevArmorOBJ = new ItemOBJ('Heavy Armor', 'img-item-hev-armor');
var medArmorOBJ = new ItemOBJ('Medium Armor', 'img-item-med-armor');
var ropeOBJ = new ItemOBJ('Rope', 'img-item-rope');
var shieldOBJ = new ItemOBJ('Shield', 'img-item-shield');
var swordOBJ = new ItemOBJ('Sword', 'img-item-sword');
var toolsOBJ = new ItemOBJ('Tools', 'img-item-tools');
var woodOBJ = new ItemOBJ('Wood', 'img-item-wood');
var potionOBJ = new ItemOBJ('Health Potion', 'img-item-potion');


// Uncomment the next line to see every scene in the book that is available to reference
// console.log(book);

function giveItem(OBJ) {
  var itemOBJid = OBJ.id;
  hero.items.push(OBJ);
  document.getElementById(itemOBJid).setAttribute('style', 'opacity:1');
}
// example call giveItem(axeOBJ);

function loseItem(loseOBJ) {
  for(var i = 0; i < hero.items.length; i++) {
    if(hero.items[i].name === loseOBJ.name) {
      hero.items.splice(i, 1);
    }
  }
  document.getElementById(loseOBJ.id).setAttribute('style', 'opacity:0.3');
}

function resetHero() {
  hero.name = prompt('What is the new heroes name?');
  // show player name on display
  var displayName = document.getElementById('charName-id');
  displayName.innerHTML = hero.name;
  while (hero.items.length > 0){
    loseItem(hero.items[0]);
  }
  hero.hitPoints = 100;
  hero.armorHP = 0;
  hero.items = [];
  hero.scenesVisited = [];
  hero.attackPower = 10;
  HB.setValue(100);
  AB.setValue(0);
  renderPage('start1');
  while (allScroll.firstChild) {
    allScroll.removeChild(allScroll.firstChild);
  }
  while (hero.items.length > 0) {
    loseItem(hero.items[0]);
  }
}

// this is the secret sauce, that makes the scene objects render
function renderPage(sceneToRender) {
  if (hero.hitPoints <= 0) {
    alert('you have died');
    resetHero();
  }
  else {
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
        var pageScroll = document.getElementById('scroll')
        var sceneText1 = document.createElement('li');
        sceneText1.innerHTML = book[i].sceneNumber;
        pageScroll.appendChild(sceneText1);
      }
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
    let percentage = this.value + '%';
    this.fillEl.style.width = percentage;
    this.valueEl.textContent = percentage;

  }
}
// HB stands for Health Bar
const HB = new HealthBar(document.querySelector('.health-bar'), hero.hitPoints);// turns the new instance into a constant with an initial value of 100.
HB.setValue(hero.hitPoints); // will create a new health bar instance and pass hero.hitPoints i.e. objects current hitpoint value.


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
    let percentage = this.value + '%';
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
  var damageScroll = document.getElementById('scroll')
  var sceneDamage1 = document.createElement('li');
  sceneDamage1.innerHTML = 'enemy does ' + damage + ' damage';
  damageScroll.appendChild(sceneDamage1);
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

///////////////////////////////// ITEM CONSTRUCTOR ///////////////////////////////////
/*
function ItemOBJ (name, id) {
  this.name = name;
  this.id = id;
}
var axeOBJ = new ItemOBJ('Axe', 'img-item-axe');
var book1OBJ = new ItemOBJ('Green Book', 'img-item-book1');
var book2OBJ = new ItemOBJ('Blue Book', 'img-item-book2');
var catOBJ = new ItemOBJ('Cat', 'img-item-cat');
var warriorCatOBJ = new ItemOBJ('Warrior Cat', 'img-item-warrior-cat');
var flashlightOBJ = new ItemOBJ('Flashlight', 'img-item-flashlight');
var hevArmorOBJ = new ItemOBJ('Heavy Armor', 'img-item-hev-armor');
var medArmorOBJ = new ItemOBJ('Medium Armor', 'img-item-med-armor');
var ropeOBJ = new ItemOBJ('Rope', 'img-item-rope');
var shieldOBJ = new ItemOBJ('Shield', 'img-item-shield');
var swordOBJ = new ItemOBJ('Sword', 'img-item-sword');
var toolsOBJ = new ItemOBJ('Tools', 'img-item-tools');
var woodOBJ = new ItemOBJ('Wood', 'img-item-wood');
var potionOBJ = new ItemOBJ('Health Potion', 'img-item-potion');
*/

///////////////////////////////// ITEM FUNCTIONS /////////////////////////////////
/*
this function I am leaving in for testing purposes, but so far I haven't found a reason to actually use this function

function checkItem(itemOBJ) {
  for(var i = 0; i < hero.items.length; i++) {
    console.log('What is this?: ', i, hero.items[i].name);
    if(hero.items[i].name === itemOBJ.name) {
      return true;
    }
  }
}
*/
/*
function giveItem(OBJ) {
  var itemOBJid = OBJ.id;
  hero.items.push(OBJ);
  document.getElementById(itemOBJid).setAttribute('style', 'opacity:1');
}
// example call giveItem(axeOBJ);
*/

// function loseItem(loseOBJ) {
//   for(var i = 0; i < hero.items.length; i++) {
//     if(hero.items[i].name === loseOBJ.name) {
//       hero.items.splice(i, 1);
//     }
//   }
//   document.getElementById(loseOBJ.id).setAttribute('style', 'opacity:0.3');
// }
// example call loseItem(axeOBJ);

///////////////////// ITEM EVENT LISTENER AND CLICK FUNCTIONS /////////////////////

var potionSlot = document.getElementById('img-item-potion');
var hevArmorSlot = document.getElementById('img-item-hev-armor');
var swordSlot = document.getElementById('img-item-sword');
var shieldSlot = document.getElementById('img-item-shield');
var medArmorSlot = document.getElementById('img-item-med-armor');
var catSlot = document.getElementById('img-item-cat');
potionSlot.addEventListener('click', handlePotionClick);
hevArmorSlot.addEventListener('click', handleHevArmorClick);
medArmorSlot.addEventListener('click', handleMedArmorClick);
catSlot.addEventListener('click', handleCatClick);
swordSlot.addEventListener('click', handleSwordClick);
shieldSlot.addEventListener('click', handleShieldClick);

function handlePotionClick() {
  for(var i = 0; i < hero.items.length; i++) {
    if (hero.items[i].name === potionOBJ.name) {
      healDamage(25);
      alert('You use the potion and gain 25 health');
      loseItem(potionOBJ);
    }
  }
}

function handleHevArmorClick() {
  for(var i = 0; i < hero.items.length; i++) {
    if (hero.items[i].name === hevArmorOBJ.name) {
      gainArmor(100);
      alert('You use the heavy armor and gain 100 armor');
      loseItem(hevArmorOBJ);
    }
  }
}

function handleSwordClick() {
  for(var i = 0; i < hero.items.length; i++) {
    if (hero.items[i].name === swordOBJ.name) {
      hero.attackPower += 10;
      alert('You use the sword and gain 10 attack');
      loseItem(swordOBJ);
    }
  }
}

function handleShieldClick() {
  for(var i = 0; i < hero.items.length; i++) {
    if (hero.items[i].name === shieldOBJ.name) {
      gainArmor(25);
      alert('You use the shield and gain 25 armor');
      loseItem(shieldOBJ);
    }
  }
}

function handleMedArmorClick() {
  for(var i = 0; i < hero.items.length; i++) {
    if (hero.items[i].name === medArmorOBJ.name) {
      gainArmor(75);
      alert('You use the medium armor and gain 75 armor');
      loseItem(medArmorOBJ);
    }
  }
}

function handleCatClick() {
  for(var i = 0; i < hero.items.length; i++) {
    if (hero.items[i].name === catOBJ.name) {
      hero.attackPower += 20;
      alert('The cat will join you as an ally');
      loseItem(catOBJ);
    }
  }
}

///////////////////////////// ENEMY BATTLE FUNCTIONS /////////////////////////////


function battle(hero, enemy) {
  play(pain1);
  var enemyBattleHp = enemy.hitPoints;
  while ((enemyBattleHp > 0) && (hero.hitPoints > 0)) {
    doDamage(enemy.attackPower);
    enemyBattleHp = enemyBattleHp - hero.attackPower;
    var heroDamageScroll = document.getElementById('scroll')
    var sceneDamage2 = document.createElement('li');
    sceneDamage2.innerHTML = 'hero does ' + hero.attackPower + ' damage';
    heroDamageScroll.appendChild(sceneDamage2);
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

//////////////////////////////// LOCAL STORAGE ////////////////////////////////

var ryanSingleCrow = {
  hitPoints: 15,
  attackPower: 2,
};

var ryanMurderOfCrows = {
  hitPoints: 45,
  attackPower: 7,
};

var ryanLeopard = {
  hitPoints: 65,
  attackPower: 8,
};

var leeGiant = {
  hitPoints: 100,
  attackPower: 15,
};


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


if (localStorage.hero) {
  loadHero();
  renderPage(hero.currentScene);
  alert('welcome back ' + hero.name);
  HB.setValue(hero.hitPoints);
  AB.setValue(hero.armorHP);
}
else {
  resetHero();
};

// function scrollText() {
//   for (var i = 0; i < hero.scenesVisited.length; i++) {
//     var pageScroll = document.getElementById('scroll')
//     var sceneText1 = document.createElement('li');
//     sceneText1.textcontent = hero.scenesVisited[i];
//     pageScroll.appendChild(sceneText1);
//   }
// }

// scrollText();

