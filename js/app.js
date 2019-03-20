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

new SceneConstructor('graveyard', 'You\'re dead.. Sorry! Not sorry!', '<button id = "buttongraveyard" onclick=\"renderPage(\'start1\')\">\r\nStart Over\r\n<\/button>', 'img/graveyard.jpg');

/*------------------------------------------------------------------------------------------------*/



/*------------------------------------RYAN's SCENES START-----------------------------------------*/

new SceneConstructor('ryan1', 'You wake up with a huge headache.. You look around and you\'re in a cave. \"Is anyone there?\" All you hear is echo of your own voice.. You try to remember what happened but all you feel are the poundings in your head.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave2\')\">\r\n  Look around for anything useful\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave3\')\">\r\n  Explore East\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave4\')\">\r\n  Explore West\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave2\')\">\r\n  Explore South\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave1.jpg');



new SceneConstructor('ryancave2', 'There\'s nothing around you but rocks. You follow the sound of water trickling thinking it would lead you to an exit. You come to a room with water reaching up to your knees. You notice a pile of garbage and an exit leading outside at the top. You also see something shiny in the middle of the pile.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave10\'), doDamage(10)\">\r\n  Climb to the top\r\<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave6\'), giveItem(\'Sword\')\">\r\n  Retrieve shiny object\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave3\')\">\r\n  Ignore the pile\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave2.jpg');

new SceneConstructor('ryancave6', 'You find a rugged sword. It\'s old, but still useful in case of a battle.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave10\'), doDamage(10)\">\r\n  Continue to search pile\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave10\'), doDamage(10)\">\r\n  Try to climb to the top\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave3\')\">\r\n  Ignore the pile\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave2.jpg');

new SceneConstructor('ryancave10', 'You cut yourself on a debri while climbing around the pile. Maybe this isn\'t a good idea..', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave3\')\">\r\n  Explore cave\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave4\')\">\r\n  Look for an exit\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave5\')\">\r\n  Scream for help\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave2.jpg');



new SceneConstructor('ryancave3', 'You stumble upon a chamber in the cave..', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave7\')\">\r\n  Continue on\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave4\')\">\r\n  Ignore the chamber\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave7\')\">\r\n Yell for help\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave3.jpg');

new SceneConstructor('ryancave7', 'You walk into the chamber and hear nothing but your own echos.. Then you notice a skeleton in the corner with a leather vest on. ', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave4\')\">\r\n  Ignore and look for an exit\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave11\'), giveItem(\'MediumArmor\')\">\r\n  Take the vest\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave11\'), giveItem(\'MediumArmor\')\">\r\n  Tap the skeleton before taking the vest\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave3.jpg');

new SceneConstructor('ryancave11', 'You reach out slowly... expecting the skeleton to jump up. Your palms get sweaty as you grab the vest. \"ofcourse it can\'t be alive.. I was scared for nothing..\"', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave4\')\">\r\n  Look for an exit\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave4\')\">\r\n  Explore cave\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave5\')\">\r\n  scream for help\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave3.jpg');



new SceneConstructor('ryancave4', 'You continue on and feel a cold breeze.. You follow the breeze and reach an exit but there is nothing but ocean. You notice something floating in the water.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave8\'), giveItem(\'Heal Hit Points\')\">\r\n  Reach for the object\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave5\')\">\r\n  Ignore it.\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave5\')\">\r\n  Look for an exit\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave4.jpg');

new SceneConstructor('ryancave8', 'You reach down and pick up a health potion. \"This will be useful later..\" You put it in your pocket and turn around.. you hear a faint cawing in the distance. You quickly turn around to see a crow flying towards your direction.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave12\'), battle(hero,ryanSingleCrow)\">\r\n  Watch the crow\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave12\'), battle(hero,ryanSingleCrow)\">\r\n Throw a rock\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave5\')\">\r\n  Trun around and run\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave4.jpg');

