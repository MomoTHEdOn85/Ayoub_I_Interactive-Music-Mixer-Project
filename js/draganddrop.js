(() => {
	const leftImages = document.querySelectorAll(".left-images-drag *"),
	      rightImages = document.querySelectorAll(".right-images-drag *"),
				titleContainer = document.querySelectorAll(".title"),

				Ikon = document.querySelectorAll(".icon"),
				music = document.querySelectorAll(".Loop"),
				dropZones = document.querySelectorAll(".dropArea"),
				dropCont = document.querySelector(".Drop-cont"),
				playButton = document.querySelector("#playButton");



//  const imgIcon = document.querySelectorAll("#images *");

//	  const loops = document.querySelectorAll(".Loops");
//
//		track = document.querySelectorAll("audio"),
	//	playButton = document.getElementById("playButton"),
		//pauseButton = document.getElementById("pauseButton"),
		//rewindButton = document.getElementById("rewindButton");



	function startDrag(event) {
		console.log("started dragging");
		//saving ref to the icon we are dragging
		event.dataTransfer.setData("draggedIcon", event.target.id);
		event.dataTransfer.setData("draggedSound", this.dataset.sound);
	}

	function draggedOver(event) {
		event.preventDefault();
		console.log("dragged over me");
	}


	function handleDrop(event) {
		event.preventDefault();
		let droPPedIcon = event.dataTransfer.getData("draggedIcon");
		console.log("dropped on me", droPPedIcon);
		//musi = document.querySelector(`audio[data-key="${droPPedIcon}"]`);

		if(this.children.length > 0) { //stop code when the div already have icon
			return;
		}

		//musi.loadTrack();
		//shifting new icons to the dropzones
		this.appendChild(document.querySelector(`#${droPPedIcon}`));
	}


	function text(event) {
		console.log("clicked on: header");
	}

	function LoadMusic(event) {
		let draggedSound = event.dataTransfer.getData("draggedSound");
		let AudioEl = document.querySelector(`audio[data-key="${draggedSound}"]`);
		AudioEl.classList.add("on");

		console.log("dropped this: ", draggedSound);

		AudioEl.currentTime = 0;
		AudioEl.play();

	}

	function playTrack (event) {
		event.preventDefault();
		let playy = document.querySelectorAll(".on");
		playy.forEach(playy => playy.play());
	}







  //event listener for each icons or images
	Ikon.forEach(img => img.addEventListener("dragstart", startDrag));

	//rightImages.forEach(img => img.addEventListener("dragstart", startDrag));
	//leftImages.forEach(img => img.addEventListener("dragstart", startDrag));





	titleContainer.forEach(header => header.addEventListener("click", text));

	playButton.addEventListener("click", playTrack);

	window.addEventListener("drop", LoadMusic);

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", handleDrop);
	});

//	Ikon.forEach(zone => {
//	zone.addEventListener("dragover", draggedOver);
//	zone.addEventListener("drop", handleDrop);
//});



})();
