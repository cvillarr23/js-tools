/**
 * Inserts a <p>. before the canvas with innerText that reads the x, y position of the mouse.
 */

let canvas = document.getElementsByTagName("canvas")[0];
let coordinates = document.createElement("p");

canvas.parentNode.insertBefore(coordinates, canvas);

// Gets the mouse position relative to canvas in [x,y] format.
function getMousePosition(canvas, event) {
	let rect = canvas.getBoundingClientRect();
	let x = event.clientX - rect.left;
	let y = event.clientY - rect.top;
	return [x, y];
}

canvas.addEventListener("mousemove", function (event) {
	let mousePosition = getMousePosition(canvas, event);
	coordinates.innerText = "Mouse Position: " + "[" + mousePosition[0].toFixed(0) + ", " + mousePosition[1].toFixed(0) + "]";
});