var song = document.getElementById("song);
var playpause = document.getElementById("playpause");
var seek = document.getElementById("seekbar");

playpause.addEventListener("click", function(){
  if (song.paused == true){
    song.play();
    playpause.innerHTML="Pause";
  } else {
    song.pause();
    playpause.innerHTML="Play";
  }
});

seek.addEventListener("change", function(){
  var time = song.duration * (seek.value / 100);
  song.currentTime = time;
});

function changeVolumeUp() {
  var song = document.getElementById("song");
  song.volume = 1.0;
}