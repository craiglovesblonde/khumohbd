// Confetti on page load
window.onload = function() {
    createConfetti();
};

// Confetti function
function createConfetti() {
    const colors = ["#ff0a54","#ff477e","#ff85a1","#fbb1b1","#f9bec7"];
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Modal functions
function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.style.transform = "scale(0)";
    setTimeout(() => modalImg.style.transform = "scale(1)", 10);
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
