document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const soundOnBtn = document.getElementById("soundOn");
  const soundOffBtn = document.getElementById("soundOff");
  const music = new Audio("assets/HappyMonkey-Live.MP3");
  music.loop = true;

  const eq = document.querySelector(".sound .eq");

  document.body.style.overflow = "hidden";

  if (localStorage.getItem("playMusic") === "true") {
    closeOverlay();
  }

  soundOnBtn.addEventListener("click", function () {
    playMusic();
    eq.classList.add("playing");
    localStorage.setItem("playMusic", "true");
    closeOverlay();
  });

  soundOffBtn.addEventListener("click", function () {
    localStorage.setItem("playMusic", "false");
    closeOverlay();
  });

  function playMusic() {
    music.play().catch((err) => {
      console.error("Failed to play music:", err);
    });
    eq.classList.add("playing");
  }

  function stopMusic() {
    music.pause();
    eq.classList.remove("playing");
  }

  function closeOverlay() {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }

  document.querySelector(".sound .eq").addEventListener("click", function () {
    if (music.paused) {
      playMusic();
    } else {
      stopMusic();
    }
  });

  music.addEventListener("ended", function () {
    stopMusic();
  });
});
