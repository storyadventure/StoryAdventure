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


/*------------------------------------START, DEAD SCENES-----------------------------------------*/

new SceneConstructor('start1', 'Choose Your Own Adventure', '<ul><li><img onclick=\"renderPage(\'aaron1\')\" src=\'img\/warrior.jpg\' class=\'paths\'></li> <li><img onclick=\"renderPage(\'lee1\')\" src=\'img\/archer.jpg\' class=\'paths\'></li> <li><img onclick=\"renderPage(\'ludwinmain\')\" src=\'img\/mage.jpg\' class=\'paths\'><\/img>\r\n</li> <li><img onclick=\"renderPage(\'ryan1\')\" src=\'img\/rogue.jpg\' class=\'paths\'><\/img></li></ul>', 'img/startingscreen.jpg');

new SceneConstructor('graveyard', 'You\'re dead.. Sorry! Not sorry!', '<button id = "buttongraveyard" onclick=\"renderPage(\'start1\')\">\r\nStart Over\r\n<\/button>', 'img/graveyard.jpg');

/*------------------------------------------------------------------------------------------------*/



/*------------------------------------RYAN's SCENES START-----------------------------------------*/

new SceneConstructor('ryan1', 'You wake up with a huge headache.. You look around and you\'re in a cave. \"Is anyone there?\" All you hear is echo of your own voice.. You try to remember what happened but all you feel are the poundings in your head.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave2\')\">\r\n  Look around for anything useful\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave3\')\">\r\n  Explore East\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave4\')\">\r\n  Explore West\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave5\')\">\r\n  Scream For Help\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave1.jpg');



new SceneConstructor('ryancave2', 'You notice a pile of garbage and an exit leading outside at the top. You also see something shiny in the middle of the pile.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave10\'), doDamage(10)\">\r\n  Climb to the top\r\<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave6\'), giveItem(\'Sword\')\">\r\n  Retrieve shiny object\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave3\')\">\r\n  Ignore the pile\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave2.jpg');

new SceneConstructor('ryancave6', 'You find a rugged sword. It\'s old, but still useful in case of a battle.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave10\'), doDamage(10)\">\r\n  Continue to search pile\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave10\'), doDamage(10)\">\r\n  Try to climb to the top\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave3\')\">\r\n  Ignore the pile\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave2.jpg');

new SceneConstructor('ryancave10', 'You cut yourself on a debri while climbing around the pile. Maybe this isn\'t a good idea..', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave3\')\">\r\n  Explore cave\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave4\')\">\r\n  Look for an exit\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave5\')\">\r\n  Scream for help\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave2.jpg');



new SceneConstructor('ryancave3', 'You stumble upon a chamber in the cave..', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave7\')\">\r\n  Continue on\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave4\')\">\r\n  Ignore the chamber\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave7\')\">\r\n Yell for help\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave3.jpg');

new SceneConstructor('ryancave7', 'You walk into the chamber and hear nothing but your own echos.. Then you notice a skeleton in the corner with a leather vest on. ', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave4\')\">\r\n  Ignore and look for an exit\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave11\'), giveItem(\'MediumArmor\')\">\r\n  Take the vest\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave11\'), giveItem(\'MediumArmor\')\">\r\n  Tap the skeleton before taking the vest\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave3.jpg');

new SceneConstructor('ryancave11', 'You reach out slowly... expecting the skeleton to jump up. Your palms get sweaty as you grab the vest. \"ofcourse it can\'t be alive.. I was scared for nothing..\"', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave4\')\">\r\n  Look for an exit\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave4\')\">\r\n  Explore cave\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave5\')\">\r\n  scream for help\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave3.jpg');



new SceneConstructor('ryancave4', 'You continue on and feel a cold breeze.. You follow the breeze and reach an exit but there is nothing but ocean. You notice something floating in the water.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave8\'), giveItem(\'Heal Hit Points\')\">\r\n  Reach for the object\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave5\')\">\r\n  Ignore it.\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave5\')\">\r\n  Look for an exit\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave4.jpg');

new SceneConstructor('ryancave8', 'You reach down and pick up a health potion. \"This will be useful later..\" You put it in your pocket and turn around.. you hear a faint cawing in the distance. You quickly turn around to see a crow flying towards your direction.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave12\'), doDamage(15)\">\r\n  Watch the crow\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave12\'), doDamage(15)\">\r\n Throw a rock\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave5\')\">\r\n  Trun around and run\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave4.jpg');

