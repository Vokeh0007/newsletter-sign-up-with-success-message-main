const form = document.querySelector("form"); 
const container = document.querySelector(".container"); 
const container_2 = document.querySelector(".container-2"); 
const emailInput = document.querySelector("#email");
const errorMessage = document.createElement("p"); // Create an element for error messages

errorMessage.style.color = "red";
errorMessage.style.fontSize = "14px";
errorMessage.style.marginTop = "5px";

// Add an event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  // Stop the form from reloading the page

  // Get the email input value
  const emailValue = emailInput.value.trim();

  // Check if the email is valid
  if (validateEmail(emailValue)) {
    // If valid, hide the first container and show the success message
    container.classList.add("hide");
    container_2.classList.remove("hide");
  } else {
    // If invalid, show an error message
    if (!form.contains(errorMessage)) {
      errorMessage.textContent = "Please enter a valid email address.";
      emailInput.insertAdjacentElement("afterend", errorMessage);
    }
  }
});

// Email validation function
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return regex.test(email);
}

