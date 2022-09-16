// *** FUNCTIONS TO INITIALIZE GAME BEGINS HERE ***

// generates an array of random colors, by hue value
// the array has the number of tileNumbers, provided when invoked
export const generateColors = tileNumbers => {
    const colorArray = [];
    // runs if there are still tiles left to generate a color for
    while (tileNumbers > 0) {
        // initializing a random hue...
        let randomHue = Math.round(Math.random() * 255);
        // if the random hue already exists in our array, keep randomizing until the value does not already exist
        while (colorArray.includes(randomHue)) {
            randomHue = Math.round(Math.random() * 255);
        }
        // add the new, random hue to our array of colors
        colorArray.push(randomHue);
        tileNumbers--;
    }
    return colorArray;
}

export const sortColors = colors => {
    return colors.sort((a, b) => a - b);
}