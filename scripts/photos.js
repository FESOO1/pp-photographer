const photosControllerButtons = document.querySelectorAll('.photos-controller-button');

photosControllerButtons.forEach(controllerButton => {
    controllerButton.addEventListener('click', () => {

        // REMOVE THE CLASS FROM ALL THE BUTTONS

        for (const controllerButtons of photosControllerButtons) {
            controllerButtons.classList.remove('active-photos-button');
        };


        // ADD THE CLASS TO THE CLICKED BUTTON

        controllerButton.classList.add('active-photos-button');

    });
});