new SceneConstructor('ryancave12', 'As the crow flies closer, you notice that something isn\'t right. Its eyes are hazy and it seems to be flying directly towards you. You swing at it and misses and it scratches at your face. Your next swing is a direct hit and the bird hits the floor with a thud. \"Is it blind..? Why was it so angry?\" You wonder as you take a closer look. You examine the body and you turn pale from fear. The flesh looks decayed and you can see maggots crawling out of the crow\'s eyes.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave5\')\">\r\n  Run back into the cave \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave4.jpg');



new SceneConstructor('ryancave5', 'As you continue on, you hear other voices in the cave calling out. You can\'t exactly make out the words but there seems to be more than one. You cautiously walk towards the noise and find a group of people.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave9\')\">\r\n  Greet the group\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancave9\')\">\r\n  Attack the group\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryancaveexit2\')\">\r\n  Walk in the opposite direction\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave5.jpg');

new SceneConstructor('ryancave9', 'You run towards them and they spot you right away. The guy in the blue waves his hand, \"Wow another one! Did you wake up in the cave as well?\" I lower my guard and ask, \"Yeah, you guys as well?\" \"Yeah we all seem to have woke in this cave with no idea how we got here.. Want to look look for an exit with us?\"', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancave13\')\">\r\n  Join the group\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanexitcave1\')\">\r\n  Refuse and look for an exit\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancave5.jpg');

new SceneConstructor('ryancave13', 'After some talking, you realize that every one of them woke up in the cave with a headache and no memories just like you. One of them mentions something about crows but you pay no attention. You\'re just dying to get out of the cave. You and the group struggle for another 30 minutes until you decide to split to look for an exit.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancaveexit1\')\">\r\n  Continue\r\n<\/button>\r\n  <\/li><\/ul>', 'img/ryancave5.jpg');


new SceneConstructor('ryancaveexit2', 'You continue on for another 15 minutes and see a light in the distance. You walks towards it. Fresh air hits your face as soon as you approach the exit. You scream out in joy and run outside.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods2\')\">\r\n  Travel North \r\n<\/button>\r\n  <\/li>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods3\')\">\r\n  Travel South \r\n<\/button>\r\n  <\/li><\/ul>', 'img/ryancaveexit1.jpg');

new SceneConstructor('ryancaveexit1', 'You continue on for another 15 minutes and see a light in the distance. You walks towards it. Fresh air hits your face as soon as you approach the exit. You scream out in joy and run outside.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods7\')\">\r\n  Don\'t bother going back for the group.\r\n<\/button>\r\n  <\/li>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods1\'), giveItem(\'Green Book\')\">\r\n  Go back and let the others know \r\n<\/button>\r\n  <\/li><\/ul>', 'img/ryancaveexit1.jpg');

new SceneConstructor('ryanwoods1', 'You do the right thing and lead everyone outside. They all yell in joy and one of them comes up to you. \"We found this while we were in the cave, I would like you to have it!\" It\'s an old green book with a picture of a crow. \"Uh.. thanks.. \" You\'re not sure what this is but take it anyway. The group splits from here and goes their own way', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods2\')\">\r\n  Travel South\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods3\')\">\r\n  Travel North\r\n<\/button>\r\n  <\/li><\/ul>', 'img/ryanwoods1.jpg');



new SceneConstructor('ryanwoods2', 'You hear birds chirping as you travel down the trail. You feel hungry and tired.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods4\')\">\r\n  Continue on\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods5\')\">\r\n  Take a rest\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods2.jpg');



new SceneConstructor('ryanwoods4', 'You stumble across the rough trail and hear a faint cawing in the back. You continue on faster hoping to make it out of the woods before dark. You find some berries on the way. You are exhuasted.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods8\'), healDamage(30)\">\r\n  Eat the berries and continue\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods8\')\">\r\n  Don\'t eat the berries and continue\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods9\'), battle(hero,ryanMurderOfCrows)\">\r\n  Take a break \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods2.jpg');

