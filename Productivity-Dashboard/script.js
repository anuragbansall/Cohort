// Display the username in the container
const displayUserName = () => {
  const userNameContainer = document.getElementById("userNameContainer");
  const userName = localStorage.getItem("userName") ?? "User";
  userNameContainer.textContent = `${userName}!`;
};

// Prompt for username and store it
const getUserName = async () => {
  const { value: userName } = await Swal.fire({
    title: "Enter your name",
    input: "text",
    inputPlaceholder: "Your name",
    confirmButtonText: "Submit",
    allowOutsideClick: false, // Prevents closing on outside click
    inputValidator: (value) => {
      if (!value) return "Please enter your name!";
    },
  });

  if (userName) {
    localStorage.setItem("userName", userName);
    displayUserName();
  }
};

// Initialize
localStorage.getItem("userName") ? displayUserName() : getUserName();