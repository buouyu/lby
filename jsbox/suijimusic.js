
var bodyBgs = [];
bodyBgs[0] = "http://liboyu.lovelife.top/music/Feels-Kiiara.mp3";
bodyBgs[1] = "http://liboyu.lovelife.top/music/Superstar.mp3";
bodyBgs[2] = "http://liboyu.lovelife.top/music/gouzhiqishi.mp3";
bodyBgs[3] = "http://liboyu.lovelife.top/music/Monsters-Katie Sky.mp3";
bodyBgs[4] = "http://liboyu.lovelife.top/music/下坠Falling-Corki.mp3";
bodyBgs[5] = "http://liboyu.lovelife.top/music/心如止水-Ice Paper.mp3";
var randomBgIndex = Math.round( Math.random() * 5 );
document.write('<audio src=\''+bodyBgs[randomBgIndex]+ '\'autoplay=\'autoplay\'></audio>');
