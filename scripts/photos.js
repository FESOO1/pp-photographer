const photosControllerButtons = document.querySelectorAll('.photos-controller-button');
const photosContainer = document.querySelector('.photos-container');
const fullViewBtn = document.getElementById('fullViewBtn');
const gridViewBtn = document.getElementById('gridViewBtn');


fullViewBtn.addEventListener('click', () => {

    // REMOVE THE CLASS FROM ALL THE BUTTONS
    for (const controllerButtons of photosControllerButtons) {
        controllerButtons.classList.remove('active-photos-button');
    };

    // ADDING THE CLASS TO THE CLICKED BUTTON

    fullViewBtn.classList.add('active-photos-button');

    // MAKING THE FULL VIEW WORK THROUGH ADDING CLASS TO THE PARENT ELEMENT

    photosContainer.classList.remove('photos-container-js');
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
});