let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rocket');
let text = document.getElementById('text');
let button = document.getElementById('button');
let music = document.getElementById('bg-music'); // sesuaikan dengan id di HTML

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * -0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
});

// Fungsi untuk memutar musik setelah user klik tombol Explore
function playMusic() {
    if (music.paused) {
        music.play().catch(err => {
            console.log("Playback prevented:", err);
        });
    } else {
        music.pause();
    }
}

// Hubungkan tombol Explore ke fungsi playMusic()
button.addEventListener('click', function(e) {
    e.preventDefault(); // biar nggak reload halaman
    playMusic();
});
