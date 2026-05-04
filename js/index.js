const port = 8888; 
let isDrawing = false;
let arduinoIP = "";

window.onload = () => {
    arduinoIP = prompt("Please select your Arduino's IP adress");
    if (arduinoIP) {
        console.log("sending to Arduino at:", arduinoIP);
    }
};

window.onmousedown = () => {isDrawing = true; };
window.onmouseup = () => {isDrawing = false; };

function toggleLED(id, element) {
    fetch(`http://${arduinoIP}:${port}/set?id=${id}&val=${status}`, {
        mode: 'no-cors' // This prevents the browser from blocking the request
    })

    .then(() => console.log(`Sent: LED ${id} to ${status}`))
    .catch(err => console.error("Request failed:", err));
}

function sendLED(id, state) {
    if (!arduinoIP) {
        alert("no IP adress set!")
        return;
    }
    fetch(`http://${arduinoIP}:${port}/set?id=${id}&val=${status}`, {
        mode: 'no-cors' // This prevents the browser from blocking the request
    })

    .then(() => console.log(`Sent: LED ${id} to ${status}`))
    .catch(err => console.error("Request failed:", err));
}

function draw(element, id) {
    if (isDrawing) {
        element.classList.add('active');
        sendLED(id, 1);
    }
}

