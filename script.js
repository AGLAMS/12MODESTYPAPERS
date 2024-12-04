// Function to change the background dynamically
function changeBackground() {
    // List of background colors
    const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#f0e68c', '#add8e6'];
    
    // Get a random color from the list
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Set the body's background color
    document.body.style.backgroundColor = randomColor;
  }