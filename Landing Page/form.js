document.getElementById("signupForm").addEventListener("submit", function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Your form processing code here
    // ...

    // If the sign-up is successful, redirect to the thank you page
    window.location.href = "thankyou.html";
});