new SceneConstructor('ryancave12', 'As the crow flies closer, you notice that something isn\'t right. It\'s eyes are hazy and the body seems decayed. It attacks you as you run back into the cave. You turn around to see that it\'s just sitting outside the cave as if it\'s waiting for you to come back out again.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave5\')\">\r\n  Go back into the cave\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave4.jpg');



new SceneConstructor('ryancave5', 'As you continue on, you hear other voices in the cave calling out. You can\'t exactly make out the words but there seems to be more than one. You cautiously walk towards the noise and find a group of people.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave9\')\">\r\n  Greet the group\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave9\')\">\r\n  Attack the group\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancaveexit2\')\">\r\n  Walk in the opposite direction\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave5.jpg');

new SceneConstructor('ryancave9', 'You run towards them and they spot you right away. The guy in the blue waves his hand, \"Wow another one! Did you wake up in the cave as well?\" I lower my guard and ask, \"Yeah, you guys as well?\" \"Yeah we all seem to have woke in this cave with no idea how we got here.. Want to look look for an exit with us?\"', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave13\')\">\r\n  Join the group\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanexitcave1\')\">\r\n  Refuse and look for an exit\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave5.jpg');

new SceneConstructor('ryancave13', 'After some talking, you realize that every one of them woke up in the cave with a headache and no memories just like you. One of them mentions something about crows but you pay no attention. You\'re just dying to get out of the cave. You and the group struggle for another 30 minutes until you decide to split to look for an exit.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancaveexit1\')\">\r\n  Continue\r\n<\/button>\r\n  <\/li><\/ul>', 'img/ryancave5.jpg');


new SceneConstructor('ryancaveexit2', 'You continue on for another 15 minutes and see a light in the distance. You walks towards it. Fresh air hits your face as soon as you approach the exit. You scream out in joy and run outside.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods2\')\">\r\n  Travel North \r\n<\/button>\r\n  <\/li>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods3\')\">\r\n  Travel South \r\n<\/button>\r\n  <\/li><\/ul>', 'img/ryancaveexit1.jpg');

new SceneConstructor('ryancaveexit1', 'You continue on for another 15 minutes and see a light in the distance. You walks towards it. Fresh air hits your face as soon as you approach the exit. You scream out in joy and run outside.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods7\')\">\r\n  Don\'t bother going back for the group.\r\n<\/button>\r\n  <\/li>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods1\'), giveItem(\'Green Book\')\">\r\n  Go back and let the others know \r\n<\/button>\r\n  <\/li><\/ul>', 'img/ryancaveexit1.jpg');

new SceneConstructor('ryanwoods1', 'You do the right thing and lead everyone outside. They all yell in joy and one of them comes up to you. \"We found this while we were in the cave, I would like you to have it!\" It\'s an old green book with a picture of a crow. \"Uh.. thanks.. \" You\'re not sure what this is but take it anyway. The group splits from here and goes their own way', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods2\')\">\r\n  Travel South\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods3\')\">\r\n  Travel North\r\n<\/button>\r\n  <\/li><\/ul>', 'img/ryanwoods1.jpg');



new SceneConstructor('ryanwoods2', 'You hear birds chirping as you travel down the trail. You feel hungry and tired.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods4\')\">\r\n  Continue on\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods5\')\">\r\n  Take a rest\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods4\')\">\r\n  ryanwoods4\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods2.jpg');



new SceneConstructor('ryanwoods4', 'You stumble across the rough trail and hear a faint cawing in the back. You continue on faster hoping to make it out of the woods before dark. You find some berries on the way. You are exhuasted.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods8\'), healDamage(30)\">\r\n  Eat the berries and continue\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods8\')\">\r\n  Don\'t eat the berries and continue\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods9\'), doDamage(15)\">\r\n  Take a break\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods2.jpg');

new SceneConstructor('ryanwoods8', 'You start to hear cawing in the back. As if it\'s following you.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods12\')\">\r\n  Ignore it and continue\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods13\'), doDamage(20)\">\r\n  Turn around to investigate\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods2.jpg');

new SceneConstructor('ryanwoods12', 'You hear a faint screaming in the back and more cawing. You don\'t care to go back and start to run', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoodsexit1\')\">\r\n  RUN! \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods2.jpg');



new SceneConstructor('ryanwoods5', 'You wake up to the sounds of wings flapping and realized you\'ve fallen asleep. You see fog in the distance. The flapping gets louder. You wonder if the birds are flying away from the fog.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods8\')\">\r\n  Start running \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods9\'), doDamage(15)\">\r\n Realax, they\'re just birds \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods4.jpg');

