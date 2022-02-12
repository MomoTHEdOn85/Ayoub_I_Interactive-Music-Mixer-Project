(() => {
    leftImages = document.querySelectorAll(".left-images-drag *"),
    dropZones = document.querySelectorAll("#bg-image"),
    titleContainer = document.querySelectorAll(".title"),
    rightImages = document.querySelectorAll(".right-images-drag *");
    

    function startDrag(event) {
        console.log("started dragging");
    }

    function draggedOver(event) {
        event.preventDefault();
        console.log("dragged over me");
    }

    function handleDrop(event) {
        event.preventDefault();
        console.log("dropped on me");
    }

    function text(event) {
        console.log("clicked on: header",);
    }

    leftImages.forEach(img => img.addEventListener("dragstart", startDrag));
    rightImages.forEach(img => img.addEventListener("dragstart", startDrag));
    titleContainer.forEach(header => header.addEventListener("click", text));
    dropZones.forEach(zone => {
        zone.addEventListener("dragover", draggedOver);
        zone.addEventListener("drop", handleDrop);
    });
})();