new SceneConstructor('ryanwoods8', 'You start to hear cawing in the back. As if it\'s following you.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods12\')\">\r\n  Ignore it and continue\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods13\'), battle(hero,ryanMuderofCrows)\">\r\n  Turn around to investigate\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods2.jpg');

new SceneConstructor('ryanwoods12', 'You hear a faint screaming in the back and more cawing. You don\'t care to go back and start to run', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoodsexit1\')\">\r\n  RUN! \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods2.jpg');



new SceneConstructor('ryanwoods5', 'You wake up to the sounds of wings flapping and realized you\'ve fallen asleep. You see fog in the distance. The flapping gets louder. You wonder if the birds are flying away from the fog.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods8\')\">\r\n  Start running away in panic \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods9\'), battle(hero,ryanMurderOfCrows)\">\r\n You don\'t want to rush. Take your time \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods4.jpg');

new SceneConstructor('ryanwoods9', 'You\'re sitting on a rock slowly gathering yourself.. The fog creeps down the woods towards your location. Suddenly you are attacked by a flock of crows. You swing at one and it hits the ground.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods12\')\">\r\n  RUN! \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods13\'), battle(hero,ryanMurderOfCrows)\">\r\n  Swing at the brids again \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods4.jpg');

new SceneConstructor('ryanwoods13', 'The fog quickly envelopes you as birds attack you from every direction. You catch a glimpse of one of them and their eyes are white and bodies resemble decayed flesh. You swing around blindly and you hear a few of them hit the ground. There\'s way too many.. You can\'t fight them all.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoodsexit1\')\">\r\n  RUN! \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods4.jpg');



new SceneConstructor('ryanwoods3', 'You walk North and notice a broken small sign next to the trail. You can barely make out the words and it seems to say \"Turn back\". You wonder if you should turn back...', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods6\')\">\r\n  Continue on\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods2\')\">\r\n  Turn back and go South\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods3.jpg');



new SceneConstructor('ryanwoods6', 'Slight fog seems to be forming around you. It\'s getting late and too late to turn back. You focus on getting out of the woods.', '<ul>\r\n<li>\r\n<button onclick=\"renderPage(\'ryanwoods10\')\">\r\n  Pick up the pace and walk faster \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods11\'), doDamage(10)\">\r\n  Search for food as you walk \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods3.jpg');

new SceneConstructor('ryanwoods10', 'You walk as fast as you can but the fog catches up to you. You hear wings flapping and they start to get louder.. You look up to find a flock of bird flying towards your direction. \"That can\'t be good..\"', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods14\'), battle(hero,ryanMurderOfCrows)\">\r\n  Try to outrun the birds \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods15\'), healDamage(30)\">\r\n  Find a bush to hide in \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods3.jpg');

new SceneConstructor('ryanwoods14', 'You run as fast as you can but you\'re unable to out run the birds. They attack you from behind as you do your best to protect your head. You manage to knock away a few but that\'s not enough.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoodsexit1\')\">\r\n  RUN! \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods3.jpg');



new SceneConstructor('ryanwoods7', 'You continue your journey North. You\'re feeling a bit guilty about leaving the group behind and fails to notice a sign next to the trail. The fog gets thicker around you as you go deeper into the woods. You feel an eerie vibe but it might just be the cold air...', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods11\'), doDamage(10)\">\r\n  Continue\r\n<\/button>\r\n  <\/li>\r\n\<\/ul>', 'img/ryanwoods5.jpg');

new SceneConstructor('ryanwoods11', 'The fog gets heavy as you walk down the path.. \"CAWWWWW\" The loud caw surprises you and you look up. You can\'t see any birds but just from the amount of flapping, you can tell there\'s around 50 of them. You go into a full sprint down the hill. Flapping gets louder behind you as you run. You trip on a rock while running and hit your head(damage 10) on a tree. You\'re a bit dazed and there\'s no way you can out run the birds...', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoods15\'), healDamage(30)\">\r\n  Hide in a bush \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanwoods14\'), battle(hero,ryanMurderOfCrows)\">\r\n  Keep Running \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods5.jpg');