new SceneConstructor('ryanwoods9', 'You\'re sitting on a rock slowly gathering yourself.. The fog creeps down the woods towards your location. Suddenly you are attacked by a flock of crows. You swing at one and it hits the ground.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods12\')\">\r\n  RUN! \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods13\'), doDamage(20)\">\r\n  Swing at the brids again \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods4.jpg');

new SceneConstructor('ryanwoods13', 'The fog quickly envelopes you as birds attack you from every direction. You catch a glimpse of one of them and their eyes are white and bodies resemble decayed flesh.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoodsexit1\')\">\r\n  RUN! \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods4.jpg');



new SceneConstructor('ryanwoods3', 'You walk North and notice a broken small sign next to the trail. You can barely make out the words and it seems to say \"Turn back\". You wonder if you should turn back...', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods6\')\">\r\n  Continue on\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods2\')\">\r\n  Turn back and go South\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods3.jpg');



new SceneConstructor('ryanwoods6', 'Slight fog seems to be forming around you. It\'s getting late and too late to turn back. You focus on getting out of the woods.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods11\')\">\r\n  ryanwoods11\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods10\')\">\r\n  Pick up the pace and walk faster \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods11\'), doDamage(50)\">\r\n  Search for food as you walk \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods3.jpg');

new SceneConstructor('ryanwoods10', 'ryanwoods10', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods14\')\">\r\n  ryanwoods14\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods15\')\">\r\n  ryanwoods15\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods14\')\">\r\n  ryanwoods14\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n  <button onclick=\"renderPage(\'ryanwoods15\')\">\r\n  ryanwoods15\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods3.jpg');

new SceneConstructor('ryanwoods14', 'You run as fast as you can but ', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoodsexit1\')\">\r\n  ryanwoodsexit1\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods3.jpg');



new SceneConstructor('ryanwoods7', 'You continue your journey North. You\'re feeling a bit guilty about leaving the group behind and fails to notice a sign next to the trail. The fog gets thicker around you as you go deeper into the woods. You feel an eerie vibe but it might just be the cold air...', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods11\'), doDamage(50)\">\r\n  Continue\r\n<\/button>\r\n  <\/li>\r\n\<\/ul>', 'img/ryanwoods5.jpg');

new SceneConstructor('ryanwoods11', 'The fog gets heavy as you walk down the path.. \"CAWWWWW\" The loud caw surprises you and you look up. You can\'t see any birds but just from the amount of flapping, you can tell there\'s around 30 of them. You go into a full sprint the hill. Flapping gets louder behind you as you run. You trip on a rock while running and hit your head on a tree. You\'re a bit dazed and there\'s no way you can out run the birds...', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods15\')\">\r\n  Hide in a bush \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods14\')\">\r\n  Keep Running \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods5.jpg');

new SceneConstructor('ryanwoods15', 'You find a nearby bush to hide. You hear the flapping and cawing in the skies and they seem to have flown past you. You sigh with relif. You wait in the bush until they are all gone. ', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoodsexit1\')\">\r\n Run out of the woods! \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods5.jpg');



new SceneConstructor('ryanwoodsexit1', 'You run until you can\'t feel your legs anymore. You seem to have put some distance between you and the fog. You sigh with relief. You walk along the path and notice a white building to your left..', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoodsexit2\')\">\r\n  Keep walking \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanchurch1\')\">\r\n  Take shelter in the white building \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoodsexit1.jpg');

new SceneConstructor('ryanchurch1', 'ryanchurch1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoodsexit2\')\">\r\n  ryanwoodsexit2\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanchurch1.jpg');

new SceneConstructor('ryanwoodsexit2', 'ryanwoodsexit2', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanfog1\')\">\r\n  ryanfog1\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoodsexit1.jpg');

new SceneConstructor('ryanfog1', 'ryanfog1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanvillagepath1\')\">\r\n  ryanvillagepath1\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanfog1.jpg');

new SceneConstructor('ryanvillagepath1', 'ryanvillagepath1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanleftvillage1\')\">\r\n  ryanleftvillage1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanrightvillage2\')\">\r\n  ryanrightvillage2\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanvillagepath1.jpg');





new SceneConstructor('ryanleftvillage1', 'ryanleftvillage1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanleftvillage2\')\">\r\n  ryanleftvillage2\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanleftvillage3\')\">\r\n  ryanleftvillage3\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanleftvillage1.jpg');

