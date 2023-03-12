duration = document.querySelector("#duration");
current = document.querySelector("#current");
playPause = document.querySelector("#playPause");

var timeCalculator = function (value) {
    second = Math.floor(value % 60);
    minute = Math.floor((value / 60) % 60);
    
    if (second < 10) {
        second = "0" + second;
    }

    return minute + ":" + second;
};

<<<<<<< HEAD
//start wavesurfer object 
wavesurfer = WaveSurfer.create({
=======
var wavesurfer = Object.create(WaveSurfer);

wavesurfer.init({
>>>>>>> a5f69f636346dd58856b23e7518278f0ce24c6e2
    container: "#wave",
    waveColor: "#7D7D7D", // тут можно поменять фоновый цвет плеера
    progressColor: "#D5A216", // тут можно поменять цвет заполнения
    height: 48, // высота плеера
    scrollParent: false
});

<<<<<<< HEAD
=======


>>>>>>> a5f69f636346dd58856b23e7518278f0ce24c6e2
//загружаем нужную песню
wavesurfer.load("sound.mp3");

//play and pause a player
playPause.addEventListener("click", function (e) {
    wavesurfer.playPause();
});

//load audio duration on load
wavesurfer.on("ready", function (e) {
    duration.textContent = timeCalculator(wavesurfer.getDuration());
});

//get updated current time on play
wavesurfer.on("audioprocess", function (e) {
    current.textContent = timeCalculator(wavesurfer.getCurrentTime());
});

//change play button to pause on plying
wavesurfer.on("play", function (e) {
    playPause.classList.remove("fi-rr-play");
    playPause.classList.add("fi-rr-pause");
});

//change pause button to play on pause
wavesurfer.on("pause", function (e) {
    playPause.classList.add("fi-rr-play");
    playPause.classList.remove("fi-rr-pause");
});

//update current time on seek
wavesurfer.on("seek", function (e) {
    current.textContent = timeCalculator(wavesurfer.getCurrentTime());
});