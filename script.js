let flipCount = 0;
const coin = document.getElementById('coin');
const resultElement = document.getElementById('result');
const flipHistoryElement = document.getElementById('flipHistory');

document.getElementById('flipButton').addEventListener('click', flipCoin);

function flipCoin() {
    // Reset any previous animation classes
    coin.classList.remove('flip', 'show-front', 'show-back');
    resultElement.innerText = ''; // Clear previous result text
    
    // Generate a random number (0 or 1)
    const result = Math.floor(Math.random() * 2);
    const outcome = result === 0 ? 'Heads' : 'Tails';
    
    // Add flip animation class
    coin.classList.add('flip');
    
    // After the animation, show the result, update history, and reset coin rotation
    setTimeout(() => {
        // Temporarily show the outcome side
        coin.classList.add(outcome === 'Heads' ? 'show-front' : 'show-back');
        resultElement.innerText = `You got: ${outcome}`;
        
        // Update Flip History
        flipCount++;
        const historyEntry = `Flip #${flipCount}: ${outcome}`;
        const historyItem = document.createElement('div');
        historyItem.innerText = historyEntry;
        flipHistoryElement.appendChild(historyItem);
        
        // Reset coin rotation after a brief display of the outcome
        setTimeout(() => {
            coin.classList.remove('show-front', 'show-back');
        }, 1000); // Briefly show the outcome before resetting
    }, 2000); // Timeout matches the animation duration
}
