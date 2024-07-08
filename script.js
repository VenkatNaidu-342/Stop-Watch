document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startStop");
    const resetButton = document.getElementById("reset");
    const stopwatch = document.getElementById("stopwatch");
    const body = document.body;

    let isRunning = false;
    let interval;
    let elapsedTime = 0;

    function formatTime(seconds) {
        const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${hrs}:${mins}:${secs}`;
    }

    function updateStopwatch() {
        elapsedTime++;
        stopwatch.innerText = formatTime(elapsedTime);
        console.log("Stopwatch updated:", formatTime(elapsedTime)); // Debug log
    }

    startButton.addEventListener("click", () => {
        if (isRunning) {
            clearInterval(interval);
            startButton.innerText = "Start";
            stopwatch.style.boxShadow = "none"; // Remove box shadow
            console.log("Stopwatch stopped"); // Debug log
        } else {
            interval = setInterval(updateStopwatch, 1000);
            startButton.innerText = "Stop";
            stopwatch.style.boxShadow = "0 0 100px 10px aqua"; // Add box shadow
            console.log("Stopwatch started"); // Debug log
        }
        isRunning = !isRunning;
        console.log("isRunning:", isRunning); // Debug log
    });

    resetButton.addEventListener("click", () => {
        clearInterval(interval);
        isRunning = false;
        elapsedTime = 0;
        stopwatch.innerText = formatTime(elapsedTime);
        startButton.innerText = "Start";
        stopwatch.style.boxShadow = "none"; // Remove box shadow
        body.classList.remove("background-change"); // Remove background change class
        stopwatch.style.color = ""; // Reset text color
        stopwatch.style.backgroundColor = ""; // Reset background color
        console.log("Stopwatch reset"); // Debug log
    });

    // Additional event listener for changing background and text color
    startButton.addEventListener("click", () => {
        body.classList.toggle("background-change");
        stopwatch.style.color = "white";
        stopwatch.style.backgroundColor = "#333";
    });
});
