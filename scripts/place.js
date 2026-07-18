// Current Year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Last Modified
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

// Wind Chill Calculation
const temp = parseFloat(document.getElementById("temperature").textContent);
const speed = parseFloat(document.getElementById("windSpeed").textContent);

let windChill;

// Check conditions
if (temp <= 10 && speed > 4.8) {
  windChill =
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16);

  windChill = windChill.toFixed(1) + "°C";
} else {
  windChill = "N/A";
}

// Display result
document.getElementById("windChill").textContent = windChill;