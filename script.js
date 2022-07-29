const imagContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'fUpGe9cxB1eBXCTNGcSY7VYFIctiwiimQKW33ffAWII';

const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Creat Elements For Links & Photos, Add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        
    }
}

// In Load
getPhotos();