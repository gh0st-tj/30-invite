window.onload = function() {
    const birthDate = new Date('1994-09-13');
    const currentDate = new Date();
    const daysLived = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));
    const thirtiethBirthday = new Date('2024-09-13');
    const totalDaysTill30 = Math.floor((thirtiethBirthday - birthDate) / (1000 * 60 * 60 * 24));
    const progressPercentage = (daysLived / totalDaysTill30) * 100;

    const averageLifespanDays = 82 * 365;
    const percentageLivedOfLifespan = (daysLived / averageLifespanDays) * 100;

    document.querySelector('#progress-age .progress').style.width = progressPercentage + '%';
    document.getElementById('age-progress').innerHTML = `
        <span class="large-text">${progressPercentage.toFixed(2)}%</span>
    `;

    document.querySelector('#progress-life .progress').style.width = percentageLivedOfLifespan + '%';
    document.getElementById('life-progress').innerHTML = `
        <span class="large-text">${percentageLivedOfLifespan.toFixed(2)}%</span>
        <p class="small-text">*based on average male lifespan</p>
    `;

    // Initialize fireworks animation behind content
    const fireworksContainer = document.getElementById('fireworks');
    const fireworks = new Fireworks(fireworksContainer, {
        rocketsPoint: 50,
        hue: { min: 0, max: 360 },
        delay: { min: 15, max: 30 },
        speed: 2,
        acceleration: 1.05,
        friction: 0.98,
        gravity: 1.5,
        particles: 50,
        trace: 3,
        traceSpeed: 10,
        explosion: 5,
        boundaries: {
            x: 50,
            y: 50,
            width: fireworksContainer.clientWidth,
            height: fireworksContainer.clientHeight
        },
        sound: {
            enable: true,
            files: [
                'https://cdn.jsdelivr.net/gh/crashmax-dev/fireworks-js@latest/assets/explosion0.mp3',
                'https://cdn.jsdelivr.net/gh/crashmax-dev/fireworks-js@latest/assets/explosion1.mp3',
                'https://cdn.jsdelivr.net/gh/crashmax-dev/fireworks-js@latest/assets/explosion2.mp3'
            ]
        },
        autoresize: true,
        brightness: { min: 50, max: 80, decay: { min: 0.015, max: 0.03 } },
        decay: 0.03
    });

    fireworks.start();

    // Not Attending button behavior (random position across the whole page)
    const notAttendingButton = document.getElementById('not-attending');
    const moveButtonRandomly = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const newX = Math.random() * (viewportWidth - notAttendingButton.offsetWidth);
        const newY = Math.random() * (viewportHeight - notAttendingButton.offsetHeight);

        notAttendingButton.style.position = 'absolute';
        notAttendingButton.style.left = `${newX}px`;
        notAttendingButton.style.top = `${newY}px`;
    };

    // For desktop, use mouseover
    notAttendingButton.addEventListener('mouseover', moveButtonRandomly);

    // For mobile, use touchstart
    notAttendingButton.addEventListener('touchstart', moveButtonRandomly);
};

function openWhatsApp(status) {
    const phoneNumber = '972509781166'; // Replace with your actual phone number
    let message = '';

    if (status === 'attending') {
        message = 'Hey Tom, I am attending.';
    } else if (status === 'attending plus one') {
        message = 'Hey Tom, I am attending PLUS ONE.';
    }

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Attach these functions to the buttons directly
