// =====================
// Part 2: JavaScript Functions — Scope, Parameters & Return Values
// =====================

// --- 1. Function with parameters and return value ---
/**
 * Calculates the area of a rectangle.
 * Demonstrates parameters and return values.
 */
function calcArea(width, height) {
    return width * height;
}

document.getElementById('calcBtn').addEventListener('click', function() {
    // Local scope variable
    let area = calcArea(5, 6);
    document.getElementById('calcResult').textContent = `Area is ${area}`;
});

// --- 2. Function using local/global scope ---
let globalColor = "#8bc34a"; // Global scope

/**
 * Generates a random hex color.
 * Returns the color string.
 */
function getRandomColor() {
    // Local scope only
    const hex = Math.floor(Math.random()*16777215).toString(16);
    return "#" + hex.padStart(6,"0");
}

/**
 * Changes the background color of the colorBox div.
 * Demonstrates function reuse and scope.
 */
function changeBoxColor(color) {
    document.getElementById('colorBox').style.background = color;
    document.getElementById('colorBox').style.borderColor = color;
}

document.getElementById('randomColorBtn').addEventListener('click', function() {
    let newColor = getRandomColor(); // Local scope
    changeBoxColor(newColor);
});

// =====================
// Part 1: CSS3 Transitions and Animations for Dynamic Styling Effects
// =====================

// Fade box toggling
const fadeBox = document.querySelector('.fade-box');
fadeBox.addEventListener('click', function() {
    fadeBox.classList.toggle('hide');
});

// =====================
// Part 3: Combining CSS Animations with JavaScript
// =====================

/**
 * Triggers the bounce animation on the jsAnimBox div.
 * Removes the class after animation for reuse.
 */
function animateBox() {
    const box = document.getElementById('jsAnimBox');
    box.classList.add('animated');
    setTimeout(() => box.classList.remove('animated'), 1000); // Remove for repeated use
}

document.getElementById('animateBoxBtn').addEventListener('click', animateBox);

// --- Modal popup functions ---
/**
 * Shows the modal using a class to trigger CSS animation.
 */
function showModal() {
    document.getElementById('modal').classList.add('show');
}
/**
 * Hides the modal with a fade-out effect.
 */
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

document.getElementById('showModalBtn').addEventListener('click', showModal);
document.getElementById('closeModalBtn').addEventListener('click', closeModal);

// =====================
// End of Assignment
// =====================