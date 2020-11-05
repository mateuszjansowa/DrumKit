const boom = document.querySelectorAll('.drum__boom');
const tomLeft = document.querySelectorAll('.drum__tom--left');
const tomRight = document.querySelectorAll('.drum__tom--right');
const floorLeft = document.querySelectorAll('.drum__floor-tom--left');
const floorRight = document.querySelectorAll('.drum__floor-tom--right');
const crash = document.querySelectorAll('.drum__crash');
const ride = document.querySelectorAll('.drum__ride');

const resetTime = 120;


const showActive = el => {
    el.forEach(element => {
        element.classList.add('active');
        setTimeout(() => {
            element.classList.remove('active')
        }, resetTime);
    })
}

const playTomLeft = () => {
    showActive(tomLeft);
    let audioTom = new Audio("./assets/sounds/tom.wav")
    audioTom.play();
}

const playTomRight = () => {
    showActive(tomRight);
    let audioTom = new Audio("./assets/sounds/tom.wav")
    audioTom.play();
}

const playBoom = () => {
    showActive(boom);
    let audioBoom = new Audio("./assets/sounds/boom.wav");
    audioBoom.play();
}

const playFloorLeft = () => {
    showActive(floorLeft);
    let audioFloor = new Audio("./assets/sounds/kick.wav");
    audioFloor.play();
}
const playFloorRight = () => {
    showActive(floorRight);
    let audioFloor = new Audio("./assets/sounds/snare.wav");
    audioFloor.play();
}

const playCrash = () => {
    showActive(crash);
    let audioCrash = new Audio("./assets/sounds/ride.wav");
    audioCrash.play();
}

const playRide = () => {
    showActive(ride)
    let rideAudio = new Audio("./assets/sounds/openhat.wav");
    rideAudio.play();
}


const playSounds = (e) => {
    // console.log(e.keyCode);
    switch (e.keyCode) {
        case 81:
            playCrash();
            break;
        case 69:
            playRide();
            break;
        case 65:
            playTomLeft();
            break;
        case 68:
            playTomRight();
            break;
        case 90:
            playFloorLeft();
            break;
        case 67:
            playFloorRight();
            break;
        case 88:
            playBoom(boom);
            break;
        default:
            break;
    }
}

boom.forEach(boomEl => {
    boomEl.addEventListener('click', playBoom);
})

tomLeft.forEach(tomEl => {
    tomEl.addEventListener('click', playTomLeft);
})

tomRight.forEach(tomEl => {
    tomEl.addEventListener('click', playTomRight);
})

floorLeft.forEach(floorEl => {
    floorEl.addEventListener('click', playFloorLeft);
})

floorRight.forEach(floorEl => {
    floorEl.addEventListener('click', playFloorRight);
})

crash.forEach(crashEl => {
    crashEl.addEventListener('click', playCrash);
})

ride.forEach(rideEl => {
    rideEl.addEventListener('click', playRide);
})

window.addEventListener('keydown', playSounds);