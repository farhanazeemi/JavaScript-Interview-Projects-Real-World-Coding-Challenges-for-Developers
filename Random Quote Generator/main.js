const quoteWrapper = document.querySelector(".quote-wrapper");
const refreshBtn = document.querySelector(".new-qt");
const themeToggleBtn = document.getElementById("theme-toggle");

async function fetchRandomQuote() {
    try {
        // Display loading state
        quoteWrapper.innerHTML = "Loading...";

        const response = await fetch("https://api.quotable.io/quotes/random");
        const result = await response.json();
        displayQuote(result[0]);
    } catch (error) {
        console.log(error);
        quoteWrapper.innerHTML = "Failed to load quote. Please try again.";
    }
}

function displayQuote(quote) {
    quoteWrapper.innerHTML = `
        <div class="quote-item">
            <p class="tags">${quote.tags[0]}</p>
            <p class="date">${new Date(quote.dateAdded).toLocaleDateString()}</p>
            <p class="content">${quote.content}</p>
            <p class="author">${quote.author}</p>
        </div>`;
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    themeToggleBtn.textContent = 
        document.body.classList.contains("dark-mode") ? "Switch to Light Mode" : "Switch to Dark Mode";
}

fetchRandomQuote();

refreshBtn.addEventListener("click", fetchRandomQuote);
themeToggleBtn.addEventListener("click", toggleTheme);
