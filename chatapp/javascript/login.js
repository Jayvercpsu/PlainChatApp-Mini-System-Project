const form = document.querySelector(".login form"),
  continueBtn = form.querySelector(".button input"),
  errorText = form.querySelector(".error-text");

form.onsubmit = (e) => {
  e.preventDefault(); 
}

continueBtn.onclick = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/login.php", true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let data = xhr.response;
        console.log(data); // Debugging line to check the response
        if (data.trim() === "success") {
          // Display success message
          errorText.style.display = "block";
          errorText.textContent = "Login successful. Redirecting...";
          // Redirect after a delay
          setTimeout(() => {
            location.href = "users.php";
          }, 1000); // Adjust the delay time as needed
        } else {
          errorText.style.display = "block";
          errorText.textContent = data;
        }
      }
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}
