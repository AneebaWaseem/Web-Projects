
    // Set the launch date and time (adjust to your product launch date)
    const launchDate = new Date("2024-10-23T00:00:00").getTime();

    // Update the countdown every second
    const timer = setInterval(function () {
        const now = new Date().getTime();
        const timeRemaining = launchDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(((timeRemaining % (1000 * 60 * 60 * 24))) / (1000 * 60 * 60) + ((days)*24));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown on the page
        const countdownElement = document.getElementById("countdown");
        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span>${hours}</span>
            </div>
            <span> : </span>
            <div class="countdown-item">
                <span>${minutes}</span>
            </div>
            <span> : </span>
            <div class="countdown-item">
                <span>${seconds}</span>
            </div>
        `;

        // If the countdown timer reaches zero, clear the interval
        if (timeRemaining < 0) {
            clearInterval(timer);
            countdownElement.innerHTML = "Now Available!";
        }
    }, 1000); // Update every second

