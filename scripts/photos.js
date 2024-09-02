const photosControllerButtons = document.querySelectorAll('.photos-controller-button');
const photosContainer = document.querySelector('.photos-container');
const fullViewBtn = document.getElementById('fullViewBtn');

for (let i = 0; i < photosControllerButtons.length; i++) {
    photosControllerButtons[i].addEventListener('click', () => {
        // REMOVE THE CLASS FROM ALL THE BUTTONS

        for (const controllerButtons of photosControllerButtons) {
            controllerButtons.classList.remove('active-photos-button');
        };

        // ADD THE CLASS TO THE CLICKED BUTTON

        photosControllerButtons[i].classList.add('active-photos-button');


        photosContainer.classList.add('photos-container-js');

    });
};