new SceneConstructor('ryanwoods15', 'You find a nearby bush to hide. You hear the flapping and cawing in the skies and they seem to have flown past you. You sigh with relif. You wait in the bush until they are all gone. You eat some berries in the bush while you wait. You feel nourished.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoodsexit1\')\">\r\n Run out of the woods! \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoods5.jpg');



new SceneConstructor('ryanwoodsexit1', 'You run until you can\'t feel your legs anymore. You seem to have put some distance between you and the fog. You sigh with relief. You walk along the path and notice a white building to your left..', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoodsexit2\')\">\r\n  Keep walking \r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanchurch1\')\">\r\n  Take shelter in the white building \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoodsexit1.jpg');

new SceneConstructor('ryanchurch1', 'You approach the white building and realize it\'s a church. The door makes a loud creak as you open the door. There\'s dust everywhere and it looks like no one has entered this building for ages.. You notice a glimpse of something shining in the center of the podium. You start to hear crows outside again.', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanwoodsexit2\') giveItem(\'Shield\')\">\r\n  Approach the podium\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n  <button onclick=\"renderPage(\'ryanfog1\')\">\r\n  Run away \r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanchurch1.jpg');

new SceneConstructor('ryanwoodsexit2', '', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanfog1\')\">\r\n  ryanfog1\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanwoodsexit1.jpg');

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

new SceneConstructor('ryanvillagedeath2', 'ryanvillagedeath2', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryancrows2\')\">\r\n  ryancrows2\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanvillagedeath.jpg');

new SceneConstructor('ryancrows2', 'ryancrows2', '', 'img/ryancrows2.jpg');

new SceneConstructor('ryancrows1', 'ryancrows1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanvillagedeath1\')\">\r\n  ryanvillagedeath1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanvillagedeath1\')\">\r\n  ryanvillagedeath1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanvillagedeath2\')\">\r\n  ryanvillagedeath2\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryancrows1.jpg');

new SceneConstructor('ryanvillagedeath1', 'ryanvillagedeath1', '<ul>\r\n<li>\r\n  <button onclick=\"renderPage(\'ryanroad1\')\">\r\n  ryanroad1\r\n<\/button>\r\n  <\/li>\r\n  <li>\r\n<button onclick=\"renderPage(\'ryanboat1\')\">\r\n  ryanboat1\r\n<\/button>\r\n  <\/li>\r\n<\/ul>', 'img/ryanvillagedeath.jpg');

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



// =======
// Lee's scenes

function gainCat() {
  hero.items.push('catlove');
  hero.attackPower += 20;
  alert('The cat will join you as an ally');
}
function gainMediumArmor() {
  giveItem('mediumarmor');
  gainArmor(50);
};

function checkIfDead(scene) {
  if (hero.hitPoints <= 0) {
    alert('you have died');
    resetHero();
  }
  else { renderPage(scene); }
};

// Lee's scenes

