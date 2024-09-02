const videosControllerButtons = document.querySelectorAll('.videos-controller-button');
const videosContainer = document.querySelector('.videos-container');
const fullViewBtn = document.getElementById('fullViewBtn');
const gridViewBtn = document.getElementById('gridViewBtn');
const video = document.querySelectorAll('.videos-itself');
const customCursor = document.querySelector('.view-cursor');

fullViewBtn.addEventListener('click', () => {

    // REMOVE THE CLASS FROM ALL THE BUTTONS
    for (const controllerButtons of videosControllerButtons) {
        controllerButtons.classList.remove('active-videos-button');
    };

    // ADDING THE CLASS TO THE CLICKED BUTTONvideos

    fullViewBtn.classList.add('active-videos-button');

    // MAKING THE FULL VIEW WORK THROUGH ADDING CLASS TO THE PARENT ELEMENT

    videosContainer.classList.remove('videos-container-js');

    // MAKING THE CUSTOM CURSOR VISIBLE 

    customCursor.style.display = 'flex';
});

gridViewBtn.addEventListener('click', () => {

    // REMOVE THE CLASS FROM ALL THE BUTTONS

    for (const controllerButtons of videosControllerButtons) {
        controllerButtons.classList.remove('active-videos-button');
    };

    // ADDING THE CLASS TO THE CLICKED BUTTON

    gridViewBtn.classList.add('active-videos-button');

    // MAKING THE GRID VIEW WORK THROUGH ADDING CLASS TO THE PARENT ELEMENT

    videosContainer.classList.add('videos-container-js');

    // MAKING THE CUSTOM CURSOR INVISIBLE 

    customCursor.style.display = 'none';
});

// CURSOR

window.addEventListener('mousemove', viewCursor);

function viewCursor(e) {

    const positionY = e.clientY - 15;
    const positionX = e.clientX - 35;

    customCursor.style.transform = `translateX(${positionX}px) translateY(${positionY}px)`;
};


for (let i = 0; i < video.length; i++) {
    video[i].addEventListener('mouseenter', () => {
        customCursor.style.opacity = '1';
    });
    video[i].addEventListener('mouseleave', () => {
        customCursor.style.opacity = '0';
    });
};