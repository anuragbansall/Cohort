const colorBox = document.querySelector("#color-box");
const generateColorBtn = document.querySelector("#generate-color-btn");
const colorCodeInput = document.querySelector("#color-code");

function generateRandomHexColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
}

function changeColor() {
  const color = generateRandomHexColor();

  colorBox.style.backgroundColor = color;
  colorCodeInput.value = color;
}

function copyColorCode() {
  if (colorCodeInput.value) {
    colorCodeInput.select();
    navigator.clipboard
      .writeText(colorCodeInput.value)
      .then(() => {
        alert("Color code copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy color code to clipboard!");
      });
  }
}

function changeBackground() {
  const color = colorCodeInput.value;
  document.body.style.backgroundColor = color;
}

generateColorBtn.addEventListener("click", changeColor);
colorCodeInput.addEventListener("click", copyColorCode);
colorBox.addEventListener("click", changeBackground);
