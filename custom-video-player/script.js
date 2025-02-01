const video = document.getElementById('video');
const play = document.getElementById('play');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const stop = document.getElementById('stop');

function toggleVideoStatus(){
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }
}

function updatePlayIcon(){
  if(video.paused){
    play.innerHTML = '<i class="bi bi-play-fill"></i>'
  }else{
    play.innerHTML = '<i class="bi bi-pause-fill"></i>'
  }
}

function updateProgress(){
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if(mins < 10){
    mins = 0 + String(mins);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if(seconds < 10){
    seconds = 0 + String(seconds);
  }

  timestamp.innerHTML = `${mins}:${seconds}`
}

function setVideoProgress(){
  video.currentTime = (+progress.value / 100) * video.duration
}

function stopVideo(){
  video.currentTime = 0;
  video.pause();
}



video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);