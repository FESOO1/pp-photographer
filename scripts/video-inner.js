const video = document.querySelectorAll('.video');
const backgroundVideoItself = document.querySelectorAll('.video-background-itself');

// VIDEOS

for (let i = 0; i < video.length; i++) {
    video[i].addEventListener('mouseenter', () => {
        backgroundVideoItself[i].play();
    });
    video[i].addEventListener('mouseleave', () => {
        backgroundVideoItself[i].pause();
    });
};

// 

function setAutoPlay() {
    const videos = document.querySelectorAll('video');

    for (const video of videos) {
        if (window.innerWidth < 1200) {
            video.setAttribute('autoplay', '');
            video.play();
        } else {
            video.removeAttribute('autoplay', '');
            video.pause();
        };
    };
};

setAutoPlay();

window.addEventListener('resize', setAutoPlay);