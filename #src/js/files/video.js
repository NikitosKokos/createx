const videpBlock = document.querySelector('.video-block');
const video = videpBlock.querySelector('video');
const videoPlayBtn = videpBlock.querySelector('.video-block__play');
const videoPlayMuted = document.querySelector('.video-block__muted');
const iconMute = document.querySelector('.video-block__mute');
const iconUnmute = document.querySelector('.video-block__unmute');

videoPlayBtn.addEventListener('click', () => {
   videpBlock.classList.add('play');
   videoPlayBtn.classList.add('played');
   videoPlayMuted.classList.add('played');
   video.controls = true;
   video.play();
});

const changeMuted = () => {
   iconMute.classList.toggle('hide');
   iconUnmute.classList.toggle('show');
   video.muted = !video.muted;   
}

videoPlayMuted.addEventListener('click', changeMuted);
