// Open Modal when image is clicked
function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;  // Set the source of the modal image to the clicked image
    captionText.innerHTML = img.alt;  // Set the caption (optional)
}

// Close Modal when clicked outside image or on close button
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
