const words = ["Tra bo dicho", "Make your poetry","Şiirini yap", "Maak je poëzie","نظم", "Haz tu poesía", "시 만들기", "Faites votre poésie"];
const linkElements = document.querySelectorAll(".link");

function animateWords() {
  linkElements.forEach((linkElement) => {
    const text = words[Math.floor(Math.random() * words.length)];
    const splitText = text.split("");
    const innerHTML = splitText
      .map(
        (word) =>
          `<span>${word
            .split("")
            .map((char) => (char === " " ? "&nbsp;" : char))
            .join("")}</span>`
      )
      .join("");
    linkElement.innerHTML = `<div>${innerHTML}</div><div></div>`;
    linkElement.classList.add("animate");

    const duration = (splitText.length * 0.5) / 2 + "s";
    const lineHeight = linkElement.offsetHeight + "px";
    const lineX = linkElement.offsetHeight - 5 + "px";

    linkElement.style.setProperty("--duration", 2.5 + "s");
    linkElement.style.setProperty("--line-d", duration);
    linkElement.style.setProperty("--line-height", lineHeight);
    linkElement.style.setProperty("--line-x", lineX);
  });
}

animateWords();
setInterval(animateWords, 3000);
