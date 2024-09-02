const photosControllerButtons = document.querySelectorAll('.photos-controller-button');
const photosContainer = document.querySelector('.photos-container');
const fullViewBtn = document.getElementById('fullViewBtn');
const gridViewBtn = document.getElementById('gridViewBtn');
const photo = document.querySelectorAll('.photo');
const customCursor = document.querySelector('.view-cursor');

fullViewBtn.addEventListener('click', () => {

    // REMOVE THE CLASS FROM ALL THE BUTTONS
    for (const controllerButtons of photosControllerButtons) {
        controllerButtons.classList.remove('active-photos-button');
    };

    // ADDING THE CLASS TO THE CLICKED BUTTON

    fullViewBtn.classList.add('active-photos-button');

    // MAKING THE FULL VIEW WORK THROUGH ADDING CLASS TO THE PARENT ELEMENT

    photosContainer.classList.remove('photos-container-js');

    // MAKING THE CUSTOM CURSOR VISIBLE 

    customCursor.style.display = 'flex';
});

gridViewBtn.addEventListener('click', () => {

    // REMOVE THE CLASS FROM ALL THE BUTTONS

    for (const controllerButtons of photosControllerButtons) {
        controllerButtons.classList.remove('active-photos-button');
    };

    // ADDING THE CLASS TO THE CLICKED BUTTON

    gridViewBtn.classList.add('active-photos-button');

    // MAKING THE GRID VIEW WORK THROUGH ADDING CLASS TO THE PARENT ELEMENT

    photosContainer.classList.add('photos-container-js');

    // MAKING THE CUSTOM CURSOR INVISIBLE 

    customCursor.style.display = 'none';
});

// CURSOR

window.addEventListener('mousemove', viewCursor);

function viewCursor(e) {

    const positionY = e.clientY - 15;
    const positionX = e.clientX - 35;


    customCursor.style.transform = `translateX(${positionX}px) translateY(${positionY}px)`;
   /*  customCursor.style.top = `${positionY}px`;
    customCursor.style.left = `${positionX}px`; */
};


for (let i = 0; i < photo.length; i++) {
    photo[i].addEventListener('mouseenter', () => {
        customCursor.style.opacity = '1';
    });
    photo[i].addEventListener('mouseleave', () => {
        customCursor.style.opacity = '0';
    });
};