// ===== Set Current Year in Footer =====
function setYear() {
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// ===== Navigate to a Page =====
function goToPage(page) {
  window.location.href = page;
}

// ===== Toggle Read More Text (About Page) =====
function toggleReadMore() {
  var moreText = document.getElementById("moreText");
  var btn = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
}

// ===== Validate Registration Form =====
function validateForm(event) {
  var fullName = document.getElementById("fullName").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var gender = document.querySelector('input[name="gender"]:checked');
  var country = document.getElementById("country").value;

  if (fullName === "") {
    alert("Please enter your full name.");
    event.preventDefault();
    return false;
  }

  if (email === "" || !email.includes("@")) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    event.preventDefault();
    return false;
  }

  if (!gender) {
    alert("Please select your gender.");
    event.preventDefault();
    return false;
  }

  if (country === "") {
    alert("Please select your country.");
    event.preventDefault();
    return false;
  }

  // If all validations pass, redirect to thank you page
  event.preventDefault();
  window.location.href = "thankyou.html";
  return true;
}

// ===== Run on Page Load =====
window.onload = function () {
  setYear();
};