new SceneConstructor('ryanleftvillage2', 'ryanleftvillage2', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanleftvillage4\')\">\r\n  ryanleftvillage4\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanleftvillage3\')\">\r\n  ryanleftvillage3\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanleftvillage1.jpg');

new SceneConstructor('ryanleftvillage3', 'ryanleftvillage3', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanleftvillage4\')\">\r\n  ryanleftvillage4\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanleftvillage4\')\">\r\n  ryanleftvillage4\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanleftvillage1.jpg');

new SceneConstructor('ryanleftvillage4', 'ryanleftvillage4', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancrows1\')\">\r\n  ryancrows1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanvillageexit\')\">\r\n  ryanvillageexit\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanleftvillage1.jpg');



new SceneConstructor('ryanrightvillage1', 'ryanrightvillage1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanrightvillage2\')\">\r\n  ryanrightvillage2\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanrightvillage3\')\">\r\n  ryanrightvillage3\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanrightvillage1.jpg');

new SceneConstructor('ryanrightvillage2', 'ryanrightvillage2', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanrightvillage4\')\">\r\n  ryanrightvillage4\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanrightvillage4\')\">\r\n  ryanrightvillage4\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanrightvillage1.jpg');

new SceneConstructor('ryanrightvillage3', 'ryanrightvillage3', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanrightvillage2\')\">\r\n  ryanrightvillage2\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanrightvillage4\')\">\r\n  ryanrightvillage4\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanrightvillage1.jpg');

new SceneConstructor('ryanrightvillage4', 'ryanrightvillage4', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancrows1\')\">\r\n  ryancrows1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanvillageexit\')\">\r\n  ryanvillageexit\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanrightvillage1.jpg');



new SceneConstructor('ryanvillageexit', 'ryanvillageexit', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanvillagedeath2\')\">\r\n  ryanvillagedeath2\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanvillageexit.jpg');

new SceneConstructor('ryanvillagedeath2', 'ryanvillagedeath2', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancrows2\')\">\r\n  ryancrows2\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanvillagedeath1.jpg');

new SceneConstructor('ryancrows2', 'ryancrows2', '', 'img/ryancrows2.jpg');

new SceneConstructor('ryancrows1', 'ryancrows1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanvillagedeath1\')\">\r\n  ryanvillagedeath1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanvillagedeath1\')\">\r\n  ryanvillagedeath1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanvillagedeath2\')\">\r\n  ryanvillagedeath2\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancrows1.jpg');

new SceneConstructor('ryanvillagedeath1', 'ryanvillagedeath1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanroad1\')\">\r\n  ryanroad1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanboat1\')\">\r\n  ryanboat1\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanvillagedeath1.jpg');

new SceneConstructor('ryancrows3', 'ryancrows3', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanroad1\')\">\r\n  ryanroad1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanboat1\')\">\r\n  ryanboat1\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancrows2.jpg');



new SceneConstructor('ryanboat1', 'ryanboat1', '', 'img/ryanboat1.jpg');

new SceneConstructor('ryanroad1', 'ryanroad1', '', 'img/ryanroad1.jpg');


/*------------------------------------RYAN's SCENES END-----------------------------------------*/


/*------------------------------------RYAN's EXTENDED SCENES START-----------------------------------------*/


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



