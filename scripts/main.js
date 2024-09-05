const video = document.querySelectorAll('.video');
const backgroundVideoItself = document.querySelectorAll('.video-background-itself');
const client = document.querySelectorAll('.client');
const clientVideo = document.querySelectorAll('.client-video-background-itself');

// VIDEOS

for (let i = 0; i < video.length; i++) {
    video[i].addEventListener('mouseenter', () => {
        backgroundVideoItself[i].play();
    });
    video[i].addEventListener('mouseleave', () => {
        backgroundVideoItself[i].pause();
    });

    // MY CLIENTS

    client[i].addEventListener('mouseenter', () => {
        clientVideo[i].play();
    });
    client[i].addEventListener('mouseleave', () => {
        clientVideo[i].pause();
    });

};


function setAutoplay() {
    const video = document.querySelectorAll('video');

    for (const videos of video) {
        if (window.innerWidth < 1200) {
            videos.setAttribute('autoplay', '');
            videos.play();
        } else {
            videos.removeAttribute('autoplay');
            videos.pause(); 
        };
    };
};

setAutoplay();

window.addEventListener('resize', setAutoplay);