new SceneConstructor('lee1', 'You walk deep into the jungle. The surroundings are dark and teeming with life. As you look around you see the glint of some large animals eyes.  A large jungle cat slinks into view. You see the glint of gold from a necklace the big cat is wearing. It locks eyes with you and begins to slowly walk away. What do you do?', '<ul>\r\n<li><button onclick=\"renderPage(\'lee2\')\">Follow the leopard deeper into the jungle\r\n<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'lee3b\'), doDamage(35)\">\r\n Attack the leopard and try to take the necklace from its cold lifeless body\r\n<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'lee4\')\">\r\n  Search the area for clues\r\n<\/button><\/li>\r\n<\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee2', 'The big cat continues to walk ahead of you. Occassionally it glances back at you as if to make sure that you are following it. The forest eventually opens into a wide clearing, the sun is breaking through the dark clouds which have followed you from your homelands to this blighted land. You get closer and closer to the big cat until you can hear its soft breathing. It\'s continuing to hold eye contact with you until suddenly the jungle predator tenses and seems about to attack! What do you do?!', '<ul>\r\n<li><button onclick=\"renderPage(\'lee3a\'), doDamage(35)\">Quickly attack before the animal has a chance to prepare\r\n<\/button><\/li>\r\n\r\n<li><button onclick=\"renderPage(\'lee5\'), gainCat()\">Wait a moment to see what this dangerous adversary does\r\n<\/button><\/li>\r\n<\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee3a', 'The big cat growls and lunges at you before you can bring any weapon to bear. This apex predator could make short work of you but it isn\'t interested in a fight. It swipes you across the chest drawing blood and a grimace from you. You fall to the ground, quickly you spring back to your feet to prepare for another attack but you only see the briefest shadow of the big cat disappearing back into the forest.', '<ul> <li><button onclick=\"renderPage(\'lee5\')\"> Collect yourself mentally and continue on your journey into the clearning.\r\n<\/button>\r\n<\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee3b', 'The big cat growls and lunges at you before you can bring any weapon to bear. This apex predator is ready for a fight. It swipes you across the chest drawing blood and a grimace from you. You fall to the ground, quickly you spring back to your feet to prepare for another attack.', '<ul><li><button onclick=\"renderPage(\'lee6\')\"> Fight the big cat.\r\n<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee3c', 'You have survived your fight with the cat, you are beaten and bruised but alive. Its time to continue this adventure.', '<ul><li><button onclick=\"renderPage(\'lee9\')\"> Move on from the scene of carnage.\r\n<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee4', 'You look around the area and don\'t see anything obviously interesting. However you spend enough time looking around that the sun noticeably lowers. You feel a little drowsy and decide that a well rested hero is a wise hero and you begin to make camp. As you pull your bedroll closed around you, you hear strange music lulling you to sleep.', '<ul><li><button onclick=\"renderPage(\'lee7\')\">Catch your well deserved rest<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee5', 'You and your allies square up against what looks like an enormous human man. He is in everyway a scaled up version of a normal human. You are struck by a strange thought in the moments before the fight and you wonder if a small animal has ever taken refuge inside of this giants nostril. You are so distracted by this thought that you almost forget to be afraid. ', '<ul> <li><button onclick=\"battle(hero, leeGiant), renderPage(\'lee5a\')\ "> Find out if you survive the fight!\r\n<\/button>\r\n<\/li><\/ul>\r\n', 'img/forestbg.jpg');

new SceneConstructor('lee5a', 'You loot the giants corpse and find a set of armor which will help you on your journey.', '<ul> <li><button onclick=\"gainMediumArmor(),renderPage(\'lee9\')\"> Don the armor and continue towards the sound of rushing water.\r\n<\/button>\r\n<\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee6', 'You have chosen to fight a wild animal! You are a crazy person but you lunge back and forth with this mighty beast. The game of life and death has begun! As you battle back and forth you feel impending terror! You aren\'t sure if you will beat this animal.', '<ul><li><button onclick=\"renderPage(\'lee3c\'), battle(hero,leeJungleCat)\">See if you survive!<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee7', 'You wake slowly, the weight of sleep heavy on your eyelids and immediately realize you are bound! You hear the high pitched giggles of fairyfolk, you have become the victim of one of their pranks. \"If you want to get free you must tell us the secret to riddles three\" they sing in chorus.  \"Wait no we did that last time and it wasn\'t even that much fun, lets ask them one instead.\" \"Okay one riddle, and you better get it right or we are leaving you here to die\" \"I babble, but never speak. I run, but never walk. I have a bed, but never sleep. What am I?\"', '<ul>\r\n<li><button onclick=\"renderPage(\'lee8\')\">\"a river\"<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'leeDead\')\">\"a house\"<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'leeDead\')\">\"a person\"<\/button><\/li>\r\n<li><button onclick=\"renderPage(\'leeDead\')\">\"a cat\"<\/button><\/li>\r\n<\/ul>', 'img/forestbg.jpg');

