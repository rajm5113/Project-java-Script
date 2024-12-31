document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumb");
    const imageDiv = document.getElementById("image");

    // Add event listeners for each thumbnail
    thumbnails.forEach(previewPic => {
        // Mouse events
        previewPic.addEventListener("mouseover", () => upDate(previewPic));
        previewPic.addEventListener("mouseout", unDo);

        // Keyboard focus events
        previewPic.addEventListener("focus", () => upDate(previewPic));
        previewPic.addEventListener("blur", unDo);
    });
});

function upDate(previewPic) {
    console.log("Event triggered on element:", previewPic);
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("Resetting display area");
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
