window.onload = function () {
    window.scrollTo(0, 0);
};
function startStory() {

    document.getElementById("beginning").scrollIntoView({
        behavior: "smooth"
    });

}
function goToChapter2() {

    document.getElementById("college-life").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}
/* =========================
   HIDDEN SURPRISE
========================= */

function openSurprise() {

    const surprise =
        document.getElementById("hiddenSurprise");

    const button =
        document.getElementById("surpriseButton");

    surprise.classList.add("show");

    button.style.display = "none";

    setTimeout(() => {

        surprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 150);

}
/* =========================
   BACKGROUND MUSIC
========================= */

function toggleMusic() {

    const music = document.getElementById("backgroundMusic");
    const button = document.getElementById("musicButton");
    const icon = document.getElementById("musicIcon");
    const text = document.getElementById("musicText");

    if (music.paused) {

        music.play().then(function () {

            icon.textContent = "♫";
            text.textContent = "PAUSE";

            button.classList.add("music-playing");

        }).catch(function (error) {

            console.log("Music error:", error);

        });

    } else {

        music.pause();

        icon.textContent = "♪";
        text.textContent = "MUSIC";

        button.classList.remove("music-playing");

    }

}

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(".scroll-reveal");

    function revealOnScroll() {

        revealElements.forEach(function (element) {

            const position =
                element.getBoundingClientRect().top;

            const windowHeight =
                window.innerHeight;

            if (position < windowHeight - 100) {

                element.classList.add("visible");

            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

});
/* =========================
   ENTER OUR STORY
========================= */

function enterStory() {

    const openingScreen =
        document.getElementById("openingScreen");

    const music =
        document.getElementById("backgroundMusic");

    const musicButton =
        document.getElementById("musicButton");

    const musicIcon =
        document.getElementById("musicIcon");

    const musicText =
        document.getElementById("musicText");


    /* Start the music */

    music.play().then(function () {

        musicIcon.textContent = "♫";

        musicText.textContent = "PAUSE";

        musicButton.classList.add("music-playing");

    }).catch(function (error) {

        console.log("Music could not start:", error);

    });


    /* Hide opening screen */

    openingScreen.classList.add("hide");


    /* Start from the top of the story */

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}
// =========================
// FLOATING HEARTS
// =========================

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = ["♡", "♥", "❤"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (12 + Math.random() * 14) + "px";

    heart.style.opacity =
        0.3 + Math.random() * 0.5;

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);
}


setInterval(createFloatingHeart, 1200);
// =========================
// FINAL HEART CELEBRATION
// =========================

function startFinalCelebration() {

    const message =
        document.getElementById(
            "finalCelebrationMessage"
        );

    if (message) {

        message.classList.add(
            "show-final-message"
        );

    }


    // Create a burst of hearts

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            createFinalHeart();

        }, i * 80);

    }

}


function createFinalHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add(
        "final-floating-heart"
    );

    const hearts = [
        "❤️",
        "♡",
        "♥",
        "❤"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (14 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 8000);

}