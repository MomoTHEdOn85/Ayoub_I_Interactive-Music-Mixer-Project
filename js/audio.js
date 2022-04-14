(() => {
	const theAudio = document.querySelector("audio"),
		track = document.querySelectorAll("audio"),
		playButton = document.getElementById("playButton"),
		pauseButton = document.getElementById("pauseButton"),
		rewindButton = document.getElementById("rewindButton");
		resetButton = document.getElementById("resetButton");

	 function loadTrack() {
		debugger;

		theAudio.src = `audio/${this.dataset.key}.wav`;
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

	function resett() {
		window.location.reload();
	}



	  theAudio.addEventListener("ended", loadTrack);

	  playButton.addEventListener("click", playTrack);
	  pauseButton.addEventListener("click", pauseTrack);
	  rewindButton.addEventListener("click", rewindTrack);
		resetButton.addEventListener("click", resett);
})()
