const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

function setFontSize(fontSize) {
  text.style.fontSize = `${fontSize}px`;
  fontSizeControl.value = fontSize;
}

fontSizeControl.addEventListener("input", (event) => {
  setFontSize(event.target.value);
});

setFontSize(fontSizeControl.value);
