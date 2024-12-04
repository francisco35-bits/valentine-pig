// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the pig.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    
    // Create a new Image element for the pig
    var pigImage = new Image();
    // Set the source (file path) for the pig image
    pigImage.src = 'pig.gif'; // Assuming the pig image is named "pig.gif"
    // Set alternative text for the image (for accessibility)
    pigImage.alt = 'pig';
    
    // Add error handler to log if image fails to load
    pigImage.onerror = function() {
        console.log('Error al cargar pig.gif');
    };

    // When the pig image is fully loaded, add it to the image container
    pigImage.onload = function() {
        console.log('pig.gif cargado exitosamente');
        imageContainer.appendChild(pigImage);
    };
}

// Function to display the pig-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    
    // Create a new Image element for the pig-heart
    var pigheartImage = new Image();
    // Set the source (file path) for the pig-heart image
    pigheartImage.src = 'pigheart.gif'; // Assuming the pig-heart image is named "pigheart.gif"
    // Set alternative text for the image (for accessibility)
    pigheartImage.alt = 'pigheart';
    
    // Add error handler to log if image fails to load
    pigheartImage.onerror = function() {
        console.log('Error al cargar pigheart.gif');
    };

    // When the pig-heart image is fully loaded, add it to the image container
    pigheartImage.onload = function() {
        console.log('pigheart.gif cargado exitosamente');
        imageContainer.appendChild(pigheartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the pig.gif initially
document.addEventListener('DOMContentLoaded', function() {
    displayCat(); // Call the function when the DOM is fully loaded
});
