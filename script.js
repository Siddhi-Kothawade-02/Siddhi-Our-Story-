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