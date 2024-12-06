const apertureSlider = document.getElementById("aperture-slider");
const backgroundImage = document.querySelector(".background");
const apertureValueDisplay = document.createElement("span"); // Create a span for displaying aperture value

// Insert the span after the slider
apertureSlider.insertAdjacentElement("afterend", apertureValueDisplay);

apertureSlider.addEventListener("input", (event) => {
  const aperture = event.target.value;

  // Update the displayed aperture value
  apertureValueDisplay.textContent = `Bländare: f/${aperture}`;

  // Simulate blur based on aperture value
  const blurAmount = Math.max((22 - aperture) * 0.5, 0); // More blur at lower aperture values
  backgroundImage.style.filter = `blur(${blurAmount}px)`;
});

// Set the initial aperture value on page load
apertureValueDisplay.textContent = `Bländare: f/${apertureSlider.value}`;
