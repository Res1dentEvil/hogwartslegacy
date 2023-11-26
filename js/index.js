const playButtonGroup = document.querySelector('.play-button-group');
const hoverMask = document.querySelector('.hover-mask');
const playButtonOuter = document.querySelector('.play-button-outer');
const playButtonInner = document.querySelector('.play-button-inner');
const videoFrame = document.querySelector('.video-frame');
const videoFrameImg = document.querySelector('.video-frame-img');


hoverMask.addEventListener("mouseover", () => {
    playButtonOuter.classList.toggle('outer-btn-play-animation-start')
    playButtonOuter.classList.remove('outer-btn-play-animation-end')

    playButtonInner.classList.toggle('inner-btn-play-animation-start')
    playButtonInner.classList.remove('inner-btn-play-animation-end')
})

hoverMask.addEventListener("mouseout", () => {
    playButtonOuter.classList.toggle('outer-btn-play-animation-end')
    playButtonOuter.classList.remove('outer-btn-play-animation-start')

    playButtonInner.classList.toggle('inner-btn-play-animation-end')
    playButtonInner.classList.remove('inner-btn-play-animation-start')
})



hoverMask.addEventListener("click", () => {
    playButtonGroup.classList.add('invisible-block')
    videoFrameImg.classList.add('invisible-block')
    videoFrame.src = '/assets/video/Official.mp4';
    videoFrame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
})