new SceneConstructor('leeDead', 'You have died.\r\n\r\nYou body is eaten by progressively smaller creatures. The first bite that\'s taken from your flesh is by a large jungle cat. Your final return back to nature is sheparded through the short simple intestines of a common maggot. You are one with the earth, you know no peace: Only silence at long last.', '<ul><li><button onclick=\"resetHero()\">Try again<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee8', 'You have answered the fairys riddle correctly!\r\n\r\n\"Aw this one got it right\" one fairy bemoaned to the others. \"I guess we have to let it go\". \"What a shame Belethazud was so hungry, I guess Bele might still find this little adventurer snack later\".\r\n\r\nYou are shaken but alive, you continue your journey heading towards the sound of fast rushing water.', '<ul><li><button onclick=\"renderPage(\'lee9\')\">Follow the sound of water<\/button><\/li><\/ul>', 'img/forestbg.jpg');

new SceneConstructor('lee9', 'A coursing waterfall! As you leave the last identifiable part of the woods you see a large river spilling over the edge of a sheer cliff face. The sound is almost deafening and you are totally absorbed in the experience of seeing this mighty body of water rushing past you, over the edge of this ridgeline and then crashing into the mist below. \r\n\r\nYou have no idea how you will get down, but there is no other way since this ridge extends as far as you can see in either direction. If you had a boat you can at least try to ride down the waterfall but without a boat you will be jumping and hoping for the best.', '<ul>\r\n<li><button onclick=\"doDamage(80), checkIfDead(\'lee10\') \">Jump for it!', 'img/waterfallbg.jpg');

new SceneConstructor('lee10', 'You plunge into the water with a violent slam against your whole body. Your clothing and armor blunt some of the impact but you are in a great deal of pain. Spluttering and nearly drowning you finally find the surface of the water and gasp for air. You doggy paddle to the shore and painfully pull yourself up. As you survey the waterfall now that you are at the bottom of it you take stock of how you feel. Your body, clothing, and mood absolutely ruined, the mist from the falls freezing you to the bone, a path leads away from the waterfall and towards a small cottage. You hope the owner of that cottage is friendly because you feel like you are on your last leg.', '<ul> <li><button onclick=\"renderPage(\'lee11\')\"> the cottage\r\n<\/button>\r\n<\/li><\/ul>', 'img/waterfallbg.jpg');

new SceneConstructor('lee11', 'You walk closer to the cottage, it\'s a small place that looks like everything will be inside a single largish room. As you approach the door you look around and admire the clearing the cottage sits in. Even through the pain wracking your body you can appreciate the tidyness of the garden and the overall kempt nature of the place you are standing outside. You raise your hand and knock upon the door. You wait a respectful time and feel your strength starting to fade, you will only be able to make another one more attempt at this. Do you', '<ul> <li><button onclick=\"renderPage(\'lee12\')\"> knock again\r\n<\/button>\r\n<\/li>\r\n  <li><button onclick=\"renderPage(\'lee13\')\"> break in through a window\r\n<\/button>\r\n<\/li>\r\n  \r\n<\/ul>\r\n', 'img/cottagebg.jpg');

new SceneConstructor('lee12', 'You knock piteously upon the cottage door croaking out a pathetic \"Is someone home?\" You hear movement from the inside, a shuffling of cloth, and finally the bolt on the door slides open and you are greeted by a friendly older woman who starts in a cheery voice \"Oh hello there, what brings you to my..... oh you poor thing I can see you\'ve had a rough go of it, did you actually fight the giant? Kids these days, don\'t you know there are easier ways to make it in the world? Come in come in I\'ll get you right as rain in no time.\"\r\n', '<ul> <li><button onclick=\"renderPage(\'lee12a\')\"> Enter the cabin\r\n<\/button>\r\n<\/li>  \r\n<\/ul>', 'img/cottagebg.jpg');


