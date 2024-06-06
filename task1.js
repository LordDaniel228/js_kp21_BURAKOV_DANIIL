while (true) {
    // Отримати дані користувача
    let word = prompt("Please enter a word (or type 'exit' to quit):");

    // Перевірка
    if (word === null || word.toLowerCase() === 'exit') {
        console.log("Exited.");
        break;
    }

    // Validate for empty input or input with only spaces
    if (word.trim() === "") {
        console.log("Invalid value");
    } else {
        // Remove leading and trailing spaces
        word = word.trim();
        let length = word.length;
        let middleIndex = Math.floor(length / 2);

        if (length % 2 === 0) {
            // If length is even, get the middle two characters
            console.log(word[middleIndex - 1] + word[middleIndex]);
        } else {
            // If length is odd, get the middle character
            console.log(word[middleIndex]);
        }
    }
}