fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
.then((data) => {
    return data.json();
    
})
.then((responseData) => {
    
    // Check if the "places" array exists and is not empty
    if (responseData && responseData.places && responseData.places.length > 0) {
        // Access the array of places
        const places = responseData.places;

        // Access the output div
        const outputDiv = document.getElementById('output');

        // Loop through each place and create HTML elements dynamically
        places.forEach((place) => {
            const placeDiv = document.createElement('div');
            placeDiv.classList.add('place');

            const nameElement = document.createElement('h2');
            nameElement.innerText = place.name;

            const imageElement = document.createElement('img');
            imageElement.src = place.image;
            imageElement.alt = 'Place Image';

            const infoElement = document.createElement('p');
            infoElement.innerText = place.info;

            // Append elements to the place div
            placeDiv.appendChild(nameElement);
            placeDiv.appendChild(imageElement);
            placeDiv.appendChild(infoElement);

            // Append  place div to the output div
            outputDiv.appendChild(placeDiv);
        });
    } else {
        console.error('Data structure is not as expected.');
    }
})
.catch((error) => {
    console.error('Error fetching data:', error);
});