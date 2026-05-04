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
    const btn = event.target;
    btn.classList.toggle('active');
    
    if (!arduinoIP) {
        alert("No IP address set!");
        return;
    }

    const status = btn.classList.contains('active') ? 1 : 0;
    console.log(`LED ${id} is now ${status}`);
    fetch(`http://${arduinoIP}:${port}/set?id=${id}&val=${status}`, {
        mode: 'no-cors' // This prevents the browser from blocking the request
    })

    .then(() => console.log(`Sent: LED ${id} to ${status}`))
    .catch(err => console.error("Request failed:", err));
    
    const isOn = button.classList.contains('active');
    console.log("button " + id + "is now" + (isOn ? "RED" : "OFF"));
    
}

function draw(element) {
    if (isDrawing) {
        element.classList.add('active');
    }
}

function drawInvert(element) {
    if (isDrawing) {
        element.classList.remove('active')
    }
}