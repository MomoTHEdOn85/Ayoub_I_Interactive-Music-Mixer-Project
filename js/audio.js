(() => {
	const theAudio = document.querySelector("audio"),
		trackButtons = document.querySelectorAll(".audio-track"),
		playButton = document.getElementById("playButton"),
		pauseButton = document.getElementById("pauseButton"),
		rewindButton = document.getElementById("rewindButton");


	function loadTrack() {
		//debugger;
		theAudio.src = `audio/${this.dataset.audiotrack}.mp3`;
		theAudio.load();

		playTrack();
	}

	function playTrack() {
		theAudio.play();
	}

	function pauseTrack() {
		theAudio.pause();
	}

	function rewindTrack() {
		theAudio.currentTime = 0;

		playTrack();
	}

	trackButtons.forEach(button => button.addEventListener("click", loadTrack));

	playButton.addEventListener("click", playTrack);
	pauseButton.addEventListener("click", pauseTrack);
	rewindButton.addEventListener("click", rewindTrack);
})()