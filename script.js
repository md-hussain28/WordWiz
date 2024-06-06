// JS for stats section
const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const characterCount = document.getElementById('characterCount');
const readabilityScore = document.getElementById('readabilityScore');

textInput.addEventListener('input', () => {
    const text = textInput.value.trim();
    const words = text.split(/\s+/).filter(word => word !== '');
    const characters = text.length;
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence !== '');

    wordCount.textContent = words.length;
    characterCount.textContent = characters;

    // Calculate readability score (example using Flesch-Kincaid Grade Level)
    const wordPerSentence = words.length / sentences.length;
    const syllables = text.split(/[aeiouy]+/).filter(Boolean).length; // Improved syllable count calculation
    
    const readability = 206.835 - 1.015 * wordPerSentence - 67.6 * (syllables / words.length);
    
    let category;
    if (readability >= 80) {
      category = "Very Easy";
    } else if (readability >= 70) {
      category = "Easy";
    } else if (readability >= 60) {
      category = "Fairly Easy";
    } else if (readability >= 50) {
      category = "Standard";
    } else if (readability >= 30) {
      category = "Fairly Difficult";
    } else if (readability >= 5) {
      category = "Difficult";
    } else {
      category = "Very Difficult";
    }
    
    console.log("Readability Score:", readability.toFixed(2));
    console.log("Readability Category:", category);
    
    readabilityScore.textContent = category;
    
    
});

// Get the textarea element
const textarea = document.querySelector('textarea');

textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, parseInt(getComputedStyle(textarea).maxHeight)) + 'px';
});

// JS for Reset button

let text = document.getElementById('textInput');
const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
    console.log(text.value);
    text.value = "";
    wordCount.textContent = 0;
    characterCount.textContent = 0;
    readabilityScore.textContent = 'N/A';
});