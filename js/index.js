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
    element.classList.toggle('active');
    const state = element.classList.contains('active') ? 1 : 0;
    sendLED(id, state);
}

function sendLED(id, state) {
    if (!arduinoIP) {
        alert("No IP address set!");
        return;
    }
    fetch(`http://${arduinoIP}:${port}/set?id=${id}&val=${state}`, {
        mode: 'no-cors'
    })
    .then(() => console.log(`Sent: LED ${id} → ${state}`))
    .catch(err => console.error("Request failed:", err));
}

function draw(element, id) {
    if (isDrawing) {
        element.classList.add('active');
        sendLED(id, 1);
    }
}

