var alert = require('sound-alert.js')
window.playAlert = alert;
window.play = function play(name){
  alert(name);
}
var sounds = [
    'bottle',
    'glass',
    'funk',
    'morse',
    'purr',
    'tink',
    'submarine'
]
function addSound(sound) {
  document.writeln('<button onclick="play(\''+sound+'\')">Play '+sound+'</button>');
};
var i;
for(i=0;i<sounds.length;i++){
  addSound(sounds[i]);
}
