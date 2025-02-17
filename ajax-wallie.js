function fetchWalletInfo() {
    var xhr = new XMLHttpRequest();
    
    // API URL
    var url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC';
    
    xhr.open('GET', url, true);
    
    // Set required headers (Replace 'your_api_key_here' with your actual API key)
    xhr.setRequestHeader('X-CMC_PRO_API_KEY', 'd1e67944-d11f-4765-8a9d-894922ef9763');
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onload = function() {
        if (xhr.status === 200) {  // If the request was successful
            var response = JSON.parse(xhr.responseText);  // Parse the JSON response
            displayWalletInfo(response);  // Display the data
        } else {
            console.log('Error fetching wallet information:', xhr.status, xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.log('Request failed');
    };
    
    xhr.send();
}

// Function to display the fetched Bitcoin price
function displayWalletInfo(data) {
    var price = data.data.BTC.quote.USD.price;  // Extract BTC price

    var walletElement = document.getElementById('wallet-info');  // Access the HTML element
    walletElement.innerHTML = `<p>Bitcoin Price: $${price.toFixed(2)}</p>`;  // Display price
}

// Call the function to fetch data when the page loads
window.onload = fetchWalletInfo;
