document.addEventListener("mousemove", (event) => {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach(eye => {
        const pupil = eye.querySelector(".pupil");
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const maxMove = 10; // Limit pupil movement range
        const moveX = Math.cos(angle) * maxMove;
        const moveY = Math.sin(angle) * maxMove;
        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});