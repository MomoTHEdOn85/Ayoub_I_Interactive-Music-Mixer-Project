(() => {
	leftImages = document.querySelectorAll(".left-images-drag *"),

		titleContainer = document.querySelectorAll(".title"),
		rightImages = document.querySelectorAll(".right-images-drag *"),
		Images = document.querySelectorAll("#images *");

	const imgIcon = document.querySelectorAll("#images *");
	const music = document.querySelectorAll(".instruments");
	const	dropZones = document.querySelectorAll(".dropArea");


	function startDrag(event) {
		console.log("started dragging");
		//saving ref to the icon we are dragging
		event.dataTransfer.setData("draggedIcon", event.target.id);
	}

	function draggedOver(event) {
		event.preventDefault();
		console.log("dragged over me");
	}

	function handleDrop(event) {
		event.preventDefault();
		let state = event.dataTransfer.getData("draggedIcon");
		console.log("dropped on me", state);

		if(this.children.length > 0) { //stop code when the div already have icon
			return;
		}
		this.appendChild(document.querySelector(`#${state}`));
	}


	function text(event) {
		console.log("clicked on: header");
	}



	leftImages.forEach(img => img.addEventListener("dragstart", startDrag));
	rightImages.forEach(img => img.addEventListener("dragstart", startDrag));
	music.forEach(img => img.addEventListener("dragstart", startDrag));
	titleContainer.forEach(header => header.addEventListener("click", text));
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", handleDrop);
	});

})();