new SceneConstructor('start1', 'Choose Your Own Adventure', '<ul><li><img onclick=\"renderPage(\'aaron1\')\" src=\'img\/character_warrior.png\' class=\'paths\'></li> <li><img onclick=\"renderPage(\'lee1\')\" src=\'img\/character_archer.png\' class=\'paths\'></li> <li><img onclick=\"renderPage(\'ludwinmain\')\" src=\'img\/character_mage.png\' class=\'paths\'><\/img>\r\n</li> <li><img onclick=\"renderPage(\'ryan1\')\" src=\'img\/character_rogue.png\' class=\'paths\'><\/img></li></ul>', 'img/startingscreen.jpg');

new SceneConstructor('lee12a', 'The healer anoints you with herbs and tinictures, your sore body starting to feel first like truly hammered shit. Eventually as time goes by you reach the level of lightly hammered shit and the healer tells you that it is time for you to go back out into the world. You gather your things and leave the cottage.', '<ul> <li><button onclick=\"renderPage(\'lee14\'), healDamage(80)\"> Venture forth\r\n<\/button>\r\n<\/li>  \r\n<\/ul>\r\n', 'img/cottagebg.jpg');


new SceneConstructor('lee13', 'You crash in through a window and lock eyes with an old woman who has dangerous magics circling around her. \"INTRUDER!\" She bellows in an other worldly voice \"YOU SHALL REGRET THIS TRESPASS\" The dark old magics carry your battered body out the door and dump you outside. Your body feels even worse than it did before if that is even possible. ', '<ul> <li><button onclick=\"renderPage(\'lee14\')\"> Cry in terror\r\n<\/button>\r\n<\/li>  \r\n<\/ul>\r\n', 'img/cottagebg.jpg');

new SceneConstructor('lee14', 'The bright sunlight hurts your eyes after the time you spent in the dark cottage. You step away from the cottage and you see three paths ahead of you. A path down through a valley, a rocky path through the mountains, a dangerous looking swamp.', '<ul> <li><button onclick=\"renderPage(\'lee15\')\"> Valley\r\n<\/button>\r\n<\/li> \r\n  \r\n  <li><button onclick=\"renderPage(\'lee16\')\"> Mountain\r\n<\/button>\r\n<\/li> \r\n  \r\n  <li><button onclick=\"renderPage(\'lee17\')\"> Swamp\r\n<\/button>\r\n<\/li> \r\n<\/ul>\r\n', 'img/forkbg.jpg');

new SceneConstructor('ludwin1', 'Ludwin\'s SAMPLE page', '<button onclick=\"renderPage(\'start1\')\">\r\nStart Over\r\n<\/button>', 'img/slime1.jpg');


//ludwin's scene constructor

new SceneConstructor ('ludwinmain','Your plane crashes in a remote island on the pacific ocean, you  walk around trying to find a sign of life but you get no answer. You decide to explore close to shore and discover remnants of a small camp. Do you want to make camp or venture deep in the islnad to find more clues about who made this camp? ','<ul> <li><button onclick = "renderPage(\'makecamp\')">Make camp?</button></li> <li><button onclick = "renderPage(\'exploremore\')"> Explore more? </button></li> </ul>','img/sunset.jpg');

new SceneConstructor ('makecamp','You find helpful items to build a survival camp, you feel that you are going to make it and decide to close your eyes for the night. Suddnly you hear a weird noise that you can\'t make up and is getting louder and louder, you feel that you need to find out where the noise is coming from but you also don\'t want to leave the safety of your shelter.','<ul> <li><button onclick = "renderPage(\'explore\')">Explore.</button></li> <li><button onclick = "renderPage(\'waititout\'> Wait it out.</button></li> </ul>','img/sunset.jpg' );

