const input = document.getElementById("input-text");
const preview = document.querySelector(".preview");

input.addEventListener("input", () => {
preview.innerText = input.value;
});
