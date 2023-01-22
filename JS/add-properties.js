let fileInput = document.querySelector("#filename");
let fileShower = document.querySelector(".image-holder > label");
let fileDrop = document.querySelector(".image-title");

fileInput.addEventListener("change", () => {
	fileShower.innerHTML = fileInput.value.split("\\").pop();
});

fileInput.addEventListener("dragenter", () => {
	fileShower.classList.add("dragover");
});

fileInput.addEventListener("dragleave", () => {
	fileShower.classList.remove("dragover");
});