new SceneConstructor ('exploremore','You have been walking for a few hours trhough the dense jungle in the island and have found no more clues of more inhabitants, is getting dark and have not eaten for quite a while, sudenly you run into a wild boar is small enough that you think you can take it. Do you want to try to hunt it or find something easy to eat.','<ul> <li><button>Hunt.</button></li> <li><button> Forage </button></li> </ul>','img/sunset.jpg' );

new SceneConstructor ('explore','Hello world','<ul> <li><button>clicksb1</button></li> <li><button> clicksb2 </button></li> <li><button> clicksb3 </button></li> <li><button> clicksb4 </button></li> </ul>','img/sunset.jpg' );

new SceneConstructor ('waititout','Hello world','<ul> <li><button>clicksb1</button></li> <li><button> clicksb2 </button></li> <li><button> clicksb3 </button></li> <li><button> clicksb4 </button></li> </ul>','img/sunset.jpg' );


new SceneConstructor ('aaron1', 'One day while on a journey, you stopped at a river to get a drink of water.  A wizard approaches you and asks for a favor:', '<ul>\r\n  <li><button onclick=\"renderPage(\'start1\');\">Sorry, I\'m busy.<\/button><\/li><li><button onclick=\"renderPage(\'aaronQ1a\');\">My time isn\'t free.<\/button><\/li><li><button onclick=\"renderPage(\'aaronQ1b\');\">Always willing to help the elderly.<\/button><\/li>\r\n<\/ul>' , 'img/aaronsbg_river.jpeg');


// Uncomment the next line to see every scene in the book that is available to reference
// console.log(book);

function resetHero() {
  hero.name = prompt('What is the new heroes name?');
  // show player name on display
  var displayName = document.getElementById('charName-id');
  displayName.innerHTML = hero.name;
  hero.hitPoints = 100;
  hero.armorHP = 0;
  hero.items = [];
  hero.scenesVisited = [];
  hero.attackPower = 10;
  HB.setValue(100);
  AB.setValue(0);
  renderPage('start1');
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


///////////////////////////////// ITEM FUNCTIONS /////////////////////////////////
/*
this function I am leaving in for testing purposes, but so far I haven't found a reason to actually use this function
*/
function checkItem(itemOBJ) {
  for(var i = 0; i < hero.items.length; i++) {
    console.log('What is this?: ', i, hero.items[i].name);
    if(hero.items[i].name === itemOBJ.name) {
      return true;
    }
  }
}

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
// example call loseItem(axeOBJ);

///////////////////// ITEM EVENT LISTENER AND CLICK FUNCTIONS /////////////////////

var potionSlot = document.getElementById('img-item-potion');
var hevArmorSlot = document.getElementById('img-item-hev-armor');
var medArmorSlot = document.getElementById('img-item-med-armor');
potionSlot.addEventListener('click', handlePotionClick);
hevArmorSlot.addEventListener('click', handleHevArmorClick);
medArmorSlot.addEventListener('click', handleMedArmorClick);

function handlePotionClick() {
  for(var i = 0; i < hero.items.length; i++) {
    if (hero.items[i].name === potionOBJ.name) {
      healDamage(25);
      loseItem(potionOBJ);
    }
  }
}

function handleHevArmorClick() {
  for(var i = 0; i < hero.items.length; i++) {
    if (hero.items[i].name === hevArmorOBJ.name) {
      AB.setValue(100);
      loseItem(hevArmorOBJ);
    }
  }
}

function handleMedArmorClick() {
  for(var i = 0; i < hero.items.length; i++) {
    if (hero.items[i].name === medArmorOBJ.name) {
      AB.setValue(75);
      loseItem(medArmorOBJ);
    }
  }
}

///////////////////////////// ENEMY BATTLE FUNCTIONS /////////////////////////////

function battle(hero, enemy) {
  var enemyBattleHp = enemy.hitPoints;
  while ((enemyBattleHp > 0) && (hero.hitPoints > 0)) {
    doDamage(enemy.attackPower);
    enemyBattleHp = enemyBattleHp - hero.attackPower;
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