new SceneConstructor('lee1', 'You walk deep into the jungle. The surroundings are dark and teeming with life. As you look around you see the glint of some large animals eyes.  A large jungle cat slinks into view. You see the glint of gold from a necklace the big cat is wearing. It locks eyes with you and begins to slowly walk away. What do you do?', '<ul>\r\n<li><button onclick=\"renderPage(\'lee2\')\">Follow the leopard deeper into the jungle\r\n<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'lee3b\'), doDamage(35)\">\r\n Attack the leopard and try to take the necklace from its cold lifeless body\r\n<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'lee4\')\">\r\n  Search the area for clues\r\n<\/button><\/li>\r\n<\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee2', 'The big cat continues to walk ahead of you. Occassionally it glances back at you as if to make sure that you are following it. The forest eventually opens into a wide clearing, the sun is breaking through the dark clouds which have followed you from your homelands to this blighted land. You get closer and closer to the big cat until you can hear its soft breathing. It\'s continuing to hold eye contact with you until suddenly the jungle predator tenses and seems about to attack! What do you do?!', '<ul>\r\n<li><button onclick=\"renderPage(\'lee3a\'), doDamage(35)\">Quickly attack before the animal has a chance to prepare\r\n<\/button><\/li>\r\n\r\n<li><button onclick=\"renderPage(\'lee5\'), giveItem(\'catlove\')\">Wait a moment to see what this dangerous adversary does\r\n<\/button><\/li>\r\n<\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee3a', 'The big cat growls and lunges at you before you can bring any weapon to bear. This apex predator could make short work of you but it isn\'t interested in a fight. It swipes you across the chest drawing blood and a grimace from you. You fall to the ground, quickly you spring back to your feet to prepare for another attack but you only see the briefest shadow of the big cat disappearing back into the forest.', '<ul> <li><button onclick=\"renderPage(\'lee5\')\"> Collect yourself mentally and continue on your journey into the clearning.\r\n<\/button>\r\n<\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee3b', 'The big cat growls and lunges at you before you can bring any weapon to bear. This apex predator is ready for a fight. It swipes you across the chest drawing blood and a grimace from you. You fall to the ground, quickly you spring back to your feet to prepare for another attack.', '<ul><li><button onclick=\"renderPage(\'lee6\')\"> Fight the big cat.\r\n<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee4', 'You look around the area and don\'t see anything obviously interesting. However you spend enough time looking around that the sun noticeably lowers. You feel a little drowsy and decide that a well rested hero is a wise here and you begin to make camp. As you pull your bedroll closed around you, you hear strange music lulling you to sleep.', '<ul><li><button onclick=\"renderPage(\'lee7\')\">Catch your well deserved rest<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee6', 'You have chosen to fight a wild animal! You are a crazy person but you lunge back and forth with this mighty beast. The game of life and death has begun! As you battle back and forth you feel impending terror! You aren\'t sure if you will beat this animal.', '<ul><li><button onclick=\"renderPage(\'lee9\'), battle(hero,leeJungleCat)\">See if you survive!<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee7', 'You wake slowly, the weight of sleep heavy on your eyelids and immediately realize you are bound! You hear the high pitched giggles of fairyfolk, you have become the victim of one of their pranks. \"If you want to get free you must tell us the secret to riddles three\" they sing in chorus.  \"Wait no we did that last time and it wasn\'t even that much fun, lets ask them one instead.\" \"Okay one riddle, and you better get it right or we are leaving you here to die\" \"I babble, but never speak. I run, but never walk. I have a bed, but never sleep. What am I?\"', '<ul>\r\n<li><button onclick=\"renderPage(\'lee8\')\">\"a river\"<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'leeDead\')\">\"a house\"<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'leeDead\')\">\"a person\"<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'leeDead\')\">\"a cat\"<\/button><\/li>\r\n<\/ul>', 'img/forestbg.jpg');

new SceneConstructor('leeDead', 'You have died.\r\n\r\nYou body is eaten by progressively smaller creatures. The first bite that\'s taken from your flesh is by a large jungle cat. Your final return back to nature is sheparded through the short simple intestive of a common maggot. You are one with the earth, you know no peace: Only silence at long last.', '<ul><li><button onclick=\"renderPage(\'start1\')\">Try again<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee8', 'You have answered the fairys riddle correctly!\r\n\r\n\"Aw this one got it right\" one fairy bemoaned to the others. \"I guess we have to let it go\". \"What a shame Belethazud was so hungry, I guess Bele might still find this little adventurer snack later\".\r\n\r\nYou are shaken but alive, you continue your journey heading towards the sound of fast rushing water.', '<ul><li><button onclick=\"renderPage(\'lee9\')\">Follow the sound of water<\/button><\/li><\/ul>', 'img/forestbg.jpg');



new SceneConstructor('lee9', 'A coursing waterfall! As you leave the last identifiable part of the woods you see a large river spilling over the edge of a sheer cliff face. The sound is almost deafening and you are totally absorbed in the experience of seeing this mighty body of water rushing past you, over the edge of this ridgeline and then crashing into the mist below. \r\n\r\nYou have no idea how you will get down, but there is no other way since this ridge extends as far as you can see in either direction. If you had a boat you can at least try to ride down the waterfall but without a boat you will be jumping and hoping for the best.', '<ul>\r\n<li><button onclick=\"renderPage(\'lee10\'), doDamage(100)\">Jump for it!<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'lee10\'), doDamage(50)\">Ride your boat down<\/button><\/li>\r\n<\/ul>', 'img/waterfallbg.jpg');


new SceneConstructor('aaron1', 'Aaron\'s SAMPLE page', '<button onclick=\"renderPage(\'start1\')\">\r\nStart Over\r\n<\/button>', 'img/slime1.jpg');


new SceneConstructor('ludwin1', 'Ludwin\'s SAMPLE page', '<button onclick=\"renderPage(\'start1\')\">\r\nStart Over\r\n<\/button>', 'img/slime1.